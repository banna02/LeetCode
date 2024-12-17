"use strict";
//use npm start
Object.defineProperty(exports, "__esModule", { value: true });
const coinChange_1 = require("./coinChange");
//var x  = isPalindrome(121)
//var y = isPalindrome_GPT(121)
//var x  = romanToInt("MCMXCIV");
//var x = longestCommonPrefix1(["car","racecar","cat","dog","earth"]);
//var x = twoSum1([3,2,4], 6);
//var x = isValid("])");
/*import { ListNode } from './mergeTwoLists';

function arrayToList(arr: number[]): ListNode | null {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}*/
//var x = mergeTwoLists(arrayToList([1,2,4]), arrayToList([1,3,4]));
//var x = maxProfit_GPT([7,1,5,3,6,4]);
//var x = isAnagram("anagram", "nagaram");
//var x = floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2);
//var x = floodFill([[0,0,0],[0,0,0]], 0, 0,0);
//var x = canConstruct("aa", "aab");
//var x = containsDuplicate([1,2,3,4]);
//var x = search([-1,0,3,5,9,12], 9);
//var x = majorityElement([1,2,3,4, 4,5]);
//var x = maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);
var x = (0, coinChange_1.coinChange)([1, 2, 5], 11);
console.log(x);
