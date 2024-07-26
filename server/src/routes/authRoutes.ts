import { Router } from 'express';

import type { RouteHandler } from '../routes/routeTypes'; // Type-only import

const authRoutes = Router();

// Handler functions

const login: RouteHandler = (req, res) => res.status(200).send('login');
const logout: RouteHandler = (req, res) => res.status(200).send('logout');
const register: RouteHandler = (req, res) => res.status(201).send('register');

// Route definitions
authRoutes.route('/login')
    .post(login);

authRoutes.route('/logout')
    .post(logout);

authRoutes.route('/register')
    .post(register);

export { authRoutes };