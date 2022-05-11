const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('dietsystem','root','sharvi3322', {
      host: 'localhost',
      dialect:'mysql',
      // port: '1703'
})

module.exports = sequelize