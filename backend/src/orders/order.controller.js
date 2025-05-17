const Order = require("./order.model");

const createAOrder = async (req, res) => {
  try {
    console.log('Order data received:', req.body);
    const newOrder = new Order(req.body);
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ message: 'Failed to create order', error: error.message });
  }
};

module.exports = {
    createAOrder
}
