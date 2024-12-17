"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.majorityElement = majorityElement;
function majorityElement(nums) {
    nums.sort();
    return nums[Math.floor(nums.length / 2)];
}
;
