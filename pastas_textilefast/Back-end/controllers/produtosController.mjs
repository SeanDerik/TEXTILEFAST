import Produtos from '../models/produtos.js';

// Listar todos os produtos de um fornecedor
export const listarProdutos = async (req, res) => {
  const { fornecedor_id } = req.params;

  try {
    const produtos = await Produtos.findAll({ where: { fornecedor_id } });
    return res.status(200).json(produtos);
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    return res.status(500).json({ error: 'Erro ao buscar produtos' });
  }
};

// Criar um novo produto
export const criarProduto = async (req, res) => {
  const { nome_produto, descricao, preco, estoque, fornecedor_id, categoria_id } = req.body;

  try {
    const novoProduto = await Produtos.create({
      nome_produto,
      descricao,
      preco,
      estoque,
      fornecedor_id,
      categoria_id,
      data_cadastro: new Date(),
    });

    return res.status(201).json({
      message: 'Produto criado com sucesso!',
      produto: novoProduto,
    });
  } catch (error) {
    console.error('Erro ao criar produto:', error);
    return res.status(500).json({ error: 'Erro ao criar produto' });
  }
};

// Atualizar um produto
export const atualizarProduto = async (req, res) => {
  const { produto_id } = req.params;
  const { nome_produto, descricao, preco, estoque, categoria_id } = req.body;

  try {
    const produto = await Produtos.findByPk(produto_id);

    if (!produto) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }

    await produto.update({
      nome_produto,
      descricao,
      preco,
      estoque,
      categoria_id,
    });

    return res.status(200).json({
      message: 'Produto atualizado com sucesso!',
      produto,
    });
  } catch (error) {
    console.error('Erro ao atualizar produto:', error);
    return res.status(500).json({ error: 'Erro ao atualizar produto' });
  }
};

// Excluir um produto
export const excluirProduto = async (req, res) => {
  const { produto_id } = req.params;

  try {
    const produto = await Produtos.findByPk(produto_id);

    if (!produto) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }

    await produto.destroy();
    return res.status(200).json({ message: 'Produto excluído com sucesso!' });
  } catch (error) {
    console.error('Erro ao excluir produto:', error);
    return res.status(500).json({ error: 'Erro ao excluir produto' });
  }
};
