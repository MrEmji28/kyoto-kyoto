import { Request, Response } from 'express';
import * as orderService from '../services/orderService';

export const createOrder = async (req: Request, res: Response) => {
    try {
        const { customerId, items } = req.body;
        const order = await orderService.createOrder(customerId, items);
        res.status(201).json(order);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getOrderById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const order = await orderService.getOrderById(Number(id));
        res.status(200).json(order);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const getOrdersByCustomerId = async (req: Request, res: Response) => {
    try {
        const { customerId } = req.params;
        const orders = await orderService.getOrdersByCustomerId(Number(customerId));
        res.status(200).json(orders);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const updateOrderStatus = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const order = await orderService.updateOrderStatus(Number(id), status);
        res.status(200).json(order);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
