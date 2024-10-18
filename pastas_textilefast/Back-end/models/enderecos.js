const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Enderecos = sequelize.define('Enderecos', {
    
    endereco_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string min�scula
        primaryKey: true,
    },
    
    empresa_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
    tipo: {
        type: DataTypes.ENUM,
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
    endereco: {
        type: DataTypes.TEXT,
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
    cidade: {
        type: DataTypes.VARCHAR(100),
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
    estado: {
        type: DataTypes.VARCHAR(100),
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
    cep: {
        type: DataTypes.VARCHAR(10),
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
    pais: {
        type: DataTypes.VARCHAR(100),
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
},{
    tableName: 'enderecos', 
    timestamps: false
});

module.exports = Enderecos;