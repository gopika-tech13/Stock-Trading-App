import axios from "axios";

// change if your backend port different
const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// STOCKS
export const getStocks = () => API.get("/stocks");

// PORTFOLIO (future use)
export const getPortfolio = () => API.get("/portfolio");

// TRANSACTIONS (future use)
export const getTransactions = () => API.get("/transactions");

export default API;