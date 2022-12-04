const palindromes = function (inString) {
    //Santize String func
        //Remove all number chars
        //Remove all punctuatuon chars
        //Serperate words
            //loop until space char
                //use loop count value to
                    //add chars to new string at looppos
                    //Remove chars from original string
                    //Add seperated string to array of strings
        //retrun arrayOfStrings

    function sanitizeString(inString) {
        inString = inString.toLowerCase(inString);
        const arrayOfStrings = inString.split(" ");

        //Remove punctuation + numbers
        function removeIllegalChars(inStrings) {
            const legalChars = RegExp(["[a-z]"]);
            let cleanStrings = [];

            //Loops over each array position containing a stiring
            for(let i = 0; i < inStrings.length; i++){
                let currentString = inStrings[i];
                const currentStringLength = currentString.length -1;
                
                //Checks each char within the strgin
                for(let i = currentStringLength; i >= 0; i--){
                    const currentChar = currentString.at(i)

                    //Removes illegal chars from current string
                    if(!legalChars.test(currentChar)){
                        currentString = currentString.replace(currentChar, "");
                    };
                };

                //Ignore empty strings
                if(currentString.length <= 0){
                    continue
                } else {
                    cleanStrings[cleanStrings.length] = currentString;
                };
            };

            return cleanStrings;
        };
        
        console.log(removeIllegalChars(arrayOfStrings))

        return arrayOfStrings;
    };

    //reverse input string
    sanitizeString(inString);
    let reverseString = "";

    for(let i = inString.length -1; i >= 0; i--){
        reverseString.concat(inString.charAt(i));
    }

//Comapre newString with input string
};

palindromes("rIn432 sdfs 345 ospd%f sdfsdf fred 45357 qsvcr45yb ggn&");

// Do not edit below this line
// module.exports = palindromes;
