var smallerNumbersThanCurrent = function (nums) {
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        count = 0;

        for (let j = 0; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                count++;
            }
        }

        result.push(count);
    }

    console.log(result);
};

smallerNumbersThanCurrent([8, 1, 2, 2, 3]);
