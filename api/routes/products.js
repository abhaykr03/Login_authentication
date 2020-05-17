const express = require('express');
 //A sub-package of the express which gives us the diff capabilities to handles diff routes reaching  from diff endpoints with diff HTTP req's
const router = express.Router(); 

const productRoutes = require('./api/routes/products');
app.use('./products',productRoutes);

module.exports = app;