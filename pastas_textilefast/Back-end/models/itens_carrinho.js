const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Itens_carrinho = sequelize.define('Itens_carrinho', {
    
    item_carrinho_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string min�scula
        primaryKey: true,
    },
    
    carrinho_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
    produto_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
    data_adicionado: {
        type: DataTypes.TIMESTAMP,
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
},{
    tableName: 'itens_carrinho', 
    timestamps: false
});

module.exports = Itens_carrinho;