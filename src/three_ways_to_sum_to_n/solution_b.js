// Problem 1 B
// Task: Provide 3 unique implementations of the following function.
// Input: `n` - any integer from `0` to `Number.MAX_SAFE_INTEGER`.
// Output: `return` - summation to `n`, i.e. sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15.

//Author： Yang Xi 

//O(n) Complexity

var sum_to_n = function(n) {
    if (n <= 1)  return n;
    return n  + sum_to_n(n - 1);
};
