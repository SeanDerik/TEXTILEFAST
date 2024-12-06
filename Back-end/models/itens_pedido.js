const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Itens_pedido = sequelize.define('Itens_pedido', {
    
    item_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string minúscula
        primaryKey: true,
    },
    
    pedido_id: {
        type: DataTypes.INTEGER,
        allowNull: true, // Converte o valor booleano para string minúscula
        
    },
    
    produto_id: {
        type: DataTypes.INTEGER,
        allowNull: true, // Converte o valor booleano para string minúscula
        
    },
    
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string minúscula
        
    },
    
    preco_unitario: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false, // Converte o valor booleano para string minúscula
        
    },
    
},{
    tableName: 'itens_pedido', 
    timestamps: false
});

module.exports = Itens_pedido;