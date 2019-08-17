const express = require('express');
const tours = require('../routes/tours');
const error = require('../middleware/error');

module.exports = function (app) {
    app.use(express.json());
    app.use('/api/tours', tours);
    app.use(error);
};