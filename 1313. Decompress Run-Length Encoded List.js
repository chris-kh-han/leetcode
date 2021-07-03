var decompressRLElist = function(nums) {
    
    if (nums.length % 2 == 1) return null;
    
    let result = [];

    for (let i = 0; i < nums.length; i = i + 2) {

        result.push(...new Array(nums[i]).fill(nums[i+1]));
    }

    return result;
};