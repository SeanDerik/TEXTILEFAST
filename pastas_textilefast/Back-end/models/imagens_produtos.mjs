const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Imagens_produtos = sequelize.define('Imagens_produtos', {
    
    imagem_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string minúscula
        primaryKey: true,
    },
    
    produto_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string minúscula
        
    },
    
    url_imagem: {
        type: DataTypes.TEXT,
        allowNull: false, // Converte o valor booleano para string minúscula
        
    },
    
    descricao: {
        type: DataTypes.TEXT,
        allowNull: true, // Converte o valor booleano para string minúscula
        
    },
    
    data_upload: {
        type: DataTypes.TIMESTAMP,
        allowNull: false, // Converte o valor booleano para string minúscula
        
    },
    
},{
    tableName: 'imagens_produtos', 
    timestamps: false
});

module.exports = Imagens_produtos;