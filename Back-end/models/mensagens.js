const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Mensagens = sequelize.define('Mensagens', {
    
    mensagem_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string min�scula
        primaryKey: true,
    },
    
    remetente_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
    destinatario_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
    conteudo: {
        type: DataTypes.TEXT,
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
    data_mensagem: {
        type: DataTypes.TIMESTAMP,
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
    lida: {
        type: DataTypes.TINYINT,
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
},{
    tableName: 'mensagens', 
    timestamps: false
});

module.exports = Mensagens;