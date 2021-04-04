var MinStack = function() {
    this.arr = [];
    this.min = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.arr.push(val);
    
    if (this.min.length === 0 || val <= this.min[this.min.length - 1]) {
        this.min.push(val)
    }
   
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let val = this.arr.pop();
    
    if (val === this.min[this.min.length - 1]) {
        this.min.pop();
    }

};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.arr[this.arr.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min[this.min.length -1];
};