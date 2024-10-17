const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Relatorios = sequelize.define('Relatorios', {
    
    relatorio_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string minúscula
        primaryKey: true,
    },
    
    empresa_id: {
        type: DataTypes.INTEGER,
        allowNull: true, // Converte o valor booleano para string minúscula
        
    },
    
    tipo_relatorio: {
        type: DataTypes.ENUM,
        allowNull: false, // Converte o valor booleano para string minúscula
        
    },
    
    dados: {
        type: DataTypes.LONGTEXT,
        allowNull: false, // Converte o valor booleano para string minúscula
        
    },
    
    data_geracao: {
        type: DataTypes.TIMESTAMP,
        allowNull: false, // Converte o valor booleano para string minúscula
        
    },
    
},{
    tableName: 'relatorios', 
    timestamps: false
});

module.exports = Relatorios;