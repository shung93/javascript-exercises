const removeFromArray = function(initArray) {

    const newArgs = Array.from(arguments)
    newArgs.shift();
    
    if (initArray.constructor !== Array) {
        console.log('Please provide an array')
        return false 
    }

    for (let i = 0; i < newArgs.length; i++) {
        initArray = initArray.filter(arg => arg != newArgs[i])
    }
    
    return initArray

};

removeFromArray([1, 2, 3, 4], 1,2,3,4)

// Do not edit below this line
module.exports = removeFromArray;
