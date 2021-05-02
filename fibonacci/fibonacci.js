const fibonacci = function(n) {
    if (n < 0) {return 'OOPS'}
    let i, lastVal, nextVal, sum;
    lastVal = 0;
    nextVal = 1;
    for (i = 0; i < n - 1; i++) {
        sum = lastVal + nextVal;
        lastVal = nextVal;
        nextVal = sum;
    }
    return nextVal;

}

module.exports = fibonacci

