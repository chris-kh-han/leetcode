# **_Leet Code Challenge_** 👨‍💻👩‍💻

## <span style="color:red">191. Number of 1 Bits</span> 👉

- Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

#### * Example
```
1.
  Input: n = 00000000000000000000000000001011
  Output: 3
  Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.

2.
  Input: n = 00000000000000000000000010000000
  Output: 1
  Explanation: The input binary string 00000000000000000000000010000000 has a total of one '1' bit.

3.
  Input: n = 11111111111111111111111111111101
  Output: 31
  Explanation: The input binary string 11111111111111111111111111111101 has a total of thirty one '1' bits.
```


  [Link](https://leetcode.com/problems/number-of-1-bits/)

## _Solution_ 👇

```javascript
var hammingWeight = function(n) {
    let output = 0;
    
    while (n != 0) {
        output += n & 1;
        n = n >>> 1;
    }
    
    return output
};
```
