const findTheOldest = function(peopleArray) {
    const currentYear = new Date().getFullYear();
    
    const oldestPerson = peopleArray.reduce((currentOldest, currentPerson) => {
        //Check for death keypair
        if(yearOfDeath in currentPerson){
            currentPerson.age = currentPerson.yearOfDeath - currentPerson.yearOfBirth;
        };

        //Checks still alive
        if(!yearOfDeath in currentPerson){
            currentPerson.age = currentYear - currentPerson.yearOfBirth;
        };
 
        return currentPerson.age > currentOldest.age ? currentPerson : currentOldest;
    });

    return oldestPerson;
};


// Do not edit below this line
module.exports = findTheOldest;
