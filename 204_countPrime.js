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