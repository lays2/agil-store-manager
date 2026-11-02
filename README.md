# AgilStore — Gerenciamento de Produtos

Aplicação de terminal para gerenciar o inventário de uma loja de eletrônicos. Projeto de portfólio com operações de cadastro, consulta, atualização e exclusão de produtos.

## Funcionalidades

- Adicionar e listar produtos.
- Atualizar e excluir cadastros.
- Buscar produtos.
- Persistir dados em arquivo JSON.

## Tecnologias

JavaScript, Node.js, readline-sync e uuid. As dependências e o script de inicialização estão em [projetoagil/package.json](projetoagil/package.json).

## Como executar

Com Node.js e npm instalados:

```bash
git clone https://github.com/lays2/agil-store-manager.git
cd agil-store-manager/projetoagil
npm install
npm start
```

A aplicação funciona no terminal. As dependências são instaladas pelo `npm install`; não é necessário instalá-las individualmente.

## Roteiro de verificação manual

1. Cadastre um produto e confira se aparece na listagem.
2. Busque o produto e atualize suas informações.
3. Encerre e abra o programa para verificar a persistência.
4. Exclua o produto e confira a listagem.
5. Experimente uma busca por produto inexistente.

Este roteiro descreve verificações sugeridas; não representa uma execução de testes automatizados.
