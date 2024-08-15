import express, { type Request, type Response } from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// Get all menu items
router.get('/', async (req: Request, res: Response) => {
  try {
    const menuItems = await prisma.menuItem.findMany();
    res.json(menuItems);
  } catch (error) {
    console.error('Error fetching menu items:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get a single menu item by ID
router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const menuItem = await prisma.menuItem.findUnique({
      where: { id: Number(id) },
    });
    if (menuItem) {
      res.json(menuItem);
    } else {
      res.status(404).json({ error: 'Menu item not found' });
    }
  } catch (error) {
    console.error('Error fetching menu item:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Create a new menu item
router.post('/', async (req: Request, res: Response) => {
  const { name, description, price, imageUrl, category } = req.body;
  try {
    const newMenuItem = await prisma.menuItem.create({
      data: {
        name,
        description,
        price,
        imageUrl,
        category,
      },
    });
    res.status(201).json(newMenuItem);
  } catch (error) {
    console.error('Error creating menu item:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update a menu item by ID
router.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, description, price, imageUrl, category } = req.body;
  try {
    const updatedMenuItem = await prisma.menuItem.update({
      where: { id: Number(id) },
      data: {
        name,
        description,
        price,
        imageUrl,
        category,
      },
    });
    res.json(updatedMenuItem);
  } catch (error) {
    console.error('Error updating menu item:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a menu item by ID
router.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.menuItem.delete({
      where: { id: Number(id) },
    });
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting menu item:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export { router as menuRoutes };
