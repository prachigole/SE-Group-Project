const {Sequelize, DataTypes} = require('sequelize')

const sequelize = require('../Utils/dbConnection') //database change

const exercise = sequelize.define('exercise', {

    exercise_id : {
        type: DataTypes.TINYINT,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false,

    },
    exercise_name : {
        type : DataTypes.STRING(40),
        allowNull : false,
    },
    exercise_level : {
        type: DataTypes.TINYINT,
        allowNull : false,
    },

},{
    timestamps:false
})
module.exports = exercise
