import Produtos from '../models/produtos.mjs';
import path from 'path';

export const obterTodosProdutos = async (req, res) => {
  try {
    const { empresa_id } = req.empresa;
    if (!empresa_id) {
      return res.status(400).json({ error: 'ID da empresa não fornecido.' });
    }
    const produtos = await Produtos.findAll({
      where: { fornecedor_id: empresa_id },
    });

    return res.status(200).json(produtos);
  } catch (error) {
    console.error('Erro ao obter produtos:', error);
    return res.status(500).json({ error: 'Erro ao obter produtos.' });
  }
};


export const criarProduto = async (req, res) => {
  const { nome_produto, descricao, preco, estoque, fornecedor_id, categoria_id } = req.body;
  const imagem = req.file;
  const fornecedorIdFromToken = req.empresa ? req.empresa.fornecedor_id : null;
  const fornecedorId = fornecedor_id || fornecedorIdFromToken;

  console.log('Fornecedor ID:', fornecedorId);

  if (!req.body.fornecedor_id || req.body.fornecedor_id === 'undefined') {
    return res.status(400).json({ error: 'Fornecedor ID is required' });
  }
  
  console.log('Request Body:', req.body);
  console.log('File:', req.file);

  try {
    if (!nome_produto || !descricao || !preco || !estoque || !categoria_id) {
      return res.status(400).json({ error: 'Todos os campos obrigatórios devem ser preenchidos' });
    }
    if (isNaN(preco) || isNaN(estoque)) {
      return res.status(400).json({ error: 'Preço e Estoque devem ser números válidos' });
    }

    let imagemUrl = null;
    if (imagem) {
      const imagemPath = path.join('uploads', imagem.filename);
      imagemUrl = `http://localhost:3001/${imagemPath}`;
    }

    const produtoExistente = await Produtos.findOne({ where: { nome_produto } });
    if (produtoExistente) {
      return res.status(409).json({ error: 'Produto já existe com esse nome' });
    }

    const novoProduto = await Produtos.create({
      nome_produto,
      descricao,
      preco,
      estoque,
      fornecedor_id: fornecedorId,
      categoria_id,
      imagem_url: imagemUrl,
      data_cadastro: new Date(),
    });

    return res.status(201).json({
      message: 'Produto criado com sucesso!',
      produto: novoProduto,
    });
  } catch (error) {
    console.error('Erro ao criar produto:', error);
    return res.status(500).json({ error: error.message || 'Erro ao criar produto' });
  }
};

export const atualizarProduto = async (req, res) => {
  const { produto_id } = req.params;
  const { nome_produto, descricao, preco, estoque, fornecedor_id, categoria_id } = req.body;
  const imagem = req.file;

  try {
    const produto = await Produtos.findByPk(produto_id);
    if (!produto) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }

    let imagemUrl = produto.imagem_url;
    if (imagem) {
      const imagemPath = path.join('uploads', imagem.filename);
      imagemUrl = imagemPath;
    }

    produto.nome_produto = nome_produto || produto.nome_produto;
    produto.descricao = descricao || produto.descricao;
    produto.preco = preco || produto.preco;
    produto.estoque = estoque || produto.estoque;
    produto.fornecedor_id = fornecedor_id || produto.fornecedor_id;
    produto.categoria_id = categoria_id || produto.categoria_id;
    produto.imagem_url = imagemUrl;

    await produto.save();

    return res.status(200).json({
      message: 'Produto atualizado com sucesso!',
      produto,
    });
  } catch (error) {
    console.error('Erro ao atualizar produto:', error);
    return res.status(500).json({ error: 'Erro ao atualizar produto' });
  }
};

export const excluirProduto = async (req, res) => {
  const { produto_id } = req.params;

  try {
    const produto = await Produtos.findByPk(produto_id);
    if (!produto) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }
    await produto.destroy();

    return res.status(200).json({
      message: 'Produto excluído com sucesso!',
    });
  } catch (error) {
    console.error('Erro ao excluir produto:', error);
    return res.status(500).json({ error: 'Erro ao excluir produto' });
  }
};

export const listarProdutos = async (req, res) => {
  try {
    const produtos = await Produtos.findAll();
    return res.status(200).json({ produtos });
  } catch (error) {
    console.error('Erro ao listar produtos:', error);
    return res.status(500).json({ error: 'Erro ao listar produtos' });
  }
};

export const obterProdutoPorId = async (req, res) => {
  const { produto_id } = req.params;

  try {
    const produto = await Produtos.findByPk(produto_id);
    if (!produto) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }

    return res.status(200).json(produto);
  } catch (error) {
    console.error('Erro ao obter produto:', error);
    return res.status(500).json({ error: 'Erro ao obter produto' });
  }
};
