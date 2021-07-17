var getConcatenation = function(nums) {
    let newArr = [...nums];
    for (let i = 0; i < nums.length; i++) {
        newArr.push(nums[i]);
    }
    
    return newArr;
};