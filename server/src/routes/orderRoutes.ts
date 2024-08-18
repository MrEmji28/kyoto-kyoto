import { Router } from 'express';
import type { RouteHandler } from '../routes/routeTypes'; // Type-only import
import prisma from '../prismaClient';

const orderRoutes = Router();

// Handler functions
const getOrders: RouteHandler = async (req, res) => {
  try {
    const orders = await prisma.order.findMany({
      include: {
        items: true,
        payments: true,
        customer: true,
      },
    });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getOrderById: RouteHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await prisma.order.findUnique({
      where: { id: Number(id) },
      include: {
        items: true,
        payments: true,
        customer: true,
      },
    });

    if (!order) {
      res.status(404).json({ error: 'Order not found' });
      return;
    }

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createOrder: RouteHandler = async (req, res) => {
  try {
    const { customerId, status, items } = req.body;

    const totalAmount = items.reduce((sum: number, item: { price: number; quantity: number }) => sum + item.price * item.quantity, 0);

    const newOrder = await prisma.order.create({
      data: {
        customerId,
        status,
        totalAmount,
        items: {
          create: items.map((item: { menuItemId: number; quantity: number; price: number }) => ({
            menuItemId: item.menuItemId,
            quantity: item.quantity,
            price: item.price,
          })),
        },
      },
    });

    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateOrderStatus: RouteHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updatedOrder = await prisma.order.update({
      where: { id: Number(id) },
      data: { status },
    });

    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteOrder: RouteHandler = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.order.delete({ where: { id: Number(id) } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Route definitions
orderRoutes.route('/')
  .get(getOrders)
  .post(createOrder);

orderRoutes.route('/:id')
  .get(getOrderById)
  .put(updateOrderStatus)
  .delete(deleteOrder);

export { orderRoutes };
