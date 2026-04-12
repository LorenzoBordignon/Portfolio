export const appRoutes = {
  home: "/",
  sobre: "/sobre",
  contato: "/contato",
};

export const routeSegments = {
  sobre: "sobre",
  contato: "contato",
};

export const navigationGroups = [
  {
    title: "Portfólio",
    links: [
      {
        to: appRoutes.home,
        label: "Início",
        description: "Seja bem-vindo ao meu portfólio.",
      },
      {
        to: appRoutes.sobre,
        label: "Sobre",
        description: "Quem sou eu?",
      },
      {
        to: appRoutes.contato,
        label: "Contato",
        description: "Entre em contato comigo.",
      },
    ],
  },
];
