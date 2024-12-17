"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coinChange = coinChange;
exports.coinChangeGPT = coinChangeGPT;
function coinChange(coins, amount) {
    coins.sort().reverse();
    let output = 0;
    let result = 0;
    for (let i = 0; i < coins.length; i++) {
        if (amount >= coins[i]) {
            result = Math.floor(amount / coins[i]);
            output += result;
            amount -= (coins[i] * result);
        }
    }
    if (amount == 0) {
        return output;
    }
    else {
        return -1;
    }
    ;
}
;
function coinChangeGPT(coins, amount) {
    const dp = Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    for (let coin of coins) {
        for (let x = coin; x <= amount; x++) {
            dp[x] = Math.min(dp[x], dp[x - coin] + 1);
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
}
