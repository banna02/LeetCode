export function longestCommonPrefix(strs: string[]): string {
    let strLength = 201;
    let shortStr = "";
    strs.sort();
    for (let i = 0; i < strs.length; i++) {
        if (strs[i].length < strLength) {
            shortStr = strs[i];
        }
    }

    for (let i = 0; i < shortStr.length; i++) {
        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i] != shortStr[i]) {
                return shortStr.slice(0, i)
            }
        }
    }
    return shortStr;
};

export function longestCommonPrefix1(strs: string[]): string {
    let strLength = 201;
    let shortStr = "";
    strs.sort();
    let s1 = strs[0];
    let s2 = strs[strs.length - 1];
    let i = 0;
    while (i < s1.length && i < s2.length && s1.charAt(i) == s2.charAt(i)) {
        i++;
    }
    return s1.substring(0, i);
};