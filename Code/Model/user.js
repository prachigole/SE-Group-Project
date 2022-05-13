const {Sequelize, DataTypes} = require('sequelize')

const sequelize = require('../Utils/dbConnection')

const user = sequelize.define('users', {
      user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
      },

      name: {
            type: DataTypes.STRING(50),
            allowNull: false,
      }, 
      
      email_id: {
            type: DataTypes.STRING(50),
            allowNull: false
      },

      dob: {
            type: DataTypes.DATE,
            allowNull: false
      },

      gender: {
            type: DataTypes.BOOLEAN,
            allowNull: false
      },

      user_type: {
            type: DataTypes.BOOLEAN, //TinyInt(1)
            allowNull: false
      },

      otp: {type: DataTypes.STRING(6)}
})

module.exports = user