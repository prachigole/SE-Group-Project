const {Sequelize, DataTypes} = require('sequelize')

const sequelize = require('../Utils/dbConnection')

const food = sequelize.define("food", {
      food_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      food_name: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      food_type: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      calory_level : {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      quantity: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      calories: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      meal_type :{
        type: Sequelize.INTEGER,
        allowNull: false
      }
      
    });

module.exports = food;