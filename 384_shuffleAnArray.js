var Solution = function(nums) {
    // hold nums in Solution
    this.nums = nums;
};

Solution.prototype.reset = function() {
    return this.nums;
};

Solution.prototype.shuffle = function() {
    let set = new Set()
    let length = this.nums.length
    let arr;

    while (set.size < length) {
        set.add(this.nums[Math.floor(Math.random() * length)])
    }
    arr = Array.from(set)
    
    return arr
};