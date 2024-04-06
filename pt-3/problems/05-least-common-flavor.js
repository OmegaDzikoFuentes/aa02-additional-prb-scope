/*
Least common flavor:
    Write a function that accepts an object that represents a bag of candy with various flavors
    The keys of the object are flavors, and the values are the count of how many pieces of that flavor
    are in the bag. The function should return the name of the flavor that is the least common.
    If passed an empty object, the function should return null.

    const bag1 = { cherry: 4, grape: 5, lemon: 3, orange: 2, berry: 4 };
    console.log(leastCommonFlavor(bag1)); // prints 'orange'

    const bag2 = { cherry: 5, grape: 4, lemon: 2, orange: 3, chocolate: 6 }
    console.log(leastCommonFlavor(bag2)); // prints 'lemon'

    console.log(leastCommonFlavor({})); // prints null
*/

function leastCommonFlavor(candyBag) {

    //set conditional to return null is obj is empty
    if(Object.values(candyBag).length === 0) {

        return null;

    }

    //retrieve the values using obj.val
    let valArr = Object.values(candyBag);

    //set minVal of values arr using Math.min
    let minVal = Math.min(...valArr);

    //loop obj using key in
    for (let key in candyBag) {

    //ask if key at obj equals min value
        if(candyBag[key] === minVal) {

    //if yes return key
                return key;

        }

    }

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = leastCommonFlavor;
} catch (e) {
    module.exports = null;
}
