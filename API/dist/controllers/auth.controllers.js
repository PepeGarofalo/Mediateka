"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;
const login = (req, res) => {
    const { username, password } = req.body;
    if (username === USERNAME && password === PASSWORD) {
        // Credenciales válidas
        return res.status(200).json({ message: 'Credenciales válidas' });
    }
    else {
        // Credenciales inválidas
        return res.status(401).json({ message: 'Credenciales incorrectas' });
    }
};
exports.login = login;
