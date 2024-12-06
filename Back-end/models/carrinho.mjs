import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js'; // Ensure this path points to your database configuration

const Carrinho = sequelize.define('Carrinho', {
    carrinho_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    comprador_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    data_criacao: {
        type: DataTypes.DATE, // Use DATE instead of TIMESTAMP for Sequelize compatibility
        allowNull: false,
        defaultValue: DataTypes.NOW, // Set default to current timestamp if needed
    },
}, {
    tableName: 'carrinho',
    timestamps: false,
});

export default Carrinho;
