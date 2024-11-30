const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Taxas_impostos = sequelize.define('Taxas_impostos', {
    
    taxa_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string min�scula
        primaryKey: true,
    },
    
    descricao: {
        type: DataTypes.VARCHAR(255),
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
    percentual: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
    tipo: {
        type: DataTypes.ENUM,
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
},{
    tableName: 'taxas_impostos', 
    timestamps: false
});

module.exports = Taxas_impostos;