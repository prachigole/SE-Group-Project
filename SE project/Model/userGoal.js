const {DataTypes} = require('sequelize')

const sequelize = require('../Utils/dbConnection')

const userGoal = sequelize.define('userGoals', {
      goad_id: {
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
      },

      weight: {
            type: DataTypes.FLOAT(5,2),
            allowNull: false
      },

      height: {
            type: DataTypes.SMALLINT,
            allowNull: false
      },

      activity_type: {
            type: DataTypes.TINYINT,
            allowNull: false
      },

      goal_type: {
            type: DataTypes.TINYINT,
            allowNull: false
      },

      
      targetted_calories: {
            type: DataTypes.MEDIUMINT,
            allowNull: false
      },

      goal_duration: {
            type: DataTypes.TINYINT,
            allowNull: false
      },

      bmi: {
            type: DataTypes.FLOAT(10,2),
            allowNull: false
      }
},{
      timestamps:false
})

module.exports = userGoal