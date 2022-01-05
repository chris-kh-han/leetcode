var bitwiseComplement = function(n) {
    return parseInt([...n.toString(2)].map(x => x === '0' ? '1' : '0').join(''),2);
};