const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/produtos.json");

function lerProdutos() {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([]));
  }
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
}

function salvarProdutos(produtos) {
  fs.writeFileSync(filePath, JSON.stringify(produtos, null, 2));
}

module.exports = {
  lerProdutos,
  salvarProdutos
};
