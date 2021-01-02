let numWays = function(n, k) {
    if(!n || !k) return 0;
    if(n == 1 || k) return k;

    diff = k * (k-1);
    same = k * 1;

    for (let i = 3; i <= n; i ++) {
        let prevDiff = diff;
        diff = (diff + same) * (k-1);
        same = prevDiff;
    }

    return diff + same;
}
