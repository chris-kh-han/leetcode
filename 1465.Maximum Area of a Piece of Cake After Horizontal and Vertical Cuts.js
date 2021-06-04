var maxArea = function(h, w, horizontalCuts, verticalCuts) {
    if (h == 0 && w == 0) return 0;
    
    horizontalCuts.sort(function(a, b){return a-b}).push(h);
    horizontalCuts.unshift(0);
    
    verticalCuts.sort(function(a, b){return a-b}).push(w);
    verticalCuts.unshift(0);
    
    
    let hmax = 0;
    let vmax = 0
    
    for (let i = 1; i < horizontalCuts.length; i++) {
        hmax = Math.max(hmax, horizontalCuts[i]- horizontalCuts[i-1])
        
    }

    for (let i = 1; i < verticalCuts.length; i++) {
        vmax = Math.max(vmax, verticalCuts[i]- verticalCuts[i-1])
    }
    
    console.log(vmax)
    console.log(hmax)

   
    return (vmax * hmax) % (10**9 +7);
    
    
    
};