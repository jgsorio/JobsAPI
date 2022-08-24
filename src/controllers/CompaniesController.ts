import { Request, Response } from "express";
import Company from "../models/Company";

class CompaniesController {
    async index(req: Request, res: Response) {
        try {
            const companies = await Company.findAll({ order: ['id']});
            return res.status(200).json(companies);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(500).json({ message: error.message });
            }
        }
    }

    async save(req: Request, res: Response) {
        try {
            const { name, email, website, bio } = req.body;
            const company = await Company.create({ name, email, website, bio })
            return res.status(201).json(company);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(500).json({ message: error.message });
            }
        }
    }

    async show(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const company = await Company.findByPk(id);
            
            if (company) {
                return res.status(200).json(company);
            }

            return res.status(404).json({ message: "Empresa não encontrada" });
        } catch (error) {
            if (error instanceof Error) {
                return res.status(500).json({ message: error.message });
            }
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { name, email, website, bio } = req.body;
            const company = await Company.findByPk(id);

            if (company) {
                const [ _, companies ] = await Company.update(
                    { name, email, website, bio },
                    { 
                        where: {id},
                        returning: true
                    }
                )
                return res.status(200).json(companies[0]);
            }

            return res.status(404).json({ message: "Empresa não encontrada" });

        } catch (error) {
            if (error instanceof Error) {
                return res.status(500).json({ message: error.message });
            }
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const company = await Company.findByPk(id);

            if (company) {
                company.destroy();
                return res.status(204).json({});
            }

            return res.status(404).json({ message: "Empresa não encontrada" });
        } catch (error) {
            if (error instanceof Error) {
                return res.status(500).json({ message: error.message });
            }
        }
    }
}

export = new CompaniesController();