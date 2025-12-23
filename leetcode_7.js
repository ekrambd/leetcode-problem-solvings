//7. Reverse Integer

var reverse = function(x) {
    let status = true;
    if (x < 0) {
        x = Math.abs(x);
        status = false;
    }

    let arr = String(x).split("");
    let left = 0, right = arr.length - 1;

    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }

    let result = Number(arr.join(""));
    if (!status) result *= -1;

    // 🚨 overflow check
    if (result < -(2 ** 31) || result > (2 ** 31 - 1)) {
        return 0;
    }

    return result;
};

console.log(reverse(123));
console.log(reverse(120));
console.log(reverse(-123));
console.log(reverse(1534236469)); 