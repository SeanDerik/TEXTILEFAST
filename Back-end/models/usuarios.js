const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Usuarios = sequelize.define('Usuarios', {
    
    usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string min�scula
        primaryKey: true,
    },
    
    empresa_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
    nome: {
        type: DataTypes.VARCHAR(255),
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
    email: {
        type: DataTypes.VARCHAR(255),
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
    senha_hash: {
        type: DataTypes.VARCHAR(255),
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
    papel: {
        type: DataTypes.ENUM,
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
    data_criacao: {
        type: DataTypes.TIMESTAMP,
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
    ultimo_login: {
        type: DataTypes.TIMESTAMP,
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
},{
    tableName: 'usuarios', 
    timestamps: false
});

module.exports = Usuarios;