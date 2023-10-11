interface iProjects {
  id: number;
  title: string;
  description: string;
  img_banner: string;
  types: string[];
  deploy: string | undefined;
  repository: string | undefined;
  techs: string[];
  type: string;
}

export const projects: iProjects[] = [
  {
    id: 0,
    title: "Site de consultoria",
    description:
      "Este site institucional foi desenvolvido de forma independente, como um projeto de freelancer, para atender às necessidades de uma palestrante.",
    img_banner: "/assets/img/projectsBanner/gabi_site.png",
    types: ["Freelancer", "Front-End", "Site"],
    deploy: "https://gabilourenco.com.br/",
    repository: undefined,
    techs: ["Next.js", "Html", "Css","Swipper","reCAPCHA","Tailwind"],
    type: "front-end",
  },
  {
    id: 1,
    title: "Break Briks Game",
    description:
      "Break Bricks Game é um jogo indie que eu mesmo desenvolvi usando apenas TypeScript, HTML e CSS. Nele, você basicamente quebra tijolos que são os inimigos do jogo para ganhar. Você pode pausar, dar play, reiniciar e começar quando quiser",
    img_banner: "/assets/img/projectsBanner/break_bricks.png",
    types: ["Acadêmico", "Front-End", "Game"],
    deploy: "https://main--tiny-sundae-cc3049.netlify.app",
    repository: "https://github.com/cesarrafaeljunior/break_bricks_game",
    techs: ["TypeScript", "Html", "Css", "Canvas", "Webpack"],
    type: "front-end",
  },
  {
    id: 2,
    title: "Kenzie Kars",
    description:
      "Kenzie Kars é uma plataforma online para compra e venda de veículos automotivos, oferecendo opções tanto para carros novos quanto usados. Como cliente, você pode navegar por diversos anúncios de carros e encontrar o veículo que atenda às suas necessidades e orçamento. Já como vendedor, você pode anunciar seu carro e expô-lo a uma ampla audiência de compradores em potencial.",
    img_banner: "/assets/img/projectsBanner/kenzieKars.png",
    types: ["Acadêmico", "Front-End", "Equipe"],
    deploy: "https://motors-shop-ten.vercel.app/",
    repository: "https://github.com/cesarrafaeljunior/kenzie_kars_front",
    techs: ["React", "TypeScript", "Next.js", "Chakra UI", "Yup"],
    type: "front-end",
  },
  {
    id: 3,
    title: "Kenzie Kars Api",
    description: "Api da aplicação Kenzie Kars.",
    img_banner: "/assets/img/project_example.jpg",
    types: ["Acadêmico", "Back-End"],
    deploy: undefined,
    repository: "https://github.com/cesarrafaeljunior/kenzie_kars_back",
    techs: ["Node.js", "Express", "Jwt", "Nodemialer", "Postgres", "TypeOrm"],
    type: "back-end",
  },
  {
    id: 4,
    title: "Market Maker Api",
    description:
      "O projeto Market Maker visa gerenciar os pedidos realizados presencialmente em restaurantes e bares, provendo uma otimização de tempo do momento do pedido até a produção, facilitando a comunicação entre as equipes do estabelecimento. O sistema automatiza o recebimento de pedidos, serviço de mesa, preparo e entrega de produtos. Tudo é controlado através de eletrônicos, mantendo os registros de cada etapa. A partir daí, Market Maker visa um sistema de qualidade, que evita erros humanos e falhas sistêmicas.",
    img_banner: "/assets/img/project_example.jpg",
    types: ["Acadêmico", "Back-End", "Equipe"],
    deploy: undefined,
    repository: "https://github.com/cesarrafaeljunior/market-maker",
    techs: [
      "Node.js",
      "Express",
      "Integration Tests",
      "Jwt",
      "Postgres",
      "TypeOrm",
    ],
    type: "back-end",
  },
  {
    id: 5,
    title: "Biblioteka Api",
    description:
      "Um sistema que permite usuários registrarem seus albums e suas músicas favoritas.",
    img_banner: "/assets/img/project_example.jpg",
    types: ["Acadêmico", "Back-End"],
    deploy: undefined,
    repository: "https://github.com/cesarrafaeljunior/biblioteka-api",
    techs: ["Python", "Django", "Rest Framework", "Sql"],
    type: "back-end",
  },
  {
    id: 6,
    title: "Finances control",
    description:
      "Finances control é um projeto simples e acadêmico, o aplicativo simula um gerenciamento de finanças, permitindo o usuário cadastrar entradas e saídas de dinheiro. O cálculo de entradas e saídas acontece dinamicamente.",
    img_banner: "/assets/img/projectsBanner/nuKenzie.png",
    types: ["Acadêmico", "Front-End"],
    deploy: "https://react-entrega-s1-nu-kenzie-cesarrafaeljunior.vercel.app/",
    repository: "https://github.com/cesarrafaeljunior/finances_control",
    techs: ["React"],
    type: "front-end",
  },
  {
    id: 7,
    title: "Burguer Kenzie",
    description:
      "Hamburguer Shop é um projeto simples acadêmico desenvolvido utilizando React básico, o app simula um e-commerce de uma hamburgueria, onde o usuário é capaz de adicionar e remover produtos do carrinho, a quantidade do produto é alterada dinamicamente ao tentar adicionar mais de um do mesmo produto, o valor total da compra também é alterado dinamicamente a depender da quantidade de items adicionados no carrinho.",
    img_banner: "/assets/img/projectsBanner/burguerKenzie.png",
    types: ["Acadêmico", "Front-End"],
    deploy:
      "https://react-entrega-s1-hamburgueria-da-kenzie-cesarrafaeljunior-19.vercel.app/",
    repository: "https://github.com/cesarrafaeljunior/e-commerce_hamburgueria",
    techs: ["React", "Styled Components", "Axios"],
    type: "front-end",
  },
  {
    id: 8,
    title: "Mks System",
    description:
      "O projeto se trata de uma simulação de um e-commerce de eletrônicos, várias funcionalidades comums de um e-commerce foram adicionadas, tais como, adicionar produtos no carrinho, alterar a quantidade do mesmo produto no carrinho, remover produtos do carrinho, alteração automatica no total de preços da compra. O aplicativo consome uma Api Rest de produtos e os exibe na tela.",
    img_banner: "/assets/img/projectsBanner/mksSystem.png",
    types: ["Acadêmico", "Front-End"],
    deploy:
      "https://teste-tecnico-16mhh7qbb-cesarrafaeljunior.vercel.app/mainPage",
    repository: "https://github.com/cesarrafaeljunior/mks_systems",
    techs: [
      "React",
      "TypeScript",
      "Redux",
      "Styled Components",
      "Axios",
      "Router Dom",
    ],
    type: "front-end",
  },
  {
    id: 9,
    title: "Workout",
    description:
      "Workout, é uma landing page responsiva criada para academias.",
    img_banner: "/assets/img/projectsBanner/workout.png",
    types: ["Acadêmico", "Front-End", "Landing Page"],
    deploy: "https://aquamarine-unicorn-6e7c63.netlify.app/",
    repository: "https://github.com/cesarrafaeljunior/workout",
    techs: ["JavaScript", "Html", "Css"],
    type: "front-end",
  },
];
