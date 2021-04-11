var isSymmetric = function(root, left=null, right=null) {
    if(!root) return true;
    
       
    return checker(root.left, root.right)
};

function checker(left, right) {
    if (left === null && right === null) return true;
    if (left === null || right === null) return false;
    if (left.val !== right.val) return false;
    
    return checker(left.left, right.right) && checker(left.right, right.left)
    
}