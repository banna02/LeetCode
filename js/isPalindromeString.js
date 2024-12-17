"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPalindromeString = isPalindromeString;
function isPalindromeString(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    for (let i = 0; i < s.length / 2; i++) {
        if (s[i] != s[s.length - i - 1]) {
            return false;
        }
    }
    return true;
}
;
