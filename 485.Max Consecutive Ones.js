var findMaxConsecutiveOnes = function(nums) {
 
    splitBy0 = nums.join('').split(0);

    lenOfEachElement = splitBy0.map(arr => arr.length)

    let max = 0;

    for (let i = 0; i < lenOfEachElement.length; i++) {
        if (lenOfEachElement[i] > max) {
            max = lenOfEachElement[i]
        }

    
    }

    return max
};