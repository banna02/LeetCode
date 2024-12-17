"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPalindrome = isPalindrome;
exports.isPalindrome_GPT = isPalindrome_GPT;
function isPalindrome(x) {
    var digits = x.toString();
    console.log(digits);
    console.log(digits.length);
    console.log(digits.length / 2);
    for (let i = 0; i < digits.length / 2; i++) {
        if (digits[i] != digits[digits.length - i - 1]) {
            return false;
        }
    }
    return true;
}
;
function isPalindrome_GPT(x) {
    if (x < 0)
        return false;
    const str = x.toString();
    return str === str.split('').reverse().join('');
}
