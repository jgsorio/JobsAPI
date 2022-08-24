import { Request, Response } from "express";
import Candidate from "../models/Candidate";

class CandidatesController {
    async index(req: Request, res: Response) {
        const candidates = await Candidate.findAll();
        return res.json(candidates); 
    }

    async save(req: Request, res: Response) {
        const { name, email, bio, phone, openToWork = true } = req.body;
        try {
            const candidate = await Candidate.create({ name, email, bio, phone, openToWork });
            return res.status(201).json(candidate);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(500).json({ message: error.message });
            }
        }
    }

    async show(req: Request, res: Response) {
        try {
            const candidate = await Candidate.findByPk(req.params.id);

            if (candidate) {
                return res.status(200).json(candidate);
            }

            return res.status(404).json({ message: 'Candidato não encontrado' });
        } catch (error) {
            if (error instanceof Error) {
                return res.status(500).json({ message: error.message });
            }
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { name, email, bio, phone, openToWork = true } = req.body;
            const candidate = await Candidate.findByPk(req.params.id);

            if (candidate) {
                candidate.name = name;
                candidate.email = email;
                candidate.bio = bio;
                candidate.phone = phone;
                candidate.openToWork = openToWork;
                candidate.save();

                return res.status(200).json(candidate);
            }

            return res.status(404).json({ message: 'Candidato não encontrado' });

        } catch (error) {
            if (error instanceof Error) {
                return res.status(500).json({ message: error.message });
            }
        }
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const candidate = await Candidate.findByPk(req.params.id);

            if (candidate) {
                candidate.destroy();

                return res.status(204).json({});
            }

            return res.status(404).json({ message: 'Candidato não encontrado' });

        } catch (error) {
            if (error instanceof Error) {
                return res.status(500).json({ message: error.message });
            }
        }
    }
}

export = new CandidatesController();