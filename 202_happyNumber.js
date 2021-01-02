function isHappy(n) {
    const set = new Set();

    while (n != 1) {
        let currentSum = 0;
        while (n > 0) {
            currentSum += (n%10) ** 2;
            n = Math.floor(n/10);
        }

        if (!set.has(currentSum)) {
            set.add(currentSum);
            n = currentSum;
        } else {
            return false
        }
    }

    return true;
}
