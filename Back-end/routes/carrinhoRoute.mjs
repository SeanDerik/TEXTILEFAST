import express from 'express';
import Carrinho from '../models/carrinho.mjs';
import Produtos from '../models/produtos.mjs';
import ItensCarrinho from '../models/itens_carrinho.mjs';

const router = express.Router();

// Define associations (ensure this is at the top of your file)
ItensCarrinho.belongsTo(Produtos, { foreignKey: 'produto_id', as: 'produto' });
Produtos.hasMany(ItensCarrinho, { foreignKey: 'produto_id', as: 'itensCarrinho' });

// Route to add product to cart
router.post('/addcarrinho', async (req, res) => {
    const { comprador_id, produto_id, quantidade } = req.body;

    try {
        // Fetch the most recent Carrinho for the given comprador_id
        const carrinho = await Carrinho.findOne({
            where: { comprador_id },
            order: [['data_criacao', 'DESC']],
        });

        if (!carrinho) {
            return res.status(404).json({ message: 'Carrinho not found for this comprador_id' });
        }

        // Add item to the cart (itens_carrinho)
        const itemCarrinho = await ItensCarrinho.create({
            carrinho_id: carrinho.carrinho_id,
            produto_id,
            quantidade,
        });

        res.status(200).json({
            message: 'Product added to cart successfully',
            itemCarrinhoId: itemCarrinho.item_carrinho_id,  // Return the ID of the inserted item
        });
    } catch (err) {
        console.error('Error adding product to cart:', err.message); // Log the error message for more clarity
        return res.status(500).json({ message: 'Error adding product to cart' });
    }
});

// Route to fetch cart items with associated Produtos data
router.get('/cart', async (req, res) => {
    try {
        // Fetch cart items and include associated Produtos details
        const cartItems = await ItensCarrinho.findAll({
            include: [
                {
                    model: Produtos,
                    as: 'produto',  // Alias must match the one defined in the association
                    attributes: ['nome_produto', 'descricao', 'preco']  // You can specify which attributes to return
                }
            ],
        });

        res.status(200).json(cartItems);
    } catch (err) {
        console.error('Error fetching cart items:', err.message); // Log the error message for more clarity
        res.status(500).json({ message: 'Error fetching cart items' });
    }
});

export default router;
