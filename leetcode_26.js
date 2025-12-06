//26. Remove Duplicates from Sorted Array

var removeDuplicates = function(nums) {
    let arr = Array.from(new Set(nums));
    for(let i = 0; i < arr.length; i++)
    {
        nums[i] = arr[i];
    }
    return nums.length
};
//console.log(removeDuplicates([1,1,2]));
let arr = [1,1,2];
let len = removeDuplicates(arr);
let result = arr.slice(0,len);
return result;