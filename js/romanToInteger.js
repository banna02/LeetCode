"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.romanToInt = romanToInt;
function romanToInt(s) {
    const myMap = new Map();
    myMap.set("I", 1);
    myMap.set("V", 5);
    myMap.set("X", 10);
    myMap.set("L", 50);
    myMap.set("C", 100);
    myMap.set("D", 500);
    myMap.set("M", 1000);
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        if (myMap.get(s[i]) < myMap.get(s[i + 1]) && i != s.length - 1) {
            result += myMap.get(s[i + 1]) - myMap.get(s[i]);
            i++;
        }
        else {
            result += myMap.get(s[i]);
        }
    }
    return result;
}
;
