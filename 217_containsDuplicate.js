var containsDuplicate = function(nums) {
    let map = new Map()
    
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            console.log(map)
            return true
        }
        map.set(nums[i], i)
    }
    
    
    return false
};