const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(sumArray) {
  initalValue = 0;

  const finalSum = sumArray.reduce((totalValue, currentValue) => {
    return totalValue += currentValue;
  }, initalValue);

	return finalSum;
};

const multiply = function(mutiplicationArray) {
  const finalSum = mutiplicationArray.reduce((totalValue, currentValue) => {
    return totalValue *= currentValue;
  }, initalValue);

  return finalSum;
};

const power = function(numValue, powerIn) {
  let powerValue = 0;

	for(let i = 0; i < powerIn; i++){
    powerValue = numValue * numValue;
  };

  return powerValue;
};

const factorial = function(num) {
  //Recursive Solution - Taken from https://www.freecodecamp.org/news/how-to-factorialize-a-number-in-javascript-9263c89a4b38/
	if(num < 0){
    return -1;
  } else if (num === 0 || num === 1){
    return 1;
  } else {
    return (num * frctorial(num -1));
  };
  //Rcursive Soltuion - End


  //forLoop Solution - Start

  // if(num === 0 || num ===1){
    // return 1;
  // };
// 
  // for(i = num-1; i >= num; i--){
    // num = num * i;
  // };
// 
  // return num;
  //forLoop Solution - End


};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
