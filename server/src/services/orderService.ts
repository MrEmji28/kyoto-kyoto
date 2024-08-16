import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createOrder = async (customerId: number, items: { menuItemId: number; quantity: number }[]) => {
    const order = await prisma.order.create({
        data: {
            customerId,
            status: 'PENDING',
            totalAmount: 0, // Calculate below
            items: {
                create: items.map(item => ({
                    menuItemId: item.menuItemId,
                    quantity: item.quantity,
                    price: 0 // Calculate below
                }))
            }
        },
        include: { items: true }
    });

    // Calculate total amount and update order with prices
    let totalAmount = 0;
    const updatedItems = await Promise.all(
        order.items.map(async (item) => {
            const menuItem = await prisma.menuItem.findUnique({
                where: { id: item.menuItemId }
            });
            if (!menuItem) throw new Error('Menu item not found');

            const price = menuItem.price * item.quantity;
            totalAmount += price;

            return prisma.orderItem.update({
                where: { id: item.id },
                data: { price }
            });
        })
    );

    await prisma.order.update({
        where: { id: order.id },
        data: { totalAmount }
    });

    return { ...order, totalAmount, items: updatedItems };
};

export const getOrderById = async (id: number) => {
    const order = await prisma.order.findUnique({
        where: { id },
        include: {
            items: {
                include: {
                    menuItem: true
                }
            }
        }
    });
    if (!order) throw new Error('Order not found');
    return order;
};

export const getOrdersByCustomerId = async (customerId: number) => {
    return prisma.order.findMany({
        where: { customerId },
        include: { items: true }
    });
};

export const updateOrderStatus = async (id: number, status: string) => {
    return prisma.order.update({
        where: { id },
        data: { status }
    });
};
