const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Avaliacoes_fornecedores = sequelize.define('Avaliacoes_fornecedores', {
    
    avaliacao_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string min�scula
        primaryKey: true,
    },
    
    comprador_id: {
        type: DataTypes.INTEGER,
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
    fornecedor_id: {
        type: DataTypes.INTEGER,
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
    qualidade: {
        type: DataTypes.INTEGER,
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
    condicoes_financeiras: {
        type: DataTypes.INTEGER,
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
    pontualidade: {
        type: DataTypes.INTEGER,
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
    prazo_entrega: {
        type: DataTypes.INTEGER,
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
    comentario: {
        type: DataTypes.TEXT,
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
    data_avaliacao: {
        type: DataTypes.TIMESTAMP,
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
},{
    tableName: 'avaliacoes_fornecedores', 
    timestamps: false
});

module.exports = Avaliacoes_fornecedores;