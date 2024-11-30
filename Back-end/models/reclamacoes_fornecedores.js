const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Reclamacoes_fornecedores = sequelize.define('Reclamacoes_fornecedores', {
    
    reclamacao_id: {
        type: DataTypes.BIGINT,
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
    
    descricao: {
        type: DataTypes.TEXT,
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
    status: {
        type: DataTypes.ENUM,
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
    data_reclamacao: {
        type: DataTypes.TIMESTAMP,
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
},{
    tableName: 'reclamacoes_fornecedores', 
    timestamps: false
});

module.exports = Reclamacoes_fornecedores;