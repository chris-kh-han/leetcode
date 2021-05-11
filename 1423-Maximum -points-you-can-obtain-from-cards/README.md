# **_Leet Code Challenge_** 👨‍💻👩‍💻

## <span style="color:red">204-Count Prime</span> 👉

- Count the number of prime numbers less than a non-negative number, n.

- Find the sum of all the multiples of 3 or 5 below 1000.

  [Link](https://leetcode.com/problems/count-primes/)

## _Solution_ 👇

```javascript
var maxScore = function (cardPoints, k) {
  let endIndex = cardPoints.length - 1;
  let sumFromLeft = [0];
  let sumFromRight = [0];
  let max = 0;

  for (let i = 0; i < k; i++) {
    sumFromLeft.push(sumFromLeft[i] + cardPoints[i]);
  }

  for (let i = 0; i < k; i++) {
    sumFromRight.push(sumFromRight[i] + cardPoints[endIndex - i]);
  }

  len = sumFromLeft.length;

  for (let i = 0, j = len - 1; i <= k; i++, j--) {
    max = Math.max(max, sumFromLeft[i] + sumFromRight[j]);
  }

  return max;
};
```
