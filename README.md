# 🚀 CRUD de Produtos - Frontend React

Aplicação **frontend** desenvolvida em **React** (com Vite) para gerenciamento de produtos, permitindo operações completas de **CRUD** (Criar, Ler, Atualizar, Excluir) integradas a uma API pública. O projeto utiliza **Material-UI (MUI)** para um design moderno e responsivo, além de navegação fluida com **React Router DOM**.

<hr>

## ✨ Funcionalidades

- **Listagem de Produtos:** Visualize todos os produtos cadastrados.
- **Cadastro:** Adicione novos produtos facilmente.
- **Edição:** Atualize informações de produtos existentes.
- **Exclusão:** Remova produtos da lista.
- **Interface Moderna:** Layout responsivo com Material-UI.
- **Navegação Rápida:** Rotas dinâmicas com React Router DOM.

<hr>

## 📦 Estrutura do Objeto Produto

```json
{
  "id": 0, // Identificador único do produto
  "nome": "string", // Nome do produto
  "preco": 0 // Preço do produto
}
```

<hr>

## 🛠️ Tecnologias Utilizadas

- **React**: Biblioteca para construção de interfaces de usuário.
- **Vite**: Ferramenta de build rápida para projetos frontend.
- **Material-UI (MUI)**: Componentes React com Material Design.
- **React Router DOM**: Gerenciamento de rotas.
- **Axios**: Cliente HTTP para requisições à API.

<hr>

## 🚀 Instalação e Execução

1. **Clone o repositório e acesse a pasta do projeto:**

   ```bash
   git clone <url-do-repositorio>
   cd AV2 - Lilli
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

   Caso precise instalar individualmente:

   ```bash
   npm install react react-dom
   npm install react-router-dom @mui/material @mui/icons-material @emotion/react @emotion/styled axios
   npm install --save-dev vite @vitejs/plugin-react
   ```

3. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```

4. **Acesse no navegador:**  
   [http://localhost:5173](http://localhost:5173)

<hr>

## 📂 Estrutura de Pastas Sugerida

```
src/
├── pages         # Páginas principais (Listagem, Criação, Edição)
├── components    # Componentes reutilizáveis (Formulários, Tabelas)
├── services      # Lógica para requisições HTTP (Axios)
└── routes        # Definição das rotas da aplicação
```

<hr>

## 🌐 Rotas da Aplicação

| Caminho       | Descrição                                           |
| ------------- | --------------------------------------------------- |
| `/`           | Lista todos os produtos                             |
| `/novo`       | Formulário para cadastrar novo produto              |
| `/editar/:id` | Formulário para editar produto existente (por `id`) |

<hr>

## 📡 Exemplos de Requisição à API

A API utilizada é: `https://apipw.leoproti.com.br/produtos`

```javascript
// GET - Listar produtos
axios.get("https://apipw.leoproti.com.br/produtos");

// POST - Criar produto
axios.post("https://apipw.leoproti.com.br/produtos", {
  nome: "Produto Exemplo",
  preco: 100.5,
});

// PUT - Atualizar produto (exemplo para ID 123)
axios.put("https://apipw.leoproti.com.br/produtos/123", {
  nome: "Produto Atualizado",
  preco: 120,
});

// DELETE - Excluir produto (exemplo para ID 123)
axios.delete("https://apipw.leoproti.com.br/produtos/123");
```

<hr>

## 🤝 Contribuição

Sinta-se à vontade para explorar, sugerir melhorias ou abrir issues!  
Dúvidas e sugestões são sempre bem-vindas.
