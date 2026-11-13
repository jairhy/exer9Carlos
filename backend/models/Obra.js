const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Obra = db.define('obra',{
    codObra: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    cnpj: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    codMovimento: {
        type: DataTypes.INTEGER,
        references: {
            key: 'codMovimento',
            model: 'movimentos'
        },
        allowNull: false
    },
    codMaterial: {
        type: DataTypes.INTEGER,
        references: {
            key: 'codMaterial',
            model: 'materials'
        },
        allowNull: false
    },
},{
    timestamps: false,
    tableName: 'obras'
})

module.exports = Obra