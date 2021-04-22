const repeatString = function(phrase, repeats) {
    if (repeats < 0) {
        return('ERROR');
    }
    let string = '';
    for (let i = 0; i < repeats; i++) {
        string += phrase;
    }
    return string;
}

module.exports = repeatString
