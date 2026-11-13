const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Funcionario = db.define('funcionario',{
    codFuncionario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    senha: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100)
    }
},{
    timestamps: false,
    tablename: 'funcionarios'
})

module.exports = Funcionario