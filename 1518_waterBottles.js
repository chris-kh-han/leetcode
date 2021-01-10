var numWaterBottles = function(numBottles, numExchange) {
    let total = numBottles;
    let unExchanged = 0;
    while (numBottles > 0) {
        let exchanged = Math.floor(numBottles / numExchange);
        if (!exchanged) break;
        unExchanged = numBottles / numExchange;
        total += exchanged
        numBottles = unExchanged + exchanged;
    }
    return total
};
