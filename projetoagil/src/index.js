const readline = require("readline-sync");
const {
  adicionarProduto,
  listarProdutos,
  atualizarProduto,
  excluirProduto,
  buscarProduto
} = require("./produtoService");

let opcao;

do {
  console.log("\n===== AGILSTORE =====");
  console.log("1 - Adicionar Produto");
  console.log("2 - Listar Produtos");
  console.log("3 - Atualizar Produto");
  console.log("4 - Excluir Produto");
  console.log("5 - Buscar Produto");
  console.log("0 - Sair");

  opcao = readline.questionInt("Escolha uma opcao: ");

  switch (opcao) {
    case 1:
      adicionarProduto();
      break;
    case 2:
      listarProdutos();
      break;
    case 3:
      atualizarProduto();
      break;
    case 4:
      excluirProduto();
      break;
    case 5:
      buscarProduto();
      break;
    case 0:
      console.log("Encerrando o sistema...");
      break;
    default:
      console.log("Opcao invalida.");
  }
} while (opcao !== 0);
