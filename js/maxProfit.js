"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maxProfit = maxProfit;
exports.maxProfit_GPT = maxProfit_GPT;
function maxProfit(prices) {
    let profit = 0;
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[j] - prices[i] > 0) {
                profit = prices[j] - prices[i];
            }
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }
    return maxProfit;
}
;
function maxProfit_GPT(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        }
        else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }
    return maxProfit;
}
