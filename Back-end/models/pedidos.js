const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Pedidos = sequelize.define('Pedidos', {
    
    pedido_id: {
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
    
    total: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false, // Converte o valor booleano para string minúscula
        
    },
    
    data_pedido: {
        type: DataTypes.TIMESTAMP,
        allowNull: false, // Converte o valor booleano para string minúscula
        
    },
    
    status: {
        type: DataTypes.ENUM,
        allowNull: false, // Converte o valor booleano para string minúscula
        
    },
    
},{
    tableName: 'pedidos', 
    timestamps: false
});

module.exports = Pedidos;