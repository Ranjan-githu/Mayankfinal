const express = require('express');
const router = express.Router();
const { submitContactResult } = require('../controllers/contactController');

router.post('/', submitContactResult);

module.exports = router;
