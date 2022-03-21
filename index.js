const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 7000;

const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/categoryRoute');
const subCategoryRoutes = require('./routes/subCategoryRoute');

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.use('/user', userRoutes);
app.use('/category', categoryRoutes);
app.use('/subcategory', subCategoryRoutes);

app.listen(PORT, () => console.log("server run in port " + PORT));