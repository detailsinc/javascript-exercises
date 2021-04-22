const sumAll = function(start, end) {
    let result = 0;
    let numHolder
    if (!(typeof start === 'number') || !(typeof end === 'number')) {
        return 'ERROR';
    }
    if (start < 0 || end < 0) {
        return 'ERROR';
    }
    if (start > end) {
        numHolder = start;
        start = end;
        end = numHolder;
    }
    for (let i = start; i < end + 1; i++) {
        result += i
    } 
    return result;
}

module.exports = sumAll
