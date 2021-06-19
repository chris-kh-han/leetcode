var subtractProductAndSum = function(n) {
    let strs = n.toString();
    let sum = 0;
    let mul = 1;
    
    for (let str of strs) {
        mul *= str;
        sum += +str;
    }
    
    return mul - sum;
};