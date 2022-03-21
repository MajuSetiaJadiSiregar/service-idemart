const express = require('express');
const router = express.Router();

const subCategoryControllers = require('../controller/subCategoryController');

router.get('/', subCategoryControllers.readSubCategory);

module.exports = router;