import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Categorias = sequelize.define('Categorias', {
    categoria_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    nome_categoria: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
}, {
    tableName: 'categorias',
    timestamps: false
});

export default Categorias;
