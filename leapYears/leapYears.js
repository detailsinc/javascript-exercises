const leapYears = function(year) {
    let result
    if (year % 4 == 0 && year % 100 == 0 && year % 400 == 0) {
        result = true;
        return result;
    }
    if (year % 4 == 0 && !(year % 100 == 0)) {
        result = true;
        return result;
    }
    else {
        result = false;
        return result;
    }
}

module.exports = leapYears
