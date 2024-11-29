import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Itens_carrinho = sequelize.define('Itens_carrinho', {
  carrinho_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'carrinhos',
      key: 'carrinho_id',
    },
  },
  produto_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'produtos', // This can stay as it is for now
      key: 'produto_id',
    },
  },
  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'itens_carrinho',
  timestamps: false,
});

export default Itens_carrinho;
