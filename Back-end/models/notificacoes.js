const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Notificacoes = sequelize.define('Notificacoes', {
    
    notificacao_id: {
        type: DataTypes.BIGINT,
        allowNull: false, // Converte o valor booleano para string minúscula
        primaryKey: true,
    },
    
    empresa_id: {
        type: DataTypes.INTEGER,
        allowNull: true, // Converte o valor booleano para string minúscula
        
    },
    
    mensagem: {
        type: DataTypes.TEXT,
        allowNull: true, // Converte o valor booleano para string minúscula
        
    },
    
    lida: {
        type: DataTypes.TINYINT,
        allowNull: true, // Converte o valor booleano para string minúscula
        
    },
    
    data_notificacao: {
        type: DataTypes.TIMESTAMP,
        allowNull: false, // Converte o valor booleano para string minúscula
        
    },
    
},{
    tableName: 'notificacoes', 
    timestamps: false
});

module.exports = Notificacoes;