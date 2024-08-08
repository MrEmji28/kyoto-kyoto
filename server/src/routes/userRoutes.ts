import { Router } from 'express';
import type { RouteHandler } from '../routes/routeTypes'; // Type-only import
import prisma from '../prismaClient';


const userRoutes = Router();

// Handler functions
const getUser: RouteHandler = async (req, res) => {
    try {
      const users = await prisma.customer.findMany();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
};
  
const postUser: RouteHandler = async (req, res) => {
    try {
      const { email, password, firstName, lastName, phoneNumber, address } = req.body;
      const newUser = await prisma.customer.create({
        data: { email, password, firstName, lastName, phoneNumber, address },
      });
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
};
  
const putUser: RouteHandler = async (req, res) => {
    try {
      // Implement your update logic here
      res.status(200).send('put user');
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };


  const putUserById: RouteHandler = async (req, res) => {
    try {
      const { id } = req.params;
      const { email, firstName, lastName, phoneNumber, address } = req.body;
      const updatedUser = await prisma.customer.update({
        where: { id: Number(id) },
        data: { email, firstName, lastName, phoneNumber, address },
      });
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  const deleteUser: RouteHandler = async (req, res) => {
    try {
      const { id } = req.params;
      await prisma.customer.delete({ where: { id: Number(id) } });
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
};
  
// Route definitions
userRoutes.route('/')
    .get(getUser)
    .post(postUser)
    .put(putUser);

userRoutes.route('/:id')
    .put(putUserById)
    .delete(deleteUser);

export { userRoutes };
