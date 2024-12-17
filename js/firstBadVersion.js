"use strict";
var solution = function (isBadVersion) {
    return function (n) {
        let left = 1;
        let right = n;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (isBadVersion(mid)) {
                // If mid is a bad version, the first bad version must be at mid or before.
                right = mid;
            }
            else {
                // If mid is not a bad version, the first bad version must be after mid.
                left = mid + 1;
            }
        }
        // At the end of the loop, left should be the first bad version.
        return left;
    };
};
