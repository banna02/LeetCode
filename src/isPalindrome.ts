export function isPalindrome(x: number): boolean {
    var digits = x.toString()
    console.log(digits)
    console.log(digits.length)
    console.log(digits.length/2)
    for(let i = 0; i < digits.length/2; i++){
        if (digits[i] != digits[digits.length - i - 1]) {
          return false
        }
    }
    return true
};

export function isPalindrome_GPT(x: number): boolean {
  if (x < 0) return false;
  const str = x.toString();
  return str === str.split('').reverse().join('');
}
