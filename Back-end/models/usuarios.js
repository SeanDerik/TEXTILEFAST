const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Usuarios = sequelize.define('Usuarios', {
    
    usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string minúscula
        primaryKey: true,
    },
    
    empresa_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string minúscula
        
    },
    
    nome: {
        type: DataTypes.VARCHAR(255),
        allowNull: false, // Converte o valor booleano para string minúscula
        
    },
    
    email: {
        type: DataTypes.VARCHAR(255),
        allowNull: false, // Converte o valor booleano para string minúscula
        
    },
    
    senha_hash: {
        type: DataTypes.VARCHAR(255),
        allowNull: false, // Converte o valor booleano para string minúscula
        
    },
    
    papel: {
        type: DataTypes.ENUM,
        allowNull: false, // Converte o valor booleano para string minúscula
        
    },
    
    data_criacao: {
        type: DataTypes.TIMESTAMP,
        allowNull: false, // Converte o valor booleano para string minúscula
        
    },
    
    ultimo_login: {
        type: DataTypes.TIMESTAMP,
        allowNull: false, // Converte o valor booleano para string minúscula
        
    },
    
},{
    tableName: 'usuarios', 
    timestamps: false
});

module.exports = Usuarios;