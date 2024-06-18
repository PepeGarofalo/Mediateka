// auth.ts
import jwt from 'jsonwebtoken';
import { jwtConfig } from '../config/configJwt';

export const generateToken = (user: any) => {
    return jwt.sign({ id: user.id, username: user.usersmedia }, jwtConfig.secret, { expiresIn: jwtConfig.expiresIn });
};

export const verifyToken = (token: string) => {
    try {
        return jwt.verify(token, jwtConfig.secret);
    } catch (error) {
        return null;
    }
};
