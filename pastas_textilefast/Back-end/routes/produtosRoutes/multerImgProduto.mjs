
import Produtos from '../models/Produtos.js';
import Imagens_produtos from '../../models/imagens_produtos.mjs';
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

export const criarProduto = async (req, res) => {
  const { nome_produto, descricao, preco, estoque, categoria_id } = req.body;
  const imagem = req.file;  // A imagem será acessada aqui

  if (!nome_produto || !descricao || !preco || !estoque || !categoria_id || !imagem) {
    return res.status(400).json({ message: "Todos os campos devem ser preenchidos" });
  }

  try {
    // Armazenando o produto
    const produto = await Produtos.create({
      nome_produto,
      descricao,
      preco,
      estoque,
      categoria_id,
      imagem_url: imagem.path,  // Armazena o caminho da imagem
      data_cadastro: new Date(),
    });

    res.status(201).json(produto);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar produto", error });
  }
};
