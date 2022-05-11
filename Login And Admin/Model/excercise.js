const {Sequelize, DataTypes} = require('sequelize')

const sequelize = require('../Utils/dbConnection')

const excercise = sequelize.define("excercise", {
      excercise_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      excercise_name: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      excercise_level: {
        type: Sequelize.INTEGER,
        allowNull: false
      }   
    });

module.exports = excercise;