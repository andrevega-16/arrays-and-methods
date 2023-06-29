// Array.prototype.map

// ---------------
// Fns definitions
// ---------------
function myMap (arr, callback) {
    const newArray = [];

    for (let index = 0; index < arr.length; index++) {
        const newValue = callback(arr[index]);
        newArray.push(newValue);
    }
    
    return newArray;
}

Array.prototype.myMap = function (callback) {
    const newArray = [];

    for (let index = 0; index < this.length; index++) {
        const newValue = callback(this[index]);
        newArray.push(newValue);
    }
    
    return newArray;
}
// -------------------
// Fns definitions end
// -------------------

const numbers = [1, 2, 3, 4, 5];
function callback (number, index, arr) {
    return 'El valor es ' + number;
}

const newNumbers = numbers.map(callback);
const newNumbersCust = myMap(numbers, callback);
const newNumbersProt = numbers.map(callback);

console.log(numbers)
console.log(newNumbersProt)