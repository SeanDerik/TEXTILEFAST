import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Empresa from './empresas.mjs';
import Categoria from './categorias.mjs';

class Produto extends Model {}

Produto.init({
  produto_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome_produto: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  preco: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  estoque: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  fornecedor_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'empresas',
      key: 'empresa_id'
    }
  },
  categoria_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'categorias',
      key: 'categoria_id'
    }
  },
  imagem_url: {
    type: DataTypes.STRING(255),
    allowNull: true
  }
}, {
  sequelize,
  modelName: 'Produto',
  tableName: 'produtos',
  timestamps: false 
});

Produto.belongsTo(Empresa, { foreignKey: 'fornecedor_id' });
Produto.belongsTo(Categoria, { foreignKey: 'categoria_id' });

export default Produto;
