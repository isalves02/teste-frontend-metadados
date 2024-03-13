# Projeto Coral Shop

Projeto fictício promovido pela Metadados.

## A resolução
Foi desenvolvido uma aplicação como solicitado no modelo de plataforma **e-commerce** com o React + TypeScript + Vite + Sass Pre-Processor, que contém as seguintes funcionalidades:

- Adicionar um no carrinho através do botão de compra;
- Pesquisar de forma assíncrona produtos a serem exibidos;
- Alterar sua quantidade no carrinho através dos botões (-) e (+);
- Filtrar de forma assíncrona a exibição de produtos (sendo estes filtros categorias ou range de preço);
- Para remover o produto completamente do carrinho, como no padrão dos e-commerces, é necessário clicar no ícone de lixeira referente a este;
- Os dados retornados são da fakeapi (https://fakeapi.platzi.com/) como solicilado no desafio desse projeto - por ser acessada por diversos usuários como forma de teste, os produtos cadastrados poderão não estar iguais aos exemplos do layout :)


## Organização de pastas do projeto
Os três maiores focos foram: performance, código limpo e fácil manutenibilidade. Portanto, esse projeto possui as seguintes pastas:
  - "src/assets/icons": icones estáticos da aplicação;
  - "src/assets/sass": função única em sass utilizando "sass:math" compartilhada por todo o site. Essa função tem como objetivo converter todos os valores recebidos para a unidade REM na folha de estilo;
  - "src/components": com os componentes da aplicação;
    - "src/components/pages": as páginas da aplicação que serão alteradas no Router;
    - "src/components/layout": elementos independentes do layout que não foram considerados de serem parte somente de um componente pela necessidade de reutilização;
    - "src/components/header": header da nossa aplicação, à parte, por ser estático;
    - "src/components/footer": footer da nossa aplicação, à parte, por ser estático;
  - "src/interfaces": todas as interfaces utilizadas na aplicação;
  - "src/contexts": funções e as requisições que serão acessadas por todos os componentes da aplicação.

## Dependências utilizadas
  - "@types/react": "^18.2.15",
  - "@types/react-dom": "^18.2.7",
  - "@typescript-eslint/eslint-plugin": "^6.0.0",
  - "@typescript-eslint/parser": "^6.0.0",
  - "@vitejs/plugin-react": "^4.0.3",
  - "autoprefixer": "^10.4.16",
  - "eslint": "^8.45.0",
  - "eslint-plugin-react-hooks": "^4.6.0",
  - "eslint-plugin-react-refresh": "^0.4.3",
  - "postcss": "^8.4.31",
  - "postcss-import": "^15.1.0",
  - "tailwindcss": "^3.3.5",
  - "typescript": "^5.0.2",
  - "vite": "^4.4.5"


## Pré-requisitos

Esse projeto não possui pré-requisitos. 
Para executar, faz-se necessário clonar o projeto, acessar a pasta através do terminal e instalar o Node Package Manager:

```
npm install 
```

Após a concluir a instalação, executar o projeto no terminal através do comando:

```
npm run dev 
```
