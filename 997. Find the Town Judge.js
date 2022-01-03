var findJudge = function(n, trust) {
    if (n ===1) return 1
    if (trust.length ===1) return trust[0][1]

    const trustArr = new Array(n+1).fill(0)

    for (let i = 0; i < trust.length; i++) {
        let [a, b] = trust[i];
        trustArr[a]--;
        trustArr[b]++;
    }

    for (let i = 1; i <= n; i++) {
        if (trustArr[i] === n-1) return i;
    }

    return -1;

};






