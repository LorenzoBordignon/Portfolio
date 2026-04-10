import { Page } from "../shared/components/Page/Page";
import { PageSectionGroup } from "../shared/components/Page/PageSectionGroup";

export function SobrePage() {
  return (
    <Page
      eyebrow="Sobre"
      title="Uma estrutura simples para contar sua trajetória"
      description="Esta página agora funciona como ponto de partida para o resumo profissional, experiência e tecnologias principais."
    >
      <PageSectionGroup title="Resumo profissional">
        <div className="page-copy-block">
          <p>
            Use este espaço para se apresentar em poucas linhas: quem você é,
            com o que trabalha hoje e o tipo de problema que gosta de resolver.
          </p>
          <p>
            Um bom texto aqui costuma combinar contexto profissional, momento de
            carreira e a direção que você quer seguir nos próximos projetos.
          </p>
        </div>
      </PageSectionGroup>

      <PageSectionGroup title="Blocos que valem preencher">
        <div className="page-route-grid">
          <div className="page-route-card">
            <strong>Trajetória</strong>
            <p>
              Formação, transições de carreira e experiências que marcaram sua
              evolução.
            </p>
          </div>
          <div className="page-route-card">
            <strong>Especialidades</strong>
            <p>
              Tecnologias, tipos de produto, boas práticas e áreas em que você
              já entrega com mais segurança.
            </p>
          </div>
          <div className="page-route-card">
            <strong>Diferenciais</strong>
            <p>
              Forma de trabalho, comunicação, colaboração e pontos fortes que
              vale destacar.
            </p>
          </div>
        </div>
      </PageSectionGroup>
    </Page>
  );
}
