module.exports = function reverse (n) {

    let stringNumber = Math.abs(n).toString();
    let reverseString = '';

    for (let item of stringNumber) {
        reverseString = item + reverseString
    }
    return (+reverseString);
  
}
