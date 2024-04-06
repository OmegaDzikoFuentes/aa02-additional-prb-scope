/*
All the marbles:

    Write a function that takes in any number of marble objects and returns the total weight of all marbles.
    Marble objects are structured as the following:

    const marble1 = { color: 'red', weight: 20 };
    const marble2 = { color: 'purple', weight: 100 };
    const marble3 = { color: 'blue', weight: 40 };

    console.log(allTheMarbles(marble1, marble2)) // prints 120;
    console.log(allTheMarbles(marble1, marble2, marble3)) // prints 160;
    console.log(allTheMarbles()) // prints 0;
*/

function allTheMarbles(...marbles) {

    //create a total weight variable starting at zero
    let totalWeight = 0;

    //loop through given arr
    for (let i = 0; i < marbles.length; i++) {

    //store curr obj in variable
        let obj = marbles[i];

    //add the curr weight to the total weight and reassign
            totalWeight += obj.weight;

    }

    //return total weight
    return totalWeight;
    
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = allTheMarbles;
} catch (e) {
    module.exports = null;
}
