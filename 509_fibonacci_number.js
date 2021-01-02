let fib = function (n, prevValue=[]) {
    if (prevValue[n]) {
        return prevValue[n]
    }

    if (n <= 1) {
        return n
    }

    let result;

    for (let i = 2; i <= n; i++) {
        result = fib(n-1) + fib(n-2); 
    }

    prevValue[n] = result;

    return result;
}