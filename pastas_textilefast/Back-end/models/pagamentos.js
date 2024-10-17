const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Pagamentos = sequelize.define('Pagamentos', {
    
    pagamento_id: {
        type: DataTypes.BIGINT,
        allowNull: false, // Converte o valor booleano para string minúscula
        primaryKey: true,
    },
    
    pedido_id: {
        type: DataTypes.INTEGER,
        allowNull: true, // Converte o valor booleano para string minúscula
        
    },
    
    valor_pago: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false, // Converte o valor booleano para string minúscula
        
    },
    
    data_pagamento: {
        type: DataTypes.TIMESTAMP,
        allowNull: false, // Converte o valor booleano para string minúscula
        
    },
    
    metodo_pagamento: {
        type: DataTypes.ENUM,
        allowNull: false, // Converte o valor booleano para string minúscula
        
    },
    
},{
    tableName: 'pagamentos', 
    timestamps: false
});

module.exports = Pagamentos;