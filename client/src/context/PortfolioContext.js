import React, { createContext, useState } from "react";

export const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [portfolio, setPortfolio] = useState([]);
  const [transactions, setTransactions] = useState([]);

  // BUY FUNCTION
  const buyStock = (stock) => {
    setPortfolio([...portfolio, stock]);

    setTransactions([
      ...transactions,
      { type: "BUY", stock, date: new Date().toLocaleString() }
    ]);
  };

  // SELL FUNCTION (NEW)
  const sellStock = (stockId) => {
    const stockToSell = portfolio.find((s) => s.id === stockId);

    if (!stockToSell) return;

    setPortfolio(portfolio.filter((s) => s.id !== stockId));

    setTransactions([
      ...transactions,
      { type: "SELL", stock: stockToSell, date: new Date().toLocaleString() }
    ]);
  };

  return (
    <PortfolioContext.Provider
      value={{ portfolio, transactions, buyStock, sellStock }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};