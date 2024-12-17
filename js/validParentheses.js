"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValid = isValid;
function isValid(s) {
    const myMap = new Map();
    myMap.set("(", ")");
    myMap.set("[", "]");
    myMap.set("{", "}");
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "(" || s[i] == "[" || s[i] == "{") {
            stack.push(myMap.get(s[i]));
        }
        else {
            if (stack.length == 0) {
                return false;
            }
            if (s[i] != stack[stack.length - 1]) {
                return false;
            }
            stack.pop();
        }
    }
    return true;
}
;
