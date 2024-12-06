const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Enderecos = sequelize.define('Enderecos', {
    
    endereco_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string minúscula
        primaryKey: true,
    },
    
    empresa_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string minúscula
        
    },
    
    tipo: {
        type: DataTypes.ENUM,
        allowNull: false, // Converte o valor booleano para string minúscula
        
    },
    
    endereco: {
        type: DataTypes.TEXT,
        allowNull: false, // Converte o valor booleano para string minúscula
        
    },
    
    cidade: {
        type: DataTypes.VARCHAR(100),
        allowNull: false, // Converte o valor booleano para string minúscula
        
    },
    
    estado: {
        type: DataTypes.VARCHAR(100),
        allowNull: false, // Converte o valor booleano para string minúscula
        
    },
    
    cep: {
        type: DataTypes.VARCHAR(10),
        allowNull: false, // Converte o valor booleano para string minúscula
        
    },
    
    pais: {
        type: DataTypes.VARCHAR(100),
        allowNull: false, // Converte o valor booleano para string minúscula
        
    },
    
},{
    tableName: 'enderecos', 
    timestamps: false
});

module.exports = Enderecos;