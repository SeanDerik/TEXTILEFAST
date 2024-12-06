const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Logs_acesso = sequelize.define('Logs_acesso', {
    
    log_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string min�scula
        primaryKey: true,
    },
    
    usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
    acao: {
        type: DataTypes.VARCHAR(255),
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
    detalhes: {
        type: DataTypes.TEXT,
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
    data_acesso: {
        type: DataTypes.TIMESTAMP,
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
},{
    tableName: 'logs_acesso', 
    timestamps: false
});

module.exports = Logs_acesso;