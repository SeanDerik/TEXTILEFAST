import Categorias from '../models/Categorias.mjs';

export const getCategorias = async (req, res) => {
  try {
    const categorias = await Categorias.findAll();
    res.status(200).json(categorias);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar categorias', error });
  }
};

export const getCategoriaById = async (req, res) => {
  const { categoria_id } = req.params;

  try {
    const categoria = await Categorias.findOne({
      where: { categoria_id: categoria_id }
    });

    if (categoria) {
      res.status(200).json(categoria);
    } else {
      res.status(404).json({ message: 'Categoria não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar categoria', error });
  }
};
