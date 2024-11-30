const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Preferencias_notificacao = sequelize.define('Preferencias_notificacao', {
    
    preferencia_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string min�scula
        primaryKey: true,
    },
    
    empresa_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
    tipo_notificacao: {
        type: DataTypes.ENUM,
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
    ativo: {
        type: DataTypes.TINYINT,
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
},{
    tableName: 'preferencias_notificacao', 
    timestamps: false
});

module.exports = Preferencias_notificacao;