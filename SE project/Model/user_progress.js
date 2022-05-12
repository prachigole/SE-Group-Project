const {Sequelize, DataTypes} = require('sequelize')

const sequelize = require('../Utils/dbConnection') //database change

const user_progress = sequelize.define('user_progress', {
    progress_id : {
        type: DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false,

    },
    current_weight : {
        type: DataTypes.FLOAT(5,2),
        allowNull : false,
    },
    updated_weight : {
        type: DataTypes.FLOAT(5,2),
        allowNull : false,
    },
    bmi : {
        type: DataTypes.FLOAT(10,2),
        allowNull : false,
    },
    remarks: {
        type: DataTypes.STRING,
        allowNull : false,
    },

    },{
        timestamps:false
  })
    module.exports = user_progress