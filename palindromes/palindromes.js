const palindromes = function(string) {
    let originalArray = string.toLowerCase().replace(/[^A-Za-z]/g, '');
    let reversedArray = originalArray.split('').reverse().join('');
    return (originalArray == reversedArray) ? true : false;
}  


module.exports = palindromes
