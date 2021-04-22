const reverseString = function(string) {
    let newString = string.split('');
    let stringText = ''
    for (let i = newString.length; i > 0; i--) {
        stringText += newString[i - 1];
    }
    return stringText;
} 

module.exports = reverseString
