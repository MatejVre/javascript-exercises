const palindromes = function (input) {
    input = input.replace(/[^\w]/g, "");
    input = input.toLowerCase();
    for (let i = 0; i < input.length; i ++){
        let u = input.length - 1 - i;
        if (input.charAt(i) !== input.charAt(u)){
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
