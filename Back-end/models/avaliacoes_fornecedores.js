const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Avaliacoes_fornecedores = sequelize.define('Avaliacoes_fornecedores', {
    
    avaliacao_id: {
        type: DataTypes.INTEGER,
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
    
    qualidade: {
        type: DataTypes.INTEGER,
        allowNull: true, // Converte o valor booleano para string minúscula
        
    },
    
    condicoes_financeiras: {
        type: DataTypes.INTEGER,
        allowNull: true, // Converte o valor booleano para string minúscula
        
    },
    
    pontualidade: {
        type: DataTypes.INTEGER,
        allowNull: true, // Converte o valor booleano para string minúscula
        
    },
    
    prazo_entrega: {
        type: DataTypes.INTEGER,
        allowNull: true, // Converte o valor booleano para string minúscula
        
    },
    
    comentario: {
        type: DataTypes.TEXT,
        allowNull: true, // Converte o valor booleano para string minúscula
        
    },
    
    data_avaliacao: {
        type: DataTypes.TIMESTAMP,
        allowNull: false, // Converte o valor booleano para string minúscula
        
    },
    
},{
    tableName: 'avaliacoes_fornecedores', 
    timestamps: false
});

module.exports = Avaliacoes_fornecedores;