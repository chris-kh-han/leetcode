# **_Leet Code Challenge_** 👨‍💻👩‍💻

## <span style="color:red">705. Design HashSet</span> 👉

Design a HashSet without using any built-in hash table libraries.

Implement MyHashSet class:

```
  void add(key) Inserts the value key into the HashSet.
  bool contains(key) Returns whether the value key exists in the HashSet or not.
  void remove(key) Removes the value key in the HashSet. If key does not exist in the HashSet, do nothing.
```


1. Example
```
Input
["MyHashSet", "add", "add", "contains", "contains", "add", "contains", "remove", "contains"]
[[], [1], [2], [1], [3], [2], [2], [2], [2]]
Output
[null, null, null, true, false, null, true, null, false]

Explanation
MyHashSet myHashSet = new MyHashSet();
myHashSet.add(1);      // set = [1]
myHashSet.add(2);      // set = [1, 2]
myHashSet.contains(1); // return True
myHashSet.contains(3); // return False, (not found)
myHashSet.add(2);      // set = [1, 2]
myHashSet.contains(2); // return True
myHashSet.remove(2);   // set = [1]
myHashSet.contains(2); // return False, (already removed)
```

### Constraints
```
  0 <= key <= 106
  At most 104 calls will be made to add, remove, and contains.
```

  [Link](https://leetcode.com/problems/design-parking-system/)

## _Solution_ 👇

```javascript
var MyHashSet = function() {
    this.keys = [];
};

MyHashSet.prototype.add = function(key) {
    if (!this.keys.includes(key)) {
        this.keys.push(key)
    }
    
    
    return this.keys;
};

MyHashSet.prototype.remove = function(key) {
    if (this.keys.includes(key)) {
        let index = this.keys.indexOf(key);
        this.keys.splice(index, 1);
        return this.keys;
    }

    return this.keys;
};

MyHashSet.prototype.contains = function(key) {
    if (this.keys.includes(key)) {
        return true;
    }

    return false;
};
```
