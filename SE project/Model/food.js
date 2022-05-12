const {Sequelize, DataTypes} = require('sequelize')

const sequelize = require('../Utils/dbConnection') //database change

const food = sequelize.define('food', {
    food_id : {
        type: DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false,

    },
    name : {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    food_type : {
        type : DataTypes.INTEGER,
        allowNull: false,
    },
    calory_level : {
        type : DataTypes.INTEGER,
        allowNull : false,
    },
    Meal_time:{
        type :  DataTypes.INTEGER,
        allowNull : false,
    },

    calories : {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    quantity : {
        type: DataTypes.STRING(50),
        allowNull : false,
    }
},{
    timestamps:false
})
    module.exports = food