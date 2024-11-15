const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Reclamacoes_fornecedores = sequelize.define('Reclamacoes_fornecedores', {
    
    reclamacao_id: {
        type: DataTypes.BIGINT,
        allowNull: false, // Converte o valor booleano para string minúscula
        primaryKey: true,
    },
    
    comprador_id: {
        type: DataTypes.INTEGER,
        allowNull: true, // Converte o valor booleano para string minúscula
        
    },
    
    fornecedor_id: {
        type: DataTypes.INTEGER,
        allowNull: true, // Converte o valor booleano para string minúscula
        
    },
    
    descricao: {
        type: DataTypes.TEXT,
        allowNull: false, // Converte o valor booleano para string minúscula
        
    },
    
    status: {
        type: DataTypes.ENUM,
        allowNull: true, // Converte o valor booleano para string minúscula
        
    },
    
    data_reclamacao: {
        type: DataTypes.TIMESTAMP,
        allowNull: false, // Converte o valor booleano para string minúscula
        
    },
    
},{
    tableName: 'reclamacoes_fornecedores', 
    timestamps: false
});

module.exports = Reclamacoes_fornecedores;