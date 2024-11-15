const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Itens_carrinho = sequelize.define('Itens_carrinho', {
    
    item_carrinho_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string minúscula
        primaryKey: true,
    },
    
    carrinho_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string minúscula
        
    },
    
    produto_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string minúscula
        
    },
    
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string minúscula
        
    },
    
    data_adicionado: {
        type: DataTypes.TIMESTAMP,
        allowNull: false, // Converte o valor booleano para string minúscula
        
    },
    
},{
    tableName: 'itens_carrinho', 
    timestamps: false
});

module.exports = Itens_carrinho;