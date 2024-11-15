const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Notificacoes = sequelize.define('Notificacoes', {
    
    notificacao_id: {
        type: DataTypes.BIGINT,
        allowNull: false, // Converte o valor booleano para string min�scula
        primaryKey: true,
    },
    
    empresa_id: {
        type: DataTypes.INTEGER,
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
    mensagem: {
        type: DataTypes.TEXT,
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
    lida: {
        type: DataTypes.TINYINT,
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
    data_notificacao: {
        type: DataTypes.TIMESTAMP,
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
},{
    tableName: 'notificacoes', 
    timestamps: false
});

module.exports = Notificacoes;