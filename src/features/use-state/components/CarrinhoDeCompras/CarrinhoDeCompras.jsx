import { useState } from "react"; //UseState
import "./CarrinhoDeCompras.css";

export function CarrinhoDeCompras() {
  const produtos = [
    {
      codItem: "1",
      descricaoItem: "Batata",
      precoItem: 8,
    },
    {
      codItem: "2",
      descricaoItem: "Água",
      precoItem: 5,
    },
    {
      codItem: "3",
      descricaoItem: "Coca",
      precoItem: 7,
    },
  ];
  const [carrinho, setCarrinho] = useState([]);
  function adicionarItem(produto) {
    if (carrinho.some((item) => item.codItem == produto.codItem)) return;
    setCarrinho(carrinho.concat(produto));
  }
  function removerItem(itemCarrinho) {
    setCarrinho(
      carrinho.filter((item) => item.codItem != itemCarrinho.codItem),
    );
  }
  return (
    <div className="carrinho-compras">
      <h3>Carrinho de Compras</h3>
      <div className="carrinho-compras__container">
        <div className="carrinho-compras__produtos">
          <h4>Produtos Disponíveis</h4>
          <ul className="carrinho-compras__produtos-list">
            {produtos.map((produto) => (
              <li key={produto.codItem}>
                <div className="carrinho-compras__list-descricao">
                  <span>{produto.descricaoItem}</span>
                  <span> R$: {produto.precoItem}</span>
                </div>
                <button
                  className="btn btn-primary"
                  onClick={() => adicionarItem(produto)}
                >
                  +
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="carrinho-compras__carrinho">
          <h4>Carrinho</h4>
          {carrinho.length === 0 ? (
            <p className="carrinho-compras__carrinho-vazio">Carrinho Vazio</p>
          ) : (
            <ul className="carrinho-compras__carrinho-list">
              {carrinho.map((itemCarrinho) => (
                <li key={itemCarrinho.codItem}>
                  <div className="carrinho-compras__list-descricao">
                    <span>{itemCarrinho.descricaoItem}</span>
                    <span> R$: {itemCarrinho.precoItem}</span>
                  </div>
                  <button
                    className="btn btn-primary"
                    onClick={() => removerItem(itemCarrinho)}
                  >
                    -
                  </button>
                </li>
              ))}
            </ul>
          )}
          <div className="carrinho-compras__carrinho-total">
            Valor Total: R${" "}
            {carrinho.reduce((valorTotal, itemCarrinho) => {
              return valorTotal + itemCarrinho.precoItem;
            }, 0)}
          </div>
        </div>
      </div>
    </div>
  );
}
