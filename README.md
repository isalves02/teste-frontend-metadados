# Projeto Coral Shop

Projeto fictício promovido pela Metadados.

## A resolução
Foi desenvolvido uma aplicação como solicitado no modelo de plataforma **e-commerce** com o React + TypeScript + Vite + Sass Pre-Processor, que contém as seguintes funcionalidades:

- Adicionar um no carrinho através do botão de compra;
- Pesquisar de forma assíncrona produtos a serem exibidos;
- Alterar sua quantidade no carrinho através dos botões (-) e (+);
- Filtrar de forma assíncrona a exibição de produtos (sendo estes filtros categorias ou range de preço);
- Para remover o produto completamente do carrinho, como no padrão dos e-commerces, é necessário clicar no ícone de lixeira referente a este;
- Os dados retornados são da fakeapi (https://fakeapi.platzi.com/) como solicitado no desafio desse projeto - por ser acessada por diversos usuários como forma de teste, os produtos cadastrados poderão não estar iguais aos exemplos do layout :)


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
  - "vite": "^5.1.6"
  - "sass": "^1.71.1"
  - "axios": "^1.6.7",
  - "jest": "^29.7.0",
  - "react": "^18.2.0",
  - "eslint": "^8.57.0",
  - "typescript": "^5.2.2",
  - "react-dom": "^18.2.0",
  - "@types/react": "^18.2.64",
  - "react-router-dom": "^6.22.3",
  - "@types/react-dom": "^18.2.21",
  - "@vitejs/plugin-react": "^4.2.1",
  - "@typescript-eslint/parser": "^7.1.1",
  - "eslint-plugin-react-hooks": "^4.6.0",
  - "eslint-plugin-react-refresh": "^0.4.5",
  - "@fortawesome/react-fontawesome": "^0.2.0",
  - "@typescript-eslint/eslint-plugin": "^7.1.1",
  - "@fortawesome/free-solid-svg-icons": "^6.5.1",
  - "@fortawesome/fontawesome-svg-core": "^6.5.1",
  - "@fortawesome/free-regular-svg-icons": "^6.5.1",



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
#
