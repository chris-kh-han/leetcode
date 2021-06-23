var maximumWealth = function(accounts) {
    let maximum = 0;
    
    for (let i = 0; i < accounts.length; i++) {
        let wealth = accounts[i].reduce((total,num) => total+num, 0);
        if (wealth > maximum) {
            maximum = wealth;
        }
    }
    
    return maximum;
};