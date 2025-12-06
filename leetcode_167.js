//167. Two Sum II - Input Array Is Sorted

var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    while(left < right)
    {
        let numLeft = numbers[left];
        let numRight = numbers[right];
        let sum = numLeft + numRight;
        if(sum === target)
        {
            return [left+1,right+1];
        }else if(sum < target){
            left++;
        }else{
            right--;
        }
    }
};

console.log(twoSum([2,7,11,15],9));