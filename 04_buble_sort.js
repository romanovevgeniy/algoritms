const array = [1, 6, 20, 9, 33, 22, 2, 4, 6, 80, 5, 43, 1, 8, 90, 66, 89, 0, 664, 232, 5, -1, -11];

let count = 0;

function bubbleSort(array) {
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length; j++) {
			if(array[j+1] < array[j]) {
				let tmp = array[j]
				array[j] = array[j + 1]
				array[j + 1] = tmp
			}
			count += 1
		}
	}
	return array
}

console.log('length', array.length)
console.log(bubbleSort(array))
console.log('count = ', count)