// Problem 1 C
// Task: Provide 3 unique implementations of the following function.
// Input: `n` - any integer from `0` to `Number.MAX_SAFE_INTEGER`.
// Output: `return` - summation to `n`, i.e. sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15.

//Author： Yang Xi 

//O(n) Complexity

var sum_to_n = function(n) {
    var sum = 0;
    for(var i=1; i <= n; i++) {
        sum += i;
    }
    return sum;
};