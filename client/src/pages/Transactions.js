import React, { useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";

const Transactions = () => {
  const { transactions } = useContext(PortfolioContext);

  return (
    <div style={{ padding: "20px" }}>
      <h1>🧾 Transactions</h1>

      {transactions.length === 0 ? (
        <p>No transactions yet</p>
      ) : (
        transactions.map((t, index) => (
          <div key={index} style={{ margin: "10px", border: "1px solid gray", padding: "10px" }}>
            <h3>{t.type}</h3>
            <p>{t.stock.name} - ₹{t.stock.price}</p>
            <small>{t.date}</small>
          </div>
        ))
      )}
    </div>
  );
};

export default Transactions;