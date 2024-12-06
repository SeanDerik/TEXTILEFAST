const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Documentos_fiscais = sequelize.define('Documentos_fiscais', {
    
    documento_id: {
        type: DataTypes.BIGINT,
        allowNull: false, // Converte o valor booleano para string min�scula
        primaryKey: true,
    },
    
    pedido_id: {
        type: DataTypes.INTEGER,
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
    numero_nota_fiscal: {
        type: DataTypes.VARCHAR(50),
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
    caminho_documento: {
        type: DataTypes.TEXT,
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
    data_emissao: {
        type: DataTypes.TIMESTAMP,
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
},{
    tableName: 'documentos_fiscais', 
    timestamps: false
});

module.exports = Documentos_fiscais;