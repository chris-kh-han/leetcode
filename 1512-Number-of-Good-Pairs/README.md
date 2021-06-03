# **_Leet Code Challenge_** 👨‍💻👩‍💻

## <span style="color:red">1512. Number of Good Pairs</span> 👉

- Given an array of integers nums.

  A pair (i,j) is called good if nums[i] == nums[j] and i < j.

  Return the number of good pairs.

#### Example 1.
```
Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
```

### Constraints
* 1 <= nums.length <= 100
* 1 <= nums[i] <= 100

[Link](https://leetcode.com/problems/number-of-good-pairs/)

## _Solution_ 👇

```javascript
var numIdenticalPairs = function(nums) {
    let good_pairs = 0;
   
    for (let i = 0; i < nums.length; i++) {
        
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i] == nums[j]) {
                good_pairs++;
            }
        }

    
    }
    
    return good_pairs;
};




```
