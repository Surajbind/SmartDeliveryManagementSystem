import Partner from '../models/Partner';
import Order from '../models/Order';

export const assignOrders = async () => {
  try {
    const orders = await Order.find({ status: 'pending' });
    const partners = await Partner.find({ status: 'active' });

    orders.forEach(async (order) => {
      const availablePartners = partners.filter((partner) =>
        partner.areas.includes(order.area) && partner.currentLoad < 3
      );

      if (availablePartners.length) {
        availablePartners.sort((a, b) => b.metrics.rating - a.metrics.rating);
        const selectedPartner = availablePartners[0];

        order.status = 'assigned';
        order.assignedTo = selectedPartner._id as string;
        selectedPartner.currentLoad += 1;

        await order.save();
        await selectedPartner.save();
      }
    });

    return { message: 'Assignment process completed' };
  } catch (error) {
    throw new Error('Failed to assign orders');
  }
};
