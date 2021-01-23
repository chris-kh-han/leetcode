var climbStairs = function(n, prev= []) {
    if (climbStairs[n]) {
        return climbStairs[n]
    }

    if (n <= 2) {
        return n
    }
    let result;
    
    result = climbStairs(n-1) + climbStairs(n-2)
    climbStairs[n] = result

    return result
};
