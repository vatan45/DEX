"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
let ETH_BALANCE = 200;
let USDC_BALANCE = 700000;
// app.post("/add-liquidity", (req, res) => {
// })
app.post("/buy-asset", (req, res) => {
    const product = ETH_BALANCE * USDC_BALANCE;
    const quantity = req.body.quantity;
    const updateEthQantity = ETH_BALANCE - quantity;
    const updateUsdcbalance = (ETH_BALANCE * USDC_BALANCE) / updateEthQantity;
    const paidamount = updateUsdcbalance - USDC_BALANCE;
    ETH_BALANCE = updateEthQantity;
    USDC_BALANCE = updateUsdcbalance;
    res.json({
        message: `you paid ${paidamount}USDC  for ${quantity} ETH`
    });
});
app.post("/sell-asset", (req, res) => {
    const quantity = req.body.quantity;
    const updateEthQantity = ETH_BALANCE + quantity;
    const updateUsdcbalance = (ETH_BALANCE * USDC_BALANCE) / updateEthQantity;
    const gottenusdc = USDC_BALANCE - updateUsdcbalance;
    ETH_BALANCE = updateEthQantity;
    USDC_BALANCE = updateUsdcbalance;
    res.json({
        message: `you got  ${gottenusdc} USDC  for ${quantity}ETH `
    });
});
app.listen(3000);
