# GestorFront

GestorFront é uma aplicação frontend para gerenciamento de projetos, desenvolvida com React e Vite. A aplicação permite criar, visualizar e gerenciar projetos, além de oferecer um assistente de IA integrado para análise e chat sobre os projetos.

## Como Funciona

A aplicação é dividida em duas partes principais:
- **Lista de Projetos**: Permite criar novos projetos e visualizar os existentes com informações como nome, referência, status e progresso.
- **Chat com IA**: Um assistente inteligente que analisa projetos individuais ou gerais, respondendo perguntas e fornecendo insights.

O frontend se conecta a um backend hospedado no Render, que utiliza Supabase como banco de dados para armazenar os dados dos projetos.

## Deploy

A aplicação está hospedada online no [Netlify](https://gestorfront.netlify.app/). 

### Aviso Importante sobre Supabase
Este projeto utiliza o plano gratuito do Supabase para o banco de dados. O Supabase gratuito pausa automaticamente as instâncias após períodos de inatividade (geralmente 7 dias sem uso). Se a aplicação não funcionar, pode ser necessário acessar o painel do Supabase e "reativar" a instância manualmente.

## Tecnologias Utilizadas

- **Frontend**:
  - React 19
  - Vite (para build e desenvolvimento)
  - Tailwind CSS (para estilização)
  - React Markdown (para renderizar respostas da IA)
  - ESLint (para linting)

- **Backend**:
  - Hospedado no Render
  - Banco de dados: Supabase (PostgreSQL)

## Instalação e Execução

1. Clone o repositório:
   ```
   git clone <url-do-repositorio>
   cd GestorFront
   ```

2. Instale as dependências:
   ```
   npm install
   ```

3. Execute o servidor de desenvolvimento:
   ```
   npm run dev
   ```

4. Abra o navegador em `http://localhost:5173` (ou a porta indicada pelo Vite).

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento
- `npm run build`: Compila a aplicação para produção
- `npm run preview`: Visualiza a build de produção localmente
- `npm run lint`: Executa o ESLint para verificar código

## Estrutura do Projeto

```
src/
├── App.jsx          # Componente principal
├── main.jsx         # Ponto de entrada
├── index.css        # Estilos globais
├── assets/          # Recursos estáticos
├── components/
│   ├── Chat.jsx     # Componente de chat com IA
│   ├── FormProjeto.jsx  # Formulário para criar projetos
│   └── ProjectList.jsx   # Lista de projetos
└── Pages/
    └── Pagina.jsx   # Página principal (dashboard)
```

## Contribuição

Sinta-se à vontade para contribuir com melhorias, correções de bugs ou novas funcionalidades. Abra uma issue ou envie um pull request.

## Licença

Este projeto é de código aberto e está sob a licença MIT.
