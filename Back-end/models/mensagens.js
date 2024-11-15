const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Mensagens = sequelize.define('Mensagens', {
    
    mensagem_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string minúscula
        primaryKey: true,
    },
    
    remetente_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string minúscula
        
    },
    
    destinatario_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string minúscula
        
    },
    
    conteudo: {
        type: DataTypes.TEXT,
        allowNull: false, // Converte o valor booleano para string minúscula
        
    },
    
    data_mensagem: {
        type: DataTypes.TIMESTAMP,
        allowNull: false, // Converte o valor booleano para string minúscula
        
    },
    
    lida: {
        type: DataTypes.TINYINT,
        allowNull: true, // Converte o valor booleano para string minúscula
        
    },
    
},{
    tableName: 'mensagens', 
    timestamps: false
});

module.exports = Mensagens;