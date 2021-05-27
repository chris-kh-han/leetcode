# **_Leet Code Challenge_** 👨‍💻👩‍💻

## <span style="color:red">461. Hamming Distance</span> 👉

- The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers *x* and *y*, return the **_Hamming distance_** between them.

#### * Example
```
1.
  Input: x = 1, y = 4
  Output: 2
  Explanation:
  1   (0 0 0 1)
  4   (0 1 0 0)
        ↑   ↑
  The above arrows point to positions where the corresponding bits are different.

2.
  Input: x = 3, y = 1
  Output: 1
```


  [Link](https://leetcode.com/problems/hamming-distance/)

## _Solution_ 👇

```javascript
var hammingWeight = function(n) {
    let value = x^y;
    let count = 0;
    
    while (value != 0) {
        if (value & 1) {
            count++
        }
        
        value = value >> 1
    }
    
    return count
};
```
