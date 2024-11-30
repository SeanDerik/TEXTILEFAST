const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Promocoes = sequelize.define('Promocoes', {
    
    promocao_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string minúscula
        primaryKey: true,
    },
    
    codigo: {
        type: DataTypes.VARCHAR(50),
        allowNull: false, // Converte o valor booleano para string minúscula
        
    },
    
    descricao: {
        type: DataTypes.TEXT,
        allowNull: true, // Converte o valor booleano para string minúscula
        
    },
    
    desconto_percentual: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: true, // Converte o valor booleano para string minúscula
        
    },
    
    desconto_valor: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true, // Converte o valor booleano para string minúscula
        
    },
    
    data_inicio: {
        type: DataTypes.DATE,
        allowNull: false, // Converte o valor booleano para string minúscula
        
    },
    
    data_fim: {
        type: DataTypes.DATE,
        allowNull: false, // Converte o valor booleano para string minúscula
        
    },
    
    quantidade_disponivel: {
        type: DataTypes.INTEGER,
        allowNull: true, // Converte o valor booleano para string minúscula
        
    },
    
    ativo: {
        type: DataTypes.TINYINT,
        allowNull: true, // Converte o valor booleano para string minúscula
        
    },
    
},{
    tableName: 'promocoes', 
    timestamps: false
});

module.exports = Promocoes;