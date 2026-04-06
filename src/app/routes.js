export const appRoutes = {
  home: "/",
  sobre: "/sobre",
  useState: "/hooks/use-state",
  useEffect: "/hooks/use-effect",
  useContext: "/hooks/use-context",
};

export const navigationGroups = [
  {
    title: "Início",
    links: [
      {
        to: appRoutes.home,
        label: "Visão Geral",
        description: "Resumo do portfólio e acesso rápido às trilhas.",
      },
      {
        to: appRoutes.sobre,
        label: "Sobre",
        description: "Biografia e formações.",
      },
    ],
  },
  {
    title: "React Hooks",
    links: [
      {
        to: appRoutes.useState,
        label: "UseState",
        description: "Exemplos de estado local e interações simples.",
      },
      {
        to: appRoutes.useEffect,
        label: "UseEffect",
        description: "Efeitos colaterais, relógio e persistência.",
      },
      {
        to: appRoutes.useContext,
        label: "UseContext",
        description: "Compartilhamento de dados com contexto.",
      },
    ],
  },
];
