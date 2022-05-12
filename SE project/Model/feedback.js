const {Sequelize, DataTypes} = require('sequelize')

const sequelize = require('../Utils/dbConnection') //database change

const feedback = sequelize.define('feedback', {
    feedback_id : {
        type: DataTypes.MEDIUMINT,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false,

    },
    food_name: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    
},{
    timestamps:false
})
module.exports = feedback