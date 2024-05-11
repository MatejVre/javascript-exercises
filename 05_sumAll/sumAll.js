const sumAll = function(num1, num2) {
    if ((typeof num1 != "number" || num1 < 0) || (typeof num2 != "number" || num2 < 0)){
        return "ERROR"
    };
    biggerNum = ((num1 > num2) ? num1 : num2);
    smallerNum = ((num1 < num2) ? num1 : num2);
    let sum = 0;
    for (let i = smallerNum; i <= biggerNum; i ++){
        sum += i
    };
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
