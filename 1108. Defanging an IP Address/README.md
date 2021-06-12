# **_Leet Code Challenge_** 👨‍💻👩‍💻

## <span style="color:red">1108. Defanging an IP Address</span> 👉

- Given a valid (IPv4) IP address, return a defanged version of that IP address.

- A defanged IP address replaces every period "." with "[.]". 
#### Example:
```
Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1"

Input: address = "255.100.50.0"
Output: "255[.]100[.]50[.]0"
```
#### Constraints:
- The given address is a valid IPv4 address.

[Link](https://leetcode.com/problems/defanging-an-ip-address/)

## _Solution_ 👇

```javascript
var defangIPaddr = function(address) {
    return address.replace(/\./g,"[.]")
};
```
