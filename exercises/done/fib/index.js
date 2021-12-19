// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
    res = [0, 1];

    for (let i = 0; i < n; i++) {
        let next = res[res.length - 1] + res[res.length - 2];
        res.push(next);
    }

    return res[n];
}

module.exports = fib;
