import React from "react";

const Dashboard = () => {
  const cardStyle = {
    flex: "1",
    minWidth: "230px",
    background: "#fff",
    borderRadius: "15px",
    padding: "20px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    transition: "0.3s",
    border: "1px solid #eee",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f7fb",
        padding: "30px",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: "linear-gradient(135deg, #2563eb, #3b82f6)",
          color: "#fff",
          padding: "30px",
          borderRadius: "18px",
          marginBottom: "30px",
          boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
        }}
      >
        <h1 style={{ margin: 0, fontSize: "32px" }}>
          📊 Stock Trading Dashboard
        </h1>

        <p
          style={{
            marginTop: "10px",
            fontSize: "16px",
            opacity: "0.9",
          }}
        >
          Welcome back! Manage your investments and track market activity.
        </p>
      </div>

      {/* Stats */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <div style={cardStyle}>
          <div style={{ fontSize: "35px" }}>📈</div>
          <h3>Market Status</h3>
          <p
            style={{
              color: "green",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            Live Trading Active
          </p>
        </div>

        <div style={cardStyle}>
          <div style={{ fontSize: "35px" }}>💼</div>
          <h3>Your Portfolio</h3>
          <p>
            Check your investments and monitor profits from the Portfolio page.
          </p>
        </div>

        <div style={cardStyle}>
          <div style={{ fontSize: "35px" }}>💰</div>
          <h3>Investment Tip</h3>
          <p>
            Diversify your investments instead of buying only one stock.
          </p>
        </div>
      </div>

      {/* Bottom Cards */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "30px",
        }}
      >
        <div
          style={{
            flex: "2",
            background: "#fff",
            padding: "25px",
            borderRadius: "15px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
          }}
        >
          <h2>🚀 Quick Start</h2>

          <ul
            style={{
              lineHeight: "2",
              paddingLeft: "20px",
            }}
          >
            <li>Browse available stocks.</li>
            <li>Buy stocks with one click.</li>
            <li>Track holdings in Portfolio.</li>
            <li>Sell anytime based on market conditions.</li>
          </ul>
        </div>

        <div
          style={{
            flex: "1",
            background: "#fff",
            padding: "25px",
            borderRadius: "15px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <h2>📊 Today's Goal</h2>

          <div
            style={{
              fontSize: "55px",
              margin: "15px 0",
            }}
          >
            🎯
          </div>

          <p>Explore market trends before making investment decisions.</p>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          marginTop: "35px",
          background: "#1e293b",
          color: "#fff",
          padding: "18px",
          borderRadius: "12px",
          textAlign: "center",
        }}
      >
        © 2026 Stock Trading App | Invest Smart 📈
      </div>
    </div>
  );
};

export default Dashboard;