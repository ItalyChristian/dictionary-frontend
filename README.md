# 📖 Dictionary Frontend

Aplicação web para consulta de um dicionário de inglês, consumindo a [Dictionary API](https://github.com/ItalyChristian/dictionary-api). O frontend oferece uma interface moderna (utilizando conceito de glassmorphism) para buscar palavras, visualizar definições, favoritar termos e acompanhar o histórico de consultas.

Desenvolvido como um estudo aprofundado de arquitetura de frontend, aplicando conceitos como **Server Components**, **Client Components**, **Middleware** para autenticação, **Vanilla Extract** para estilização e **React Toastify** para feedbacks visuais.

---

## 🚀 Tecnologias

Este projeto foi construído utilizando:

- **Next.js 16** — framework React com App Router
- **React 19** — biblioteca para construção de interfaces
- **TypeScript** — tipagem estática
- **Vanilla Extract** — CSS-in-JS com zero runtime
- **Radix UI Themes** — componentes acessíveis e estilizados
- **Axios** — cliente HTTP para comunicação com a API
- **React Toastify** — notificações interativas
- **Lucide React** — ícones SVG
- **clsx** — gerenciamento condicional de classes CSS
- **React Compiler** — otimização de performance

---

## ⚙️ Funcionalidades

- ✅ **Autenticação** — Login e registro com JWT
- ✅ **Busca de palavras** — Pesquisa com paginação por cursor
- ✅ **Definições completas** — Exibição de significados, exemplos, fonética e áudio
- ✅ **Favoritos** — Adicionar e remover palavras dos favoritos
- ✅ **Histórico** — Visualização de palavras consultadas
- ✅ **Perfil do usuário** — Informações do usuário autenticado
- ✅ **Loading states** — Feedback visual durante carregamentos
- ✅ **Error handling** — Tratamento de erros com mensagens amigáveis
- ✅ **Design responsivo** — Adaptável para desktop, tablet e mobile
- ✅ **Proteção de rotas** — Middleware para redirecionamento automático

---

## 🧠 Conceitos aplicados

- **Arquitetura Next.js App Router** — Server e Client Components
- **Middleware** — Autenticação e proteção de rotas
- **Server Components** — Busca de dados e SEO
- **Client Components** — Interatividade e estado
- **Vanilla Extract** — Estilização com temas e variáveis CSS
- **HTTP Client** — Axios com interceptors para autenticação
- **Error Boundaries** — Tratamento de erros em componentes
- **Loading UI** — Estados de carregamento com Suspense e loading.tsx
- **Responsive Design** — Mobile-first com breakpoints

---

## 📦 Passo a Passo para Iniciar a Aplicação

### Pré-requisitos

- Node.js 20+
- Backend da API em execução (ou use o deploy em produção)

### 1. Instalar dependências

```bash
yarn install
# ou
npm install
```

### 2. Configurar variáveis de ambiente

Copie o arquivo de exemplo e ajuste se necessário:

```bash
cp .env.example .env
```

### 3. Rodar o projeto

```bash
yarn dev
# ou
npm run dev
```

A aplicação estará disponível em **http://localhost:3000**.
