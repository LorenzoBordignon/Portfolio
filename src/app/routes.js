export const appRoutes = {
  home: "/",
  sobre: "/sobre",
  projetos: "/projetos",
  contato: "/contato",
};

export const routeSegments = {
  sobre: "sobre",
  projetos: "projetos",
  contato: "contato",
};

export const navigationGroups = [
  {
    title: "Portfólio",
    links: [
      {
        to: appRoutes.home,
        label: "Início",
        description: "Visão geral do portfolio histórico.",
      },
      {
        to: appRoutes.sobre,
        label: "Sobre",
        description: "Trajetória, resumo profissional e base da apresentação.",
      },
      {
        to: appRoutes.projetos,
        label: "Projetos",
        description: "Espaço para reunir cases, demos e entregas principais.",
      },
      {
        to: appRoutes.contato,
        label: "Contato",
        description: "Canais profissionais e convite para conversa.",
      },
    ],
  },
];
