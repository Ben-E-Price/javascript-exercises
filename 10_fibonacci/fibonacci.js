const fibonacci = function(fibPosNum) {
    //convert strings to nums - Account for negative values <0 
    function cleanInput(inputNum) {
        return inputNum = Number(inputNum);
    };

    function calcSeq(posNum) {
        const fibValues = [];
        let currentFibValue = 1; //Defines start value
    
        //Loop based on input
        for(let i = 0; i < fibPosNum; i++){
    
            //Creates position 1 - 2 values
            if(fibValues.length < 2){
                fibValues[i] = currentFibValue;
            } else {
                currentFibValue = fibValues[i -2] + fibValues[i -1]
                fibValues[i] = currentFibValue;
            };
        };

        return fibValues
    };

    
    const sanInput = cleanInput(fibPosNum);
    
    //Ensures input number is positive
    if(sanInput <= 0){
        return "OOPS"
    } else {   
        const fibValues = calcSeq(cleanInput);
        return fibValues[sanInput -1];
    };

};

fibonacci(5);

// Do not edit below this line
// module.exports = fibonacci;
