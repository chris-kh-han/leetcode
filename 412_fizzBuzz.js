var fizzBuzz = function(n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        switch (true) {
            case i % 15 === 0:
                result.push("FizzBuzz");
                break;
            case i % 3 ===0:
                result.push("Fizz");
                break;
            case i % 5  === 0:
                result.push("Buzz");
                break;
            default:
                result.push(i)
        } 
    }

    return result;
};