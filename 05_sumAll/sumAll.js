const sumAll = function(numStart, numEnd) {
    
    if (typeof(numStart) != 'number' || typeof(numEnd) != 'number') {
        return 'ERROR'
    } else if (numStart < 0 || numEnd < 0) { 
        return 'ERROR'
    }

    let finalNumStart = numStart;
    let finalNumEnd = numEnd

    if (numEnd < numStart) {
        finalNumStart = numEnd
        finalNumEnd = numStart
    }

    // console.log(finalNumStart)
    // console.log(finalNumEnd)

    let finalNum = 0

    for (let i = finalNumStart; i <= finalNumEnd; i++) {
        finalNum = finalNum + i
        //console.log(i)
    }
    //console.log(finalNum)

    return finalNum
};

//console.log(sumAll(1,4)) 

// Do not edit below this line
module.exports = sumAll;
