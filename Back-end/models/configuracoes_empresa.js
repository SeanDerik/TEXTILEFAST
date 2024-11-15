const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Configuracoes_empresa = sequelize.define('Configuracoes_empresa', {
    
    configuracao_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string min�scula
        primaryKey: true,
    },
    
    empresa_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
    chave: {
        type: DataTypes.VARCHAR(100),
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
    valor: {
        type: DataTypes.TEXT,
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
},{
    tableName: 'configuracoes_empresa', 
    timestamps: false
});

module.exports = Configuracoes_empresa;