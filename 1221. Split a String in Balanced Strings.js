var balancedStringSplit = function(s) {
    let total = 0
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == 'R') {
            count++;
        } else {
            count--;
        }
        
        if (count == 0) {
            total++;
        }
    }
    
    return total;
};