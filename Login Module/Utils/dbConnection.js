const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('dietsystemdb','root','12226', {
      host: 'localhost',
      dialect:'mysql',
      port: '1703'
})

module.exports = sequelize