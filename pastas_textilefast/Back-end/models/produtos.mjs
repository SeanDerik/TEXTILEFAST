import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Produtos = sequelize.define('Produtos', {
  produto_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome_produto: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.TEXT,
  },
  preco: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  estoque: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'produtos',
  timestamps: false,
});

export default Produtos;
