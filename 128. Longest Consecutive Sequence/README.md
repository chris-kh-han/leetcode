# **_Leet Code Challenge_** 👨‍💻👩‍💻

## <span style="color:red">128. Longest Consecutive Sequence</span> 👉

- Given an unsorted array of integers nums, return the length of the longest  consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

1. Example
```
1.
  Input: nums = [100,4,200,1,3,2]
  Output: 4
  Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

2.
  Input: nums = [0,3,7,2,5,8,4,6,0,1]
  Output: 9
```


  [Link](https://leetcode.com/problems/longest-consecutive-sequence/)

## _Solution_ 👇

```javascript
var longestConsecutive = function(nums) {
     if (nums.length == 0) return 0
    
    const set = new Set(nums)
    
    let max = 0;
    
    for (let num of set) {
      if (set.has(num-1)) {
          continue;
      }

      let start = num;
      let currentMax = 1;

      while(set.has(start+1)) {
          currentMax++;
          start++
      }

      max = Math.max(max,currentMax);

    }

};
```
