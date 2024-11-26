export function canConstruct(ransomNote: string, magazine: string): boolean {

    const count: { [key: string]: number } = {};


    for (let char of magazine) {
        // count[char] = (count[char] || 0) + 1;

        /*if (count[char]) {
            count[char] += 1;
        } else {
            count[char] = 1;
        }*/
    }
    for (let char of ransomNote) {
        if (!count[char]) {
            return false;
        }
        count[char] -= 1;
    }

    return true;
};