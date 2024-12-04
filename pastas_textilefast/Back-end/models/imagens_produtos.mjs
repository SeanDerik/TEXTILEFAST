import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Produtos from './produtos.js'; 
const Imagens_produtos = sequelize.define('Imagens_produtos', {
    imagem_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    produto_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Produtos,  
            key: 'produto_id',
        },
    },
    url_imagem: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    data_upload: {
        type: DataTypes.TIMESTAMP,
        allowNull: false,
    },
}, {
    tableName: 'imagens_produtos',
    timestamps: false,
});

Imagens_produtos.belongsTo(Produtos, {
    foreignKey: 'produto_id', 
    targetKey: 'produto_id',  
});

export default Imagens_produtos;
