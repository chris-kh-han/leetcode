# **_Leet Code Challenge_** 👨‍💻👩‍💻

## <span style="color:red">204-Count Prime</span> 👉

- Count the number of prime numbers less than a non-negative number, n.

- Find the sum of all the multiples of 3 or 5 below 1000.

1. Example
```
1.
  Input: cardPoints = [1,2,3,4,5,6,1], k = 3
  Output: 12
  Explanation: After the first step, your score will always be 1. However, choosing the rightmost card first will maximize your total score. The optimal strategy is to take the three cards on the right, giving a final score of 1 + 6 + 5 = 12.

2.
  Input: cardPoints = [2,2,2], k = 2
  Output: 4
  Explanation: Regardless of which two cards you take, your score will always be 4.

3.
  Input: cardPoints = [9,7,7,9,7,7,9], k = 7
  Output: 55
  Explanation: You have to take all the cards. Your score is the sum of points of all cards.

4. 
  Input: cardPoints = [1,1000,1], k = 1
  Output: 1
  Explanation: You cannot take the card in the middle. Your best score is 1.

5. 
  Input: cardPoints = [1,79,80,1,1,1,200,1], k = 3
  Output: 202
```


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
