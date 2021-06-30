var kidsWithCandies = function(candies, extraCandies) {
    
    let max = Math.max(...candies);
    let filterArr = candies.map(candy => {
        if ( (candy + extraCandies) >= max) {
            return true;
        }
        return false;
    })
    return filterArr
   
};