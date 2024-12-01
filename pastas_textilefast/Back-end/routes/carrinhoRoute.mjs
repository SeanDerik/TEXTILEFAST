import express from 'express';
import Carrinho from '../models/carrinho.js'; 

const router = express.Router();

// Change the path from '/api/carrinho' to '/'
router.post('/:carrinho', async (req, res) => {
    try {
        const { comprador_id } = req.body;
        await Carrinho.create({ comprador_id });
        res.status(201).json({ message: 'Data inserted successfully' });
    } catch (error) {
        console.error('Error inserting data:', error);
        res.status(500).json({ error: 'Failed to insert data' });
    }
});

export default router;
