const array = [1, 6, 20, 9, 33, 22, 2, 4, 6, 80, 5, 43, 1, 8, 90, 66, 89, 0, 664, 232, 5, -1, -11];
let count = 0;

function selectionSort(array) {
    for (let i = 0; i < array.length; i++){
        let indexMin = i
        for (let j = i + 1 ; j < array.length; j++) {
            if (array[i] < array[indexMin]) {
                indexMin = j
            }
            count += 1
        }
        let  tmp = array[i]
        array[i] = array[indexMin]
        array[indexMin] = tmp
    }
    return array
}

console.log(selectionSort(array))
console.log(array.length)
console.log('count = ', count)