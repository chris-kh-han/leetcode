var numberOfSteps = function(num) {
    if (num < 0) return undefined;
    let step = 0;
   
    while (num != 0) {
        if (num % 2 == 0) {
            num = num / 2
        } else {
            num = num - 1
        }
        step++;
    }
    return step;
};