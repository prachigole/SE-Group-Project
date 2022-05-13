const {Sequelize, DataTypes} = require('sequelize')
//const { user } = require('../Controller/userController')

const sequelize = require('../Utils/dbConnection') //database change

const meal_consumption = sequelize.define('user_meal_consumption', {
    consumption_id : {
        type: DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false,

    },
    
    consumption_time : {
        type: DataTypes.TINYINT,
        allowNull : false,
    },
    Quantity : {
        type : DataTypes.TINYINT,
        allowNull : false,
    },
    consumption_date:{
        type:DataTypes.DATEONLY,
        defaultValue:new Date(),
        allowNull:false
    }


},{
    timestamps:false
})
    module.exports = meal_consumption