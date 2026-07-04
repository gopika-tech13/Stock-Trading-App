import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import Stocks from "./pages/Stocks";
import Portfolio from "./pages/Portfolio";
import Transactions from "./pages/Transactions";

import "./App.css";
import { PortfolioProvider } from "./context/PortfolioContext";

function App() {
  return (
    <PortfolioProvider>
      <BrowserRouter>
        <div className="App">

          <NavBar />

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/stocks" element={<Stocks />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/transactions" element={<Transactions />} />
          </Routes>

        </div>
      </BrowserRouter>
    </PortfolioProvider>
  );
}

export default App;