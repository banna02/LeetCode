"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.containsDuplicate = containsDuplicate;
function containsDuplicate(nums) {
    nums.sort();
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            return true;
        }
    }
    return false;
}
;
function containsDuplicateGPT(nums) {
    const seen = new Set(); // Initialize a new Set
    for (let num of nums) { // Loop through each number in the array
        if (seen.has(num)) { // Check if the number is already in the Set
            return true; // If it is, we found a duplicate
        }
        seen.add(num); // Otherwise, add the number to the Set
    }
    return false; // If no duplicates were found, return false
}
