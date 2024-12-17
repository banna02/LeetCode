"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maxSubArray = maxSubArray;
function maxSubArray(nums) {
    let currentSum = 0;
    let maxSum = nums[0];
    for (let num of nums) {
        currentSum += num;
        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
        if (currentSum < 0) {
            currentSum = 0;
        }
    }
    return maxSum;
}
