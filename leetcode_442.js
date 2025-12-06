//442. Find All Duplicates in an Array

var findDuplicates = function(nums) {
    let map = new Map();
    let result = [];
    for(let i = 0; i < nums.length; i++)
    {
        if(map.has(nums[i])){
            result.push(nums[i]);
        }
        map.set(nums[i]);
    }
    return result;
};

console.log(findDuplicates([4,3,2,7,8,2,3,1]));