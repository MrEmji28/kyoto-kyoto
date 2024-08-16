import express from 'express';
import * as orderController from '../controllers/orderController';

const router = express.Router();

router.post('/orders', orderController.createOrder);
router.get('/orders/:id', orderController.getOrderById);
router.get('/customers/:customerId/orders', orderController.getOrdersByCustomerId);
router.patch('/orders/:id/status', orderController.updateOrderStatus);

export default router;
