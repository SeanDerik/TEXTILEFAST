const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Pagamentos = sequelize.define('Pagamentos', {
    
    pagamento_id: {
        type: DataTypes.BIGINT,
        allowNull: false, // Converte o valor booleano para string min�scula
        primaryKey: true,
    },
    
    pedido_id: {
        type: DataTypes.INTEGER,
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
    valor_pago: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
    data_pagamento: {
        type: DataTypes.TIMESTAMP,
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
    metodo_pagamento: {
        type: DataTypes.ENUM,
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
},{
    tableName: 'pagamentos', 
    timestamps: false
});

module.exports = Pagamentos;