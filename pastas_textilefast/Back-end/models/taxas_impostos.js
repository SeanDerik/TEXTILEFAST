const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Taxas_impostos = sequelize.define('Taxas_impostos', {
    
    taxa_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string minúscula
        primaryKey: true,
    },
    
    descricao: {
        type: DataTypes.VARCHAR(255),
        allowNull: false, // Converte o valor booleano para string minúscula
        
    },
    
    percentual: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false, // Converte o valor booleano para string minúscula
        
    },
    
    tipo: {
        type: DataTypes.ENUM,
        allowNull: false, // Converte o valor booleano para string minúscula
        
    },
    
},{
    tableName: 'taxas_impostos', 
    timestamps: false
});

module.exports = Taxas_impostos;