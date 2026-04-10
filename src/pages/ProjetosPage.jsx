import { Page } from "../shared/components/Page/Page";
import { PageSectionGroup } from "../shared/components/Page/PageSectionGroup";

export function ProjetosPage() {
  return (
    <Page
      eyebrow="Projetos"
      title="O espaço para transformar experiência em cases"
      description="Aqui entram os projetos mais relevantes, com contexto, decisão técnica e impacto visível."
    >
      <PageSectionGroup title="Sugestão de estrutura">
        <div className="page-route-grid">
          <div className="page-route-card">
            <strong>Projeto em destaque</strong>
            <p>
              Reserve o topo para o case que melhor representa seu nível atual,
              com objetivo, stack, processo e resultado.
            </p>
          </div>
          <div className="page-route-card">
            <strong>Projetos selecionados</strong>
            <p>
              Organize os demais trabalhos em cards mais curtos, com links para
              demo, código ou imagens.
            </p>
          </div>
          <div className="page-route-card">
            <strong>Aprendizados</strong>
            <p>
              Mostre decisões importantes, desafios enfrentados e o que cada
              projeto te ajudou a consolidar.
            </p>
          </div>
        </div>
      </PageSectionGroup>

      <PageSectionGroup title="O que vale destacar em cada case">
        <div className="page-copy-block">
          <p>
            Em vez de listar só tecnologia, vale contar o problema, a solução
            proposta, o seu papel e o impacto da entrega.
          </p>
          <p>
            Mesmo em projetos de estudo, essa estrutura ajuda a demonstrar
            maturidade e raciocínio técnico.
          </p>
        </div>
      </PageSectionGroup>
    </Page>
  );
}
