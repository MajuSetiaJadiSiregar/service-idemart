const express = require('express');
const router = express.Router();

const categoryControllers = require('../controller/categoryController');
const abcController = require('../latihan/abc');

router.get('/', categoryControllers.readCategory);
router.get('/wallet', abcController.readCategory);

module.exports = router;