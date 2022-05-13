const {Sequelize, DataTypes} = require('sequelize')

const sequelize = require('../Utils/dbConnection') //database change

const daily_meal_info = sequelize.define('daily_meal', {
    //daily meal id 
    dmid : {
        type: DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false,

    },
    total_calories : {
        type : DataTypes.MEDIUMINT,
        allowNull : false,
    },    
},{
    timestamps:false
})
module.exports = daily_meal_info