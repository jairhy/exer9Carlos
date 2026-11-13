const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Material = db.define('material',{
    codMaterial: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
   categoria: {
    type: DataTypes.ENUM('ESTRUTURAL','ELETRICO','  HIDRAULICO','ACABAMENTO'),
    allowNull: false
   },
   quantidade: {
     type: DataTypes.INTEGER,
     allowNull: false
   }
},{
    timestamps: false,
    tablename: 'materials'
})

module.exports = Material