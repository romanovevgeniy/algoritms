const array = [1, 3, 4, 6, 8, 9, 10, 1, 5, 3, 5, 8, 11];
let count = 0;

function linearSearch(array, item) {
    for (let i = 0; i < array.length; i ++) {
        count +=1;
        if (array[i] === item) {
            return i;
        }
    };
    return null;
};

console.log(linearSearch(array, 3))
console.log('count = ', count)