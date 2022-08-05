"use strict";
const sequelize = require("sequelize");
const Sequelize = new sequelize('Expense_Tracker', 'root', 'Vera2359', {
    dialect: 'mysql',
    host: 'localhost'
});
module.exports = Sequelize;
