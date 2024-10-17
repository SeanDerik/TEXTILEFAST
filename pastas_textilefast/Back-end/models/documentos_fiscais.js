const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Documentos_fiscais = sequelize.define('Documentos_fiscais', {
    
    documento_id: {
        type: DataTypes.BIGINT,
        allowNull: false, // Converte o valor booleano para string minúscula
        primaryKey: true,
    },
    
    pedido_id: {
        type: DataTypes.INTEGER,
        allowNull: true, // Converte o valor booleano para string minúscula
        
    },
    
    numero_nota_fiscal: {
        type: DataTypes.VARCHAR(50),
        allowNull: false, // Converte o valor booleano para string minúscula
        
    },
    
    caminho_documento: {
        type: DataTypes.TEXT,
        allowNull: true, // Converte o valor booleano para string minúscula
        
    },
    
    data_emissao: {
        type: DataTypes.TIMESTAMP,
        allowNull: false, // Converte o valor booleano para string minúscula
        
    },
    
},{
    tableName: 'documentos_fiscais', 
    timestamps: false
});

module.exports = Documentos_fiscais;