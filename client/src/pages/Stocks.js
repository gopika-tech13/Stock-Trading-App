import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { PortfolioContext } from "../context/PortfolioContext";

const Stocks = () => {
  const { buyStock } = useContext(PortfolioContext);
  const [stocks, setStocks] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/stocks");
        setStocks(res.data);
      } catch (error) {
        console.log("API Error:", error);
      }
    };

    fetchStocks();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>📈 Live Stocks (MongoDB Data)</h1>

      {/* ✅ Success Message */}
      {message && (
        <div
          style={{
            backgroundColor: "#d4edda",
            color: "#155724",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "5px",
            fontWeight: "bold",
          }}
        >
          {message}
        </div>
      )}

      {stocks.length === 0 ? (
        <p>Loading stocks...</p>
      ) : (
        stocks.map((stock) => (
          <div
            key={stock._id}
            style={{
              border: "1px solid gray",
              padding: "15px",
              margin: "10px",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <h3>
                {stock.companyName} ({stock.symbol})
              </h3>
              <p>₹ {stock.price}</p>
              <p style={{ color: "green" }}>Change: {stock.change}</p>
            </div>

            <button
              onClick={() => {
                buyStock(stock);
                setMessage(
                  `✅ ${stock.companyName} bought successfully!`
                );
                setTimeout(() => setMessage(""), 2000);
              }}
              style={{
                padding: "8px 12px",
                backgroundColor: "green",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Buy
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Stocks;