var removeDuplicates = function(nums) {
    if (nums.length == 0) return 0;
    
    let first = 0
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] != nums[first]) {
            nums[++first] = nums[i]
            
        } 
    }
    
    return ++first;
    
};