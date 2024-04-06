/*
    Character count:
    Write a function that takes in a string and returns an object that stores each character's count
    with characters as keys and the number of occurrences as values.

    console.log(characterCount('mississippi')); // prints {m: 1, i: 4, s: 4, p: 2}
    console.log(characterCount('cat')); // prints {c: 1, a: 1, t: 1}
    console.log(characterCount('What time is it?')); // prints {W: 1, h: 1, a: 1, t: 3, ' ': 3, i: 3, m: 1, e: 1, s: 1, '?': 1}

*/

function characterCount(string) {

    //create empty obj
    let obj = {};

    //loop through str
    for (let i = 0; i < string.length; i++) {

    //store curr val in variable
        let currChar = string[i];

    //ask if val at obj is in obj
        if(obj[currChar] !== undefined) {

    //if yes icrement val at obj
            obj[currChar]++;

        }

    //otherwise add val at obj with count of 1
        else {

            obj[currChar] = 1;

        }

    }

    //return obj
    return obj;

}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = characterCount;
} catch (e) {
    module.exports = null;
}
