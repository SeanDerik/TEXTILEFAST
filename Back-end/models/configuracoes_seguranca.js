const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Configuracoes_seguranca = sequelize.define('Configuracoes_seguranca', {
    
    seguranca_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string minúscula
        primaryKey: true,
    },
    
    usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string minúscula
        
    },
    
    dois_fatores: {
        type: DataTypes.TINYINT,
        allowNull: true, // Converte o valor booleano para string minúscula
        
    },
    
    pergunta_seguranca: {
        type: DataTypes.VARCHAR(255),
        allowNull: true, // Converte o valor booleano para string minúscula
        
    },
    
    resposta_seguranca: {
        type: DataTypes.VARCHAR(255),
        allowNull: true, // Converte o valor booleano para string minúscula
        
    },
    
},{
    tableName: 'configuracoes_seguranca', 
    timestamps: false
});

module.exports = Configuracoes_seguranca;