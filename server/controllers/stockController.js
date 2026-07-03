const Stock = require("../models/Stock");
const Portfolio = require("../models/Portfolio");
const Transaction = require("../models/Transaction");


// ========================
// GET ALL STOCKS
// ========================
const getStocks = async (req, res) => {
  try {
    const stocks = await Stock.find();
    res.status(200).json(stocks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// ========================
// ADD STOCK (ADMIN)
// ========================
const addStock = async (req, res) => {
  try {
    const { symbol, companyName, price, change, volume } = req.body;

    const stockExists = await Stock.findOne({ symbol });

    if (stockExists) {
      return res.status(400).json({ message: "Stock already exists" });
    }

    const stock = await Stock.create({
      symbol,
      companyName,
      price,
      change,
      volume,
    });

    res.status(201).json(stock);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// ========================
// BUY STOCK
// ========================
const buyStock = async (req, res) => {
  try {
    const { userId, stockId, quantity } = req.body;

    const stock = await Stock.findById(stockId);

    if (!stock) {
      return res.status(404).json({ message: "Stock not found" });
    }

    const totalPrice = stock.price * quantity;

    await Transaction.create({
      userId,
      stockId,
      type: "BUY",
      quantity,
      price: stock.price,
    });

    let portfolio = await Portfolio.findOne({ userId, stockId });

    if (portfolio) {
      portfolio.quantity += quantity;

      portfolio.avgPrice =
        (portfolio.avgPrice + stock.price) / 2;

      await portfolio.save();
    } else {
      portfolio = await Portfolio.create({
        userId,
        stockId,
        quantity,
        avgPrice: stock.price,
      });
    }

    res.status(200).json({
      message: "Stock Bought Successfully",
      totalPrice,
      portfolio,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// ========================
// SELL STOCK
// ========================
const sellStock = async (req, res) => {
  try {
    const { userId, stockId, quantity } = req.body;

    const stock = await Stock.findById(stockId);

    if (!stock) {
      return res.status(404).json({ message: "Stock not found" });
    }

    let portfolio = await Portfolio.findOne({ userId, stockId });

    if (!portfolio || portfolio.quantity < quantity) {
      return res.status(400).json({
        message: "Not enough stock to sell",
      });
    }

    const sellPrice = stock.price * quantity;

    portfolio.quantity -= quantity;

    if (portfolio.quantity === 0) {
      await Portfolio.deleteOne({ _id: portfolio._id });
    } else {
      await portfolio.save();
    }

    await Transaction.create({
      userId,
      stockId,
      type: "SELL",
      quantity,
      price: stock.price,
    });

    res.status(200).json({
      message: "Stock Sold Successfully",
      sellPrice,
      portfolio,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// ========================
// GET PORTFOLIO
// ========================
const getPortfolio = async (req, res) => {
  try {
    const { userId } = req.params;

    const portfolio = await Portfolio.find({ userId }).populate("stockId");

    res.status(200).json({
      message: "Portfolio fetched successfully",
      portfolio,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// ========================
// GET TRANSACTIONS
// ========================
const getTransactions = async (req, res) => {
  try {
    const { userId } = req.params;

    const transactions = await Transaction.find({ userId })
      .populate("stockId")
      .sort({ createdAt: -1 });

    res.status(200).json({
      message: "Transactions fetched successfully",
      transactions,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// ========================
// EXPORTS
// ========================
module.exports = {
  getStocks,
  addStock,
  buyStock,
  sellStock,
  getPortfolio,
  getTransactions,
};