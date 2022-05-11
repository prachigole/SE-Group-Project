const {Sequelize, DataTypes} = require('sequelize')

const sequelize = require('../Utils/dbConnection')

const feedback = sequelize.define("feedback", {
  feedback_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      feedback_type: {
        type: Sequelize.INTEGER,
        allowNull: false
      }      
    });

module.exports = feedback;