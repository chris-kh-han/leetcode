var findErrorNums = function(nums) {
    
    if (nums.length < 2 || nums.length > Math.pow(10,4)) return undefined;
    
    let length = nums.length;
    let total = (length*(length + 1))/2;
    console.log(total);

    let set = new Set()
    let sum = 0;
    for (let i = 0; i< nums.length; i++) {
        if (!set.has(nums[i])) {
            set.add(nums[i])
            sum += nums[i]
        } else {
            duplicate = nums[i];
            
            console.log(duplicate);
        }
    }

    console.log(sum)

    return [duplicate, total-sum];
    
};

