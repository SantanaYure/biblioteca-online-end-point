let {
  livros,
 identificadosLivro,
} = require('../bancodedados');

//Listar Livros
const listarLivros = (req, res) => {
  return res.json(livros);
}
//Obter Livro pelo ID
const obterLivro = (req, res) => {
  const { id } = req.params;
  
  const livro = livros.find((livro) => {
    return livro.id === Number(id);
  });

  if (isNaN(id)) {
    return res.status(400).json({ mensagem: 'O valor do parâmetro ID da URL não é um número válido.' });
  }

  if (!livro) {
    return res.status(404).json({mensagem: 'ERRO 404: LIVRO NÃO ENCONTRADO'});
  }

  return res.status(200).json(livro);
}
//Cadastrar Livro
const cadastrarLivro = (req, res) => {
  const { titulo, autor, ano, numPaginas } = req.body;
  
  const livro = {
    id:  identificadosLivro++,
    titulo: titulo,
    autor: autor,
    ano: ano,
    numPaginas: numPaginas,
  }

  livros.push(livro);
  return res.json(livro);
}
//Atualizar livro
const atualizarLivro = (req, res) => {
  const { id } = req.params;
  const { titulo, autor, ano, numPaginas } = req.body;

  const livro = livros.find((livro) => {
    return livro.id === Number(id);
  });

  if (!livro) {
    return res.status(404).json({mensagem: 'ERRO 404: LIVRO NÃO ENCONTRADO'});
  }

  livro.titulo = titulo;
  livro.autor = autor;
  livro.ano = ano;
  livro.numPaginas = numPaginas;

  return res.status(204).send();

}

//Excluir livro
const excluirLivro = (req, res) => {
  const { id } = req.params;

  const livro = livros.find((livro) => {
    return livro.id === Number(id);
  });

  if(!livro){
    return res.status(404).json({mensagem: `O livro com id ${id} não foi encontrado`})
  }

  livros = livros.filter((instrutor) => {
    return instrutor.id !== Number(id)
  });

  return res.status(204).send()
}


module.exports = {
  listarLivros,
  obterLivro,
  cadastrarLivro,
  atualizarLivro,
  excluirLivro,
}