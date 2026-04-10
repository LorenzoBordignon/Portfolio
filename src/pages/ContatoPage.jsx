import { Page } from "../shared/components/Page/Page";
import { PageSectionGroup } from "../shared/components/Page/PageSectionGroup";

export function ContatoPage() {
  return (
    <Page
      eyebrow="Contato"
      title="Uma página simples para facilitar conexões"
      description="Esta é a versão histórica da página de contato, mantida como referência da estrutura anterior."
    >
      <PageSectionGroup title="Canais principais">
        <div className="page-route-grid">
          <div className="page-route-card">
            <strong>E-mail profissional</strong>
            <p>
              Coloque aqui o endereço principal para propostas, networking e
              contato direto.
            </p>
          </div>
          <div className="page-route-card">
            <strong>LinkedIn</strong>
            <p>
              Um bom lugar para direcionar recrutadores, colegas de área e novas
              conexões profissionais.
            </p>
          </div>
          <div className="page-route-card">
            <strong>GitHub</strong>
            <p>
              Ideal para quem quiser explorar código, projetos públicos e sua
              evolução técnica.
            </p>
          </div>
        </div>
      </PageSectionGroup>

      <PageSectionGroup title="Tom da página">
        <div className="page-copy-block">
          <p>
            Vale manter esta rota objetiva: poucas informações, links claros e
            uma mensagem curta convidando para conversar.
          </p>
          <p>
            Se quiser, depois podemos transformar esta página em uma seção com
            formulário, redes sociais e call to action mais forte.
          </p>
        </div>
      </PageSectionGroup>
    </Page>
  );
}
