var reverse = function(x) {
    
    let reverse = parseInt(String(x).split("").reverse().join(""));

    if (reverse >= -(2**31) && reverse >= 2**31) return 0 

    return reverse
    
};

console.log(reverse(-123));