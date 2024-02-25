const express = require('express');
const { 
  listarLivros,
  obterLivro,
  cadastrarLivro,
  atualizarLivro,
  excluirLivro
} = require('./controladores/livros.js');

const rotas = express();

rotas.get('/livros', listarLivros);
rotas.get('/livros/:id', obterLivro);
rotas.post('/livros', cadastrarLivro);
rotas.put('/livros/:id', atualizarLivro);
rotas.delete('/livros/:id', excluirLivro);

module.exports = rotas;