// Array.prototype.forEach
// .bind .apply .call

// ---------------
// Fns definitions
// ---------------
function myForEach (arr, callback) {
    for (let index = 0; index < arr.length; index++) {
        callback(arr[index]);
    }
}

Array.prototype.myForEach = function (callback) {
    for (let index = 0; index < this.length; index++) {
        callback(this[index], index, this);
    }
}
// -------------------
// Fns definitions end
// -------------------

// Test Array
const numbers = [1, 2, 3, 4, 5];

// Native .forEach
false && numbers.forEach(function (number, index, arr) {
    console.log('El valor es', number, index, arr);
});

// Custom fn
!1 && myForEach(numbers, function (number) {
    console.log('El valor es', number);
});

numbers.myForEach(function (number, index, arr) {
    console.log('El valor es', number, index, arr);
});
