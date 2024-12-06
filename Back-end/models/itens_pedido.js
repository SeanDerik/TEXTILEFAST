const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Itens_pedido = sequelize.define('Itens_pedido', {
    
    item_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string min�scula
        primaryKey: true,
    },
    
    pedido_id: {
        type: DataTypes.INTEGER,
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
    produto_id: {
        type: DataTypes.INTEGER,
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
    preco_unitario: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
},{
    tableName: 'itens_pedido', 
    timestamps: false
});

module.exports = Itens_pedido;