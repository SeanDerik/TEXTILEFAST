const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Historico_precos = sequelize.define('Historico_precos', {
    
    historico_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string min�scula
        primaryKey: true,
    },
    
    produto_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
    preco_anterior: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
    preco_novo: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
    data_alteracao: {
        type: DataTypes.TIMESTAMP,
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
},{
    tableName: 'historico_precos', 
    timestamps: false
});

module.exports = Historico_precos;