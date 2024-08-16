// src/models/order.ts

import { PrismaClient, Order as PrismaOrder, OrderItem as PrismaOrderItem } from '@prisma/client';

// Create an instance of the PrismaClient
const prisma = new PrismaClient();

export interface Order {
  id: number;
  customerId: number;
  status: string; // Use appropriate type for OrderStatus if defined
  totalAmount: number;
  createdAt: Date;
  updatedAt: Date;
  customer?: Customer; // Include this if you need to fetch related customer
  items?: OrderItem[]; // Include this if you need to fetch related items
  payments?: Payment[]; // Include this if you need to fetch related payments
}

export interface OrderItem {
  id: number;
  orderId: number;
  menuItemId: number;
  quantity: number;
  price: number;
  order?: Order; // Include this if you need to fetch the related order
  menuItem?: MenuItem; // Include this if you need to fetch related menu item
}

export interface Customer {
  id: number;
  name: string;
  email: string;
  // Add other fields if needed
}

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  // Add other fields if needed
}

export interface Payment {
  id: number;
  orderId: number;
  amount: number;
  // Add other fields if needed
}

// Functions to interact with the database using Prisma

export const createOrder = async (orderData: Order): Promise<Order> => {
  const newOrder = await prisma.order.create({
    data: orderData,
  });
  return newOrder;
};

export const getOrderById = async (id: number): Promise<Order | null> => {
  const order = await prisma.order.findUnique({
    where: { id },
    include: {
      items: true, // Fetch related order items
      customer: true, // Fetch related customer
      payments: true, // Fetch related payments
    },
  });
  return order;
};

export const getOrdersByCustomerId = async (customerId: number): Promise<Order[]> => {
  const orders = await prisma.order.findMany({
    where: { customerId },
    include: {
      items: true, // Fetch related order items
      customer: true, // Fetch related customer
      payments: true, // Fetch related payments
    },
  });
  return orders;
};

export const updateOrderStatus = async (id: number, status: string): Promise<Order> => {
  const updatedOrder = await prisma.order.update({
    where: { id },
    data: { status },
  });
  return updatedOrder;
};
