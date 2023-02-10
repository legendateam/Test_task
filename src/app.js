'use strict';
exports.__esModule = true;
var express_1 = require('express');
var app = (0, express_1['default'])();
app.use(express_1['default'].json());
app.use(express_1['default'].urlencoded({ extended: true }));
app.listen(2500, function () {
    return console.log('Server is Running!');
});
