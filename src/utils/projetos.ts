export const projetos = [
  {
    name: "Dice Roller",
    img: "/src/assets/prints/diceRoller.png",
    imgM: "/src/assets/prints/diceRollerMobile.png",
    description:
      "Trata-se de uma aplicação web autoral desenvolvida desde o conceito, com múltiplos tipos de dados, lançamentos individuais e simultâneos, componentes reutilizáveis, gerenciamento de estado global com Zustand e animações. Implementação de testes automatizados com Jest e React Testing Library, CI/CD com GitHub Actions e deploy no GitHub Pages.",
    url: "https://github.com/filipesilveira-dev/dice-roller",
    deploy: "https://filipesilveira-dev.github.io/dice-roller/",
  },
  {
    name: "Sépia Bistrô",
    img: "/src/assets/prints/sepiaBistro.png",
    imgM: "/src/assets/prints/sepiaBistroMobile.png",
    description:
      "O Container é a aplicação Host responsável por integrar os micro frontends do projeto Sépia Bistrô por meio de Module Federation utilizando React e Vite. Nesta arquitetura, o Container é responsável por carregar dinamicamente os módulos remotos, compondo a aplicação final exibida ao usuário. O projeto é composto pelos seguintes micro frontends: mfe-container → aplicação Host responsável pela integração. mfe-menu → responsável pela exibição do cardápio e seleção dos produtos. mfe-checkout → responsável pelo carrinho de compras e processo de checkout.",
    url: "URL_DO_GIT",
    deploy: "",
  },
  {
    name: "Diário de bordo",
    img: "/src/assets/prints/diarioDeBordo.png",
    imgM: "/src/assets/prints/diarioDeBordoMobile.png",
    description: "Projeto desenvolvido como atividade prática da EBAC com o objetivo de implementar um Diário de Bordo como Progressive Web App (PWA) utilizando React, TypeScript, Vite e Zustand.",
    url: "URL_DO_GIT",
    deploy: "",
  },
  {
    name: "Tudo Dev Blog",
    img: "/src/assets/prints/tudoDevBlog.png",
    imgM: "/src/assets/prints/tudoDevBlogMobile.png",
    description:
      "Blog desenvolvido com Next.js para exibição de artigos técnicos, utilizando rotas dinâmicas, Server Components e geração estática de páginas. Demonstrar na prática conceitos modernos como data fetching no servidor, SSG/ISR e organização em camadas simulando consumo de API.",
    url: "https://github.com/filipesilveira-dev/frontendGithub/tree/main/tudo-dev-blog-nextjs",
    deploy: "https://frontend-github-iota.vercel.app/",
  },
];
