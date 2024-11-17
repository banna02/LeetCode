export function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if ((nums[i] + nums[j]) == target) {
                return [i, j]
            }
        }
    }
    return [];
};

export function twoSum1(nums: number[], target: number): number[] {

    let arr: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        if (arr.includes(target - nums[i])) {
            return [arr.indexOf(target - nums[i]), i]
        } else {
            arr.push(nums[i])
        }
    }
    return [];
};