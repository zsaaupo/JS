// for loop

const arrayOne = [1, 2, 3, 4, 5, 6, 7, 8, 9]


// old way

for (let i = 0; i < arrayOne.length; i++) {
	console.log(i + " " + arrayOne[i])
}

// latest way 

for (const value of arrayOne) {
	console.log(value)
}


// This is a arrow function called "double"
// It has a argument called "arrayValue"
// Dose : take a array and multiply all value with 2 and return as array
const double = (arrayValue) => {

	let doubleArray = []
	for (const value of arrayValue) {
		doubleArray.push(value * 2)
	}

	return doubleArray
}

let a = double(arrayOne)

console.log(a)



// This is a arrow function called "squre"
// It has a argument called "arrayValue"
// Dose : take a array and squre all value and return as array
const squre = (arrayValue) => {

	let squreArray = []
	for (const value of arrayValue) {
		squreArray.push(value ** 2)
	}

	return squreArray
}


let b = squre(arrayOne)
console.log(b)