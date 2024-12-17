"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twoSum = twoSum;
exports.twoSum1 = twoSum1;
function twoSum(nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if ((nums[i] + nums[j]) == target) {
                return [i, j];
            }
        }
    }
    return [];
}
;
function twoSum1(nums, target) {
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
        if (arr.includes(target - nums[i])) {
            return [arr.indexOf(target - nums[i]), i];
        }
        else {
            arr.push(nums[i]);
        }
    }
    return [];
}
;
