const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Configuracoes_seguranca = sequelize.define('Configuracoes_seguranca', {
    
    seguranca_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string min�scula
        primaryKey: true,
    },
    
    usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
    dois_fatores: {
        type: DataTypes.TINYINT,
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
    pergunta_seguranca: {
        type: DataTypes.VARCHAR(255),
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
    resposta_seguranca: {
        type: DataTypes.VARCHAR(255),
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
},{
    tableName: 'configuracoes_seguranca', 
    timestamps: false
});

module.exports = Configuracoes_seguranca;