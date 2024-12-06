const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Promocoes = sequelize.define('Promocoes', {
    
    promocao_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string min�scula
        primaryKey: true,
    },
    
    codigo: {
        type: DataTypes.VARCHAR(50),
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
    descricao: {
        type: DataTypes.TEXT,
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
    desconto_percentual: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
    desconto_valor: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
    data_inicio: {
        type: DataTypes.DATE,
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
    data_fim: {
        type: DataTypes.DATE,
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
    quantidade_disponivel: {
        type: DataTypes.INTEGER,
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
    ativo: {
        type: DataTypes.TINYINT,
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
},{
    tableName: 'promocoes', 
    timestamps: false
});

module.exports = Promocoes;