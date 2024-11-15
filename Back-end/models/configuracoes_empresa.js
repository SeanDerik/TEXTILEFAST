const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Configuracoes_empresa = sequelize.define('Configuracoes_empresa', {
    
    configuracao_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string minúscula
        primaryKey: true,
    },
    
    empresa_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string minúscula
        
    },
    
    chave: {
        type: DataTypes.VARCHAR(100),
        allowNull: false, // Converte o valor booleano para string minúscula
        
    },
    
    valor: {
        type: DataTypes.TEXT,
        allowNull: true, // Converte o valor booleano para string minúscula
        
    },
    
},{
    tableName: 'configuracoes_empresa', 
    timestamps: false
});

module.exports = Configuracoes_empresa;