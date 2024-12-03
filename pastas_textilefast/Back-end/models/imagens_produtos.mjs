const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Imagens_produtos = sequelize.define('Imagens_produtos', {
    
    imagem_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string min�scula
        primaryKey: true,
    },
    
    produto_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
    url_imagem: {
        type: DataTypes.TEXT,
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
    descricao: {
        type: DataTypes.TEXT,
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
    data_upload: {
        type: DataTypes.TIMESTAMP,
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
},{
    tableName: 'imagens_produtos', 
    timestamps: false
});

module.exports = Imagens_produtos;