// controllers/userController.ts
import { Request, Response } from 'express';
import { Users } from '../entitie/user';
import bcrypt from 'bcryptjs';
import { generateToken } from '../helpers/auth';

export const createUsers = async (req: Request, res: Response) => {
    try {
        const { usersmedia, pasworddd } = req.body;
        const hashedPassword = await bcrypt.hash(pasworddd, 10);
        const users = new Users();
        users.usersmedia = usersmedia;
        users.pasworddd = hashedPassword;
        await users.save();
        return res.json(users);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const loginUser = async (req: Request, res: Response) => {
    try {
        const { usersmedia, pasworddd } = req.body;
        const user = await Users.findOne({ where: { usersmedia } });
        if (user && await bcrypt.compare(pasworddd, user.pasworddd)) {
            const token = generateToken(user);
            return res.json({ token });
        } else {
            return res.status(401).json({ message: 'Credenciales incorrectas' });
        }
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await Users.find();
        return res.json(users);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};
