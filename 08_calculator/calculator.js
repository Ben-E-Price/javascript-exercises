const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(sumArray) {
  initalValue = 0;
  finalSum = sumArray.reduce((totalValue, currentValue) => {
    return totalValue += currentValue;
  }, initalValue);

	return finalSum;
};

const multiply = function(mutiplicationArray) {
  finalSum = mutiplicationArray.reduce((totalValue, currentValue) => {
    return totalValue *= currentValue;
  }, initalValue);

  return finalSum;
};

const power = function(numValue, powerIn) {
  let powerValue = 0;
	for(let i = 0; i < powerIn){
    powerValue = numValue * numValue;
  }
  return powerValue;
};

const factorial = function() {
	
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
