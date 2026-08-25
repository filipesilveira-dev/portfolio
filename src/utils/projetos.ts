import diceRoller from "../assets/prints/diceRoller.png";
import diceRollerMobile from "../assets/prints/diceRollerMobile.png";

import sepiaBistro from "../assets/prints/sepiaBistro.png";
import sepiaBistroMobile from "../assets/prints/sepiaBistroMobile.png";

import diarioDeBordo from "../assets/prints/diarioDeBordo.png";
import diarioDeBordoMobile from "../assets/prints/diarioDeBordoMobile.png";

import tudoDevBlog from "../assets/prints/tudoDevBlog.png";
import tudoDevBlogMobile from "../assets/prints/tudoDevBlogMobile.png";

export const projetos = [
  {
    name: "Dice Roller",
    img: diceRoller,
    imgM: diceRollerMobile,
    description:
      "Trata-se de uma aplicação web autoral desenvolvida desde o conceito, com múltiplos tipos de dados, lançamentos individuais e simultâneos, componentes reutilizáveis, gerenciamento de estado global com Zustand e animações. Implementação de testes automatizados com Jest e React Testing Library, CI/CD com GitHub Actions e deploy no GitHub Pages.",
    url: "https://github.com/filipesilveira-dev/dice-roller",
    deploy: "https://filipesilveira-dev.github.io/dice-roller/",
  },
  {
    name: "Sépia Bistrô",
    img: sepiaBistro,
    imgM: sepiaBistroMobile,
    description:
      "Trata-se de uma página web desenvolvida utilizando a arquitetura de micro frontends. O Container é a aplicação Host responsável por integrar os micro frontends do projeto Sépia Bistrô por meio de Module Federation utilizando React e Vite. Nesta arquitetura, o Container é responsável por carregar dinamicamente os módulos remotos, compondo a aplicação final exibida ao usuário. O projeto é composto pelos seguintes micro frontends: mfe-container → aplicação Host responsável pela integração. mfe-menu → responsável pela exibição do cardápio e seleção dos produtos. mfe-checkout → responsável pelo carrinho de compras e processo de checkout.",
    url: "https://github.com/filipesilveira-dev/frontendGithub/tree/main/sepia_bistro_micro_frontend",
    deploy: "",
  },
  {
    name: "Diário de bordo",
    img: diarioDeBordo,
    imgM: diarioDeBordoMobile,
    description:
      "Projeto desenvolvido como atividade prática da EBAC com o objetivo de implementar um Diário de Bordo como Progressive Web App (PWA) utilizando React, TypeScript, Vite e Zustand.",
    url: "https://github.com/filipesilveira-dev/frontendGithub/tree/main/diario_de_bordo_PWA",
    deploy: "",
  },
  {
    name: "Tudo Dev Blog",
    img: tudoDevBlog,
    imgM: tudoDevBlogMobile,
    description:
      "Blog desenvolvido com Next.js para exibição de artigos técnicos, utilizando rotas dinâmicas, Server Components e geração estática de páginas. Demonstrar na prática conceitos modernos como data fetching no servidor, SSG/ISR e organização em camadas simulando consumo de API.",
    url: "https://github.com/filipesilveira-dev/frontendGithub/tree/main/tudo-dev-blog-nextjs",
    deploy: "https://frontend-github-iota.vercel.app/",
  },
];
