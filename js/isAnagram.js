"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAnagram = isAnagram;
function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const count = {};
    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }
    for (let char of t) {
        if (!count[char]) {
            return false;
        }
        count[char] -= 1;
    }
    return true;
}
