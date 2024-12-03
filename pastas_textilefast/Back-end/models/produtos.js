import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Produtos = sequelize.define('Produtos', {
    produto_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    nome_produto: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    preco: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    estoque: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    fornecedor_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    categoria_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    data_cadastro: {
        type: DataTypes.DATE,
        allowNull: false,
    },
}, {
    tableName: 'produtos',
    timestamps: false,
});

export default Produtos;
