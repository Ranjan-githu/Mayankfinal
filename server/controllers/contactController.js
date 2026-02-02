const Contact = require('../models/Contact');

// @desc    Submit contact form
// @route   POST /api/contact
// @access  Public
const submitContactResult = async (req, res) => {
  try {
    const { name, phone, email, message } = req.body;

    const contact = new Contact({
      name,
      phone,
      email,
      message
    });

    const createdContact = await contact.save();
    res.status(201).json(createdContact);
  } catch (error) {
    res.status(400).json({ message: 'Invalid contact data' });
  }
};

module.exports = {
  submitContactResult
};
