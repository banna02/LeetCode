export function coinChange(coins: number[], amount: number): number {

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
    } else {

        return -1;
    };

};