const repeatString = function(string, times) {

    let fullString = string

    for (let i = 1; i < times; i++) {
        fullString = fullString + string
    }

    return fullString
};

console.log(repeatString('hey', 3))

// Do not edit below this line
module.exports = repeatString;
