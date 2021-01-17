var maxProfit = function(prices) {
    
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        let prev = prices[i-1];
        let current = prices[i];
        
        if (prev < current) {
            maxProfit += (current - prev);
        }
    }

    return maxProfit;

    

};