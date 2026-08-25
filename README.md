# Portfolio — Filipe Silveira

Portfólio pessoal desenvolvido para apresentar minha trajetória, habilidades técnicas e principais projetos desenvolvidos durante minha formação em Desenvolvimento de Software.

O projeto foi desenvolvido com **React, TypeScript e Vite**, utilizando componentes reutilizáveis, organização modular, responsividade e animações.

## Acesso

**Versão online:**
https://filipesilveira-dev.github.io/portfolio/

**Repositório:**
https://github.com/filipesilveira-dev/portfolio

## Tecnologias

* React
* TypeScript
* Vite
* CSS
* Motion
* ESLint
* Git
* GitHub Actions
* GitHub Pages

## Como executar localmente

### Pré-requisitos

* Node.js
* npm
* Git

### Instalação

Clone o repositório:

```bash
git clone https://github.com/filipesilveira-dev/portfolio.git
```

Acesse a pasta:

```bash
cd portfolio
```

Instale as dependências:

```bash
npm ci
```

Execute o projeto em modo de desenvolvimento:

```bash
npm run dev
```

O endereço da aplicação será informado pelo Vite no terminal.

### Outros comandos

Executar o lint:

```bash
npm run lint
```

Gerar o build de produção:

```bash
npm run build
```

Visualizar o build localmente:

```bash
npm run preview
```

## Deploy

O projeto utiliza **GitHub Actions** para automatizar o build e o deploy no GitHub Pages.

Após um `push` para a branch `main`, o pipeline executa:

```text
Push
  ↓
Instalação das dependências
  ↓
Lint
  ↓
Build
  ↓
Upload do artifact
  ↓
Deploy no GitHub Pages
```

A versão publicada pode ser acessada em:

**https://filipesilveira-dev.github.io/portfolio/**

## Projetos apresentados

### Dice Roller

Aplicação web autoral para simulação de lançamentos de dados de RPG.

O projeto utiliza React, TypeScript, Zustand e Motion, com múltiplos tipos de dados, lançamentos individuais e simultâneos, componentes reutilizáveis, animações e persistência da configuração dos dados. Também possui testes automatizados com Jest e React Testing Library, além de CI/CD com GitHub Actions.

* [Repositório](https://github.com/filipesilveira-dev/dice-roller)
* [Aplicação](https://filipesilveira-dev.github.io/dice-roller/)

### Sépia Bistrô

Aplicação desenvolvida para explorar a arquitetura de **Micro Frontends**.

O projeto utiliza React, Vite e Module Federation, com uma aplicação Host responsável pela integração de diferentes micro frontends:

* `mfe-container` — integração da aplicação;

* `mfe-menu` — cardápio e seleção de produtos;

* `mfe-checkout` — carrinho e processo de checkout.

* [Repositório](https://github.com/filipesilveira-dev/frontendGithub/tree/main/sepia_bistro_micro_frontend)

### Diário de Bordo

Progressive Web App desenvolvido como atividade prática da EBAC.

O projeto utiliza React, TypeScript, Vite e Zustand para implementar uma aplicação de diário de bordo com características de PWA.

* [Repositório](https://github.com/filipesilveira-dev/frontendGithub/tree/main/diario_de_bordo_PWA)

### Tudo Dev Blog

Blog desenvolvido com Next.js para publicação de artigos técnicos.

O projeto explora recursos do framework como rotas dinâmicas, Server Components, geração estática de páginas e organização da aplicação em camadas, simulando o consumo de uma API.

* [Repositório](https://github.com/filipesilveira-dev/frontendGithub/tree/main/tudo-dev-blog-nextjs)
* [Aplicação](https://frontend-github-iota.vercel.app/)

## Autor

**Filipe Silveira**

Desenvolvedor Front-end em formação.

* [GitHub](https://github.com/filipesilveira-dev)
* [LinkedIn](https://www.linkedin.com/in/filipe-silveira-511889351/)
