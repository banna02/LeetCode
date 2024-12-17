"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = search;
function search(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    while (start >= 0 && end < nums.length && start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[mid] > target) {
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }
    return -1;
}
;
