var myAtoi = function(s) {
    
    if(!s.length) {
        console.log(0);
    }

    
    let str = s.trimStart();
 
    if (!/[\d+-]/g.test(str[0])) return 0;
    const a = str.match(/[+-]?\d*/)
    const number = Number(str.match(/[+-]?\d*/));

    if(isNaN(number)) return 0


    if (number <= Math.pow(-2,31)) return -Math.pow(2,31);
    if (number >= (Math.pow(2,31) - 1) ) return Math.pow(2,31) - 1;

    return number




};

