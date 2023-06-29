// Array.prototype.filter

// ---------------
// Fns definitions
// ---------------
function myFilter (arr, callback) {
    const newArray = [];

    for (let index = 0; index < arr.length; index++) {
        const keep = callback(arr[index]);
        if (keep) {
            newArray.push(arr[index]);
        }
    }
    
    return newArray;
}

Array.prototype.myFilter = function (callback) {
    const newArray = [];

    for (let index = 0; index < this.length; index++) {
        const keep = callback(this[index]);
        if (keep) {
            newArray.push(this[index]);
        }
    }
    
    return newArray;
}
// -------------------
// Fns definitions end
// -------------------

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function filterFn (number) {
    return number % 2 === 0;
}

const newNumbers = numbers.filter(filterFn);
const newNumbersCust = myFilter(numbers, filterFn);
const newNumbersProt = numbers.myFilter(filterFn);

console.log(numbers);
console.log(newNumbersProt);