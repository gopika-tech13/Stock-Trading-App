const express = require("express");
const router = express.Router();

const {
  getStocks,
  addStock,
  buyStock,
  sellStock,
  getPortfolio,
  getTransactions,
} = require("../controllers/stockController");


// =======================
// STOCK ROUTES
// =======================
router.get("/", getStocks);
router.post("/", addStock);


// =======================
// TRADING ROUTES
// =======================
router.post("/buy", buyStock);
router.post("/sell", sellStock);


// =======================
// DASHBOARD ROUTES
// =======================
router.get("/portfolio/:userId", getPortfolio);
router.get("/transactions/:userId", getTransactions);


module.exports = router;