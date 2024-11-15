const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Categorias = sequelize.define('Categorias', {
    
    categoria_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string minúscula
        primaryKey: true,
    },
    
    nome_categoria: {
        type: DataTypes.VARCHAR(100),
        allowNull: false, // Converte o valor booleano para string minúscula
        
    },
    
    descricao: {
        type: DataTypes.TEXT,
        allowNull: true, // Converte o valor booleano para string minúscula
        
    },
    
},{
    tableName: 'categorias', 
    timestamps: false
});

module.exports = Categorias;