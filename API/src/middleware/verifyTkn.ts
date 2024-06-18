// middleware/authMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../helpers/auth';

interface CustomRequest extends Request {
    user?: any;
}

export const authenticateJWT = (req: CustomRequest, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (token) {
        const decoded = verifyToken(token);
        if (decoded) {
            req.user = decoded;
            next();
        } else {
            return res.status(403).json({ message: 'Token inválido' });
        }
    } else {
        return res.status(401).json({ message: 'No se proporcionó token' });
    }
};
