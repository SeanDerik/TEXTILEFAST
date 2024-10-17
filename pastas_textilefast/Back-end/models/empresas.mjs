import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js'; // Certifique-se de que a extensão está correta

const Empresas = sequelize.define('Empresas', {
    
    empresa_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    
    cnpj: {
        type: DataTypes.STRING(14),
        allowNull: false,
    },
    
    razao_social: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    
    nome_fantasia: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    
    tipo_empresa: {
        type: DataTypes.ENUM,
        allowNull: false,
    },
    
    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    
    telefone: {
        type: DataTypes.STRING(20),
        allowNull: true,
    },
    
    endereco: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    
    data_cadastro: {
        type: DataTypes.TIMESTAMP,
        allowNull: false,
    },
}, {
    tableName: 'empresas', 
    timestamps: false
});

export default Empresas;
