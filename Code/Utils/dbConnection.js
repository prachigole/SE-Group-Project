const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('dietsystemdb','admin','Detoxify2022', {
      host: 'diet-system.cwt3nt3qxgnw.us-east-1.rds.amazonaws.com',
      dialect:'mysql',
      port: '3306'
})

module.exports = sequelize