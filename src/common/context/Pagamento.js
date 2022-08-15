import { useContext } from "react";
import { createContext, useState } from "react";

export const PagamentoContext = createContext();
PagamentoContext.displayName = "Pagamento";

export const PagamentoProvider = ({ children }) => {
  const tiposDePagamento = [
    {
      id: 1,
      nome: "Boleto",
      juros: 1,
    },
    {
      id: 2,
      nome: "Cartão de Crédito",
      juros: 1.3,
    },
    {
      id: 3,
      nome: "PIX",
      juros: 1,
    },
    {
      id: 4,
      nome: "Crediario",
      juros: 1.5,
    },
  ];

  const [formaDePagamento, setFormaDePagamento] = useState(tiposDePagamento[0]);
  return (
    <PagamentoContext.Provider
      value={{
        tiposDePagamento,
        formaDePagamento,
        setFormaDePagamento,
      }}
    >
      {children}
    </PagamentoContext.Provider>
  );
};

export const usePagamentoContext = () => {
  const { tiposDePagamento, formaDePagamento, setFormaDePagamento } =
    useContext(PagamentoContext);

  function mudarFormaPagamento(id) {
    const pagamentoAtual = tiposDePagamento.find(
      (pagamento) => pagamento.id === id
    );
    setFormaDePagamento(pagamentoAtual);
  }
  return { tiposDePagamento, formaDePagamento, mudarFormaPagamento };
};
