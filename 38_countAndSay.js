var countAndSay = function(n) {
    
    if (n < 1 || n > 30) return null;
    
    let str = "1";
    for (let i = 1; i < n; i++) {
        let arr = str.split("");
        console.log(str);
        console.log(arr);
        str = ""
        let count = 1;
        console.log(arr);
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] !== arr[j+1]) {
                str += count + arr[j];
                console.log(str);
            } else {
                count++;
            }
        }
    }

    return str
    
    
};