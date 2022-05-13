const {Sequelize, DataTypes} = require('sequelize')

const sequelize = require('../Utils/dbConnection')

const feedback = sequelize.define("feedback", {
  feedback_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      food_name: {
        type: Sequelize.STRING(30),
        allowNull: false
      },   
    });

module.exports = feedback;