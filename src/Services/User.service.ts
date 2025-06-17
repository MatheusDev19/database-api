import { Express } from 'express';
import { User } from '../Database/Models/User';

export class UserService {
    static async createUser(name: string, email: string, password: string): Promise<User> {
        const user = await User.create({ name, email, password });
        return user;
    }
}
