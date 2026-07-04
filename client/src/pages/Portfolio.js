import React, { useContext, useState } from "react";
import { PortfolioContext } from "../context/PortfolioContext";

const Portfolio = () => {
  const { portfolio, sellStock } = useContext(PortfolioContext);
  const [logs, setLogs] = useState([]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>🧾 Portfolio</h1>

      {/* ✅ Activity Log (Permanent, no confusion) */}
      {logs.length > 0 && (
        <div
          style={{
            backgroundColor: "#f4f4f4",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "8px",
          }}
        >
          <h3>📊 Activity Log</h3>

          {logs.map((log, index) => (
            <p key={index} style={{ margin: "5px 0" }}>
              {log}
            </p>
          ))}
        </div>
      )}

      {portfolio.length === 0 ? (
        <p>No stocks bought yet</p>
      ) : (
        portfolio.map((stock) => (
          <div
            key={stock.id}
            style={{
              border: "1px solid gray",
              padding: "10px",
              margin: "10px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h3>{stock.name}</h3>
              <p>₹ {stock.price}</p>
            </div>

            <button
              onClick={() => {
                sellStock(stock.id);

                setLogs((prev) => [
                  `❌ Sold ${stock.name} at ₹${stock.price}`,
                  ...prev,
                ]);
              }}
              style={{
                background: "red",
                color: "white",
                padding: "6px 10px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Sell
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Portfolio;