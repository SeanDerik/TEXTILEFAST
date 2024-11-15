const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Relatorios = sequelize.define('Relatorios', {
    
    relatorio_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string min�scula
        primaryKey: true,
    },
    
    empresa_id: {
        type: DataTypes.INTEGER,
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
    tipo_relatorio: {
        type: DataTypes.ENUM,
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
    dados: {
        type: DataTypes.LONGTEXT,
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
    data_geracao: {
        type: DataTypes.TIMESTAMP,
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
},{
    tableName: 'relatorios', 
    timestamps: false
});

module.exports = Relatorios;