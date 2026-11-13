const Obra = require('./Obra')
const Movimento = require('./Movimento')
const Material = require('./Material')




Obra.hasMany(Movimento,{
    foreignKey: 'codMovimento',
    as: 'obraMovimento',
    onDelete: 'CASCADE'
})

Movimento.belongsTo(Obra, {
    foreignKey: 'codMovimento',
    as: 'movimentoObra',
    allowNull: false
})

Obra.hasMany(Material,{
    foreignKey: 'codMaterial',
    as: 'obraMaterial',
    onDelete: 'CASCADE'
})

Material.belongsTo(Obra, {
    foreignKey: 'codMaterial',
    as: 'materialObra',
    allowNull: false
})





module.exports = {  Material, Movimento, Obra }