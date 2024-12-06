import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Empresas = sequelize.define('Empresas', {
    empresa_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
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
        type: DataTypes.ENUM('comprador', 'fornecedor'),
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
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    senha: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    reclameaqui: {
        type: DataTypes.TEXT(200),
        allowNull: true,
    }
}, {
    tableName: 'empresas',
    timestamps: false,
});


export default Empresas;
