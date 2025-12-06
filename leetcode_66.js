//66. Plus One

var plusOne = function(digits) {
    let str = digits.join('');
    let num = BigInt(str);
    let sum = num + 1n;
    let strNum = String(sum);
    let result = strNum.split('').map(d=>Number(d));
    return result;
};

console.log(plusOne([1,2,3]));
console.log(plusOne([4,3,2,1]));