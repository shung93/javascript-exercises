const findTheOldest = function(peopleArray) {
    const currYear = new Date().getFullYear()

    peopleArray.map(people => { if (people['yearOfDeath'] === undefined ) {
                                    people['yearOfDeath'] = currYear}
                            }
                    );

    peopleArray.map(people => people['age'] = (people['yearOfDeath'] - people['yearOfBirth']));

    const oldestAge = Math.max(...peopleArray.map(people => people['age']))

    const oldFolks = peopleArray.filter(people => people['age'] === oldestAge)
    
    for (let i = 0; i <= oldFolks.length; i++) {
        return oldFolks[i]
    }
};

// Do not edit below this line
module.exports = findTheOldest;
