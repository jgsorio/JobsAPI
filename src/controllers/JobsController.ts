import { Request, Response } from "express";
import { Job } from "../models";

class JobsController {
    async index(req: Request, res: Response) {
        try {
            const jobs = await Job.findAll({ include: 'company' });
            return res.status(200).json(jobs);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(500).json({ message: error.message });
            }
        }
    }

    async save(req: Request, res: Response) {
        try {
            const { title, description, limitDate, companyId } = req.body;
            const job = await Job.create({ title, description, limitDate, companyId });

            return res.status(201).json(job);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(500).json({ message: error.message });
            }
        }
    }

    async show(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const job = await Job.findByPk(id, { include: 'company'});

            if (job) {
                return res.status(200).json(job);
            }

            return res.status(404).json({ message: 'Trabalho não encontrado' });
        } catch (error) {
            if (error instanceof Error) {
                return res.status(500).json({ message: error.message });
            }
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { title, description, limitDate, companyId } = req.body;

            const job = await Job.findByPk(id, { include: 'company'});

            if (job) {
                const [_, jobs ] = await Job.update(
                    {title, description, limitDate, companyId },
                    {
                        where: {id},
                        returning: true
                    }
                )
                return res.status(200).json(jobs[0]);
            }

            return res.status(404).json({ message: 'Trabalho não encontrado' });
        } catch (error) {
            if (error instanceof Error) {
                return res.status(500).json({ message: error.message });
            }
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const job = await Job.findByPk(id);

            if (job) {
                job.destroy();
                return res.status(204).json({});
            }

            return res.status(404).json({ message: 'Trabalho não encontrado' });
        } catch (error) {
            if (error instanceof Error) {
                return res.status(500).json({ message: error.message });
            }
        }
    }
}

export default new JobsController();
