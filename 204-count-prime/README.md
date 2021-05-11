# **_Leet Code Challenge_** 👨‍💻👩‍💻

## <span style="color:red">204-Count Prime</span> 👉 

* Count the number of prime numbers less than a non-negative number, n.

* Find the sum of all the multiples of 3 or 5 below 1000.

    [Link](https://leetcode.com/problems/count-primes/)

## _Solution_ 👇 

```javascript
var countPrimes = function(n) {
    let count = 0;
    let arr = [];
    for (let i = 2; i < n; i++) {
        if (arr[i]) {
            
            continue;
        }
        
        count++
        for (let j = i + i; j <= n; j += i) {
            
            arr[j] = true;
        }
    }

    return count
};

```