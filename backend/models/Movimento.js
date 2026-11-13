const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Movimento = db.define('movimento',{
    codMovimento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
   tipo: {
    type: DataTypes.ENUM('ENTRADA','SAIDA'),
    allowNull: false
   },
   quantidade: {
     type: DataTypes.INTEGER,
     allowNull: false
   }
},{
    timestamps: false,
    tablename: 'movimentos'
})

module.exports = Movimento