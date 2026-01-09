const readline = require("readline-sync");
const { v4: uuidv4 } = require("uuid");
const { lerProdutos, salvarProdutos } = require("./fileService");

function adicionarProduto() {
  const produtos = lerProdutos();

  const nome = readline.question("Nome do produto: ");
  const categoria = readline.question("Categoria: ");
  const quantidade = readline.questionInt("Quantidade em estoque: ");
  const preco = readline.questionFloat("Preco: ");

  if (quantidade < 0 || preco <= 0) {
    console.log("❌ Dados inválidos.");
    return;
  }

  const produto = {
    id: uuidv4(),
    nome,
    categoria,
    quantidade,
    preco
  };

  produtos.push(produto);
  salvarProdutos(produtos);

  console.log("✅ Produto adicionado com sucesso!");
}

function listarProdutos() {
  const produtos = lerProdutos();

  if (produtos.length === 0) {
    console.log("Nenhum produto cadastrado.");
    return;
  }

  console.table(produtos);
}

function atualizarProduto() {
  const produtos = lerProdutos();
  const id = readline.question("Informe o ID do produto: ");

  const produto = produtos.find(p => p.id === id);

  if (!produto) {
    console.log("❌ Produto não encontrado.");
    return;
  }

  console.log("Deixe em branco para manter o valor atual.");

  const nome = readline.question(`Nome (${produto.nome}): `);
  const categoria = readline.question(`Categoria (${produto.categoria}): `);
  const quantidade = readline.question(`Quantidade (${produto.quantidade}): `);
  const preco = readline.question(`Preco (${produto.preco}): `);

  if (nome) produto.nome = nome;
  if (categoria) produto.categoria = categoria;
  if (quantidade) produto.quantidade = Number(quantidade);
  if (preco) produto.preco = Number(preco);

  salvarProdutos(produtos);
  console.log("✅ Produto atualizado com sucesso!");
}

function excluirProduto() {
  let produtos = lerProdutos();
  const id = readline.question("Informe o ID do produto: ");

  const produto = produtos.find(p => p.id === id);

  if (!produto) {
    console.log("❌ Produto não encontrado.");
    return;
  }

  const confirmacao = readline.question("Tem certeza que deseja excluir? (s/n): ");

  if (confirmacao.toLowerCase() === "s") {
    produtos = produtos.filter(p => p.id !== id);
    salvarProdutos(produtos);
    console.log("✅ Produto excluído com sucesso!");
  } else {
    console.log("Operação cancelada.");
  }
}

function buscarProduto() {
  const produtos = lerProdutos();
  const termo = readline.question("Buscar por ID ou nome: ").toLowerCase();

  const encontrados = produtos.filter(p =>
    p.id === termo || p.nome.toLowerCase().includes(termo)
  );

  if (encontrados.length === 0) {
    console.log("❌ Nenhum produto encontrado.");
    return;
  }

  console.table(encontrados);
}

module.exports = {
  adicionarProduto,
  listarProdutos,
  atualizarProduto,
  excluirProduto,
  buscarProduto
};
