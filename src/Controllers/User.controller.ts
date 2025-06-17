import { Request, Response } from 'express';
import { UserService } from '../Services/User.service';

export class UserController {
    static async createUser(req: Request, res: Response) {
        try {
            const { name, email, password } = req.body;
            const user = await UserService.createUser(name, email, password);
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao criar usuário' });
        }
    }
}