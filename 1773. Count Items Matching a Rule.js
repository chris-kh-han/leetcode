var countMatches = function(items, ruleKey, ruleValue) {
    let indexObj = {
        type: 0,
        color: 1,
        name: 2, 
    };

    let index = indexObj[ruleKey];

    return items.reduce( (acc, curr) => {
        if (curr[index] === ruleValue) {
            acc++;
        } else {
            acc;
        }

        return acc;
    }
    , 0);
};