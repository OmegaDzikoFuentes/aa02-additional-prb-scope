/*
Least and Most Expensive Toys:
    Write a function that accepts an object that represents a catalog of toys with their names and prices.
    The keys of the object are names of each toy, and the corresponding value is its price.
    The function should return an array where the first element is the name of the least expensive toy,
    and the second element is the name of the most expensive toy. You may assume there will always be
    one most and least expensive toy.

    const catalog1 = {'ball': 5, 'jumprope': 3, 'yo-yo': 10, 'trading cards': 12}
    const catalog2 = {'skateboard': 50, 'bicycle': 100, 'doll': 10, 'puzzle': 20}
    console.log(leastAndMostExpensive(catalog1)); // prints ['jumprope', 'trading cards']
    console.log(leastAndMostExpensive(catalog2)); // prints ['doll', 'bicycle']
*/

function leastAndMostExpensive(catalog) {

    //create empty arr
    let ansArr = [];

    //create values arr with obj.val
    let valArr = Object.values(catalog);

    //create a min val from the val arr using math.min
    let minVal = Math.min(...valArr);

    //create a max val from the val arr using math.max
    let maxVal = Math.max(...valArr);

    //loop through obj using key in loop
    for (let key in catalog) {

    //ask if key at obj val equals min
        if(catalog[key] === minVal) {

    //if yes send key to arr
            ansArr.push(key);

        }

    }

    for (let key in catalog) {

         //ask if key at obj val equals max
         if(catalog[key] === maxVal) {

            //if yes send key to arr
                    ansArr.push(key);

                }
                
    }

    //return arr
    return ansArr;
}

const catalog1 = {'ball': 5, 'jumprope': 3, 'yo-yo': 10, 'trading cards': 12}
const catalog2 = {'skateboard': 50, 'bicycle': 100, 'doll': 10, 'puzzle': 20}
console.log(leastAndMostExpensive(catalog1)); // prints ['jumprope', 'trading cards']
console.log(leastAndMostExpensive(catalog2)); // prints ['doll', 'bicycle']

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = leastAndMostExpensive;
} catch (e) {
    module.exports = null;
}
