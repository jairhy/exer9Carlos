const { Sequelize } = require('sequelize')

const db = new Sequelize('db_buildcorp','root','senai',{
    dialect: 'mysql',
    PORT: 3306,
    host: 'localhost'
})

module.exports = db 