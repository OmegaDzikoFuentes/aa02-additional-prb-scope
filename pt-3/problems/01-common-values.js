/*
    Common values in two objects:
        Given two objects, return an array of values that are present in both objects

    const cat = {color: 'white', legs: 4, favoriteFood: 'sushi'};
    const bunny = {color: 'white', favoriteFood: 'carrots'};
    const human = {hobbies: ['running', 'painting'], legs: 4, favoriteFood: 'sushi'};
    const vehicle = { wheels: 4, color: 'red'};

    console.log(commonValues(cat, bunny)); // prints ['white']
    console.log(commonValues(cat, human)); // prints [4, 'sushi']
    console.log(commonValues(human, vehicle)); // prints [4]

*/

function commonValues(obj1, obj2) {

    //create variable to store obj.val of both objs
    let firstArr = Object.values(obj1);

    let secArr = Object.values(obj2);

    //create empty arr
    let groupArr = [];

    //use forEach
    firstArr.forEach(ele => {

    //ask if ele is in both arrs
        if(secArr.includes(ele)) {

    //if yes push to neew arr
                groupArr.push(ele);

        }

    });

    //return joined arr
    return groupArr;

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = commonValues;
} catch (e) {
    module.exports = null;
}
