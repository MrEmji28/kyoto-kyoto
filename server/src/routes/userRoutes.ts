import { Router } from 'express';
import type { RouteHandler } from '../routes/routeTypes'; // Type-only import

const userRoutes = Router();

// Handler functions
const getUser: RouteHandler = (req, res) => res.status(200).json({ 
    name: 'Vince', 
    motto: 'kayat' 
});
const postUser: RouteHandler = (req, res) => res.status(201).send('post user');
const putUser: RouteHandler = (req, res) => res.status(200).send('put user');
const putUserById: RouteHandler = (req, res) => res.status(200).send('put user by id');
const deleteUser: RouteHandler = (req, res) => res.status(204).send(); 

// Route definitions
userRoutes.route('/')
    .get(getUser)
    .post(postUser)
    .put(putUser)
    .delete(deleteUser);

userRoutes.route('/:id')
    .put(putUserById);

export { userRoutes };
