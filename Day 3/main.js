// toFixed method

// make round the float number and keep 2 digits after decimal
let floatNumber = 7.967
console.log(floatNumber.toFixed(2))


// toFixed method covert number to string
let valueOne = Math.random()
console.log(valueOne + " Datatype is " + typeof valueOne)

let floorNumber = valueOne.toFixed(2)
console.log(floorNumber + " Datatype is " + typeof floorNumber)

valueOne = Number(floorNumber)
console.log(valueOne + " after convertion Datatype is" + typeof valueOne) // after covert to number if last digite is 0, 0 will not show


// Random integer (number datatype)
console.log(Number((Math.random() * 11).toFixed()))


// exaples

// all are string datatype
console.log((Math.random() * 11).toFixed(2))
console.log((Math.random() * 11).toFixed(5))
console.log((Math.random() * 11).toFixed(10))
console.log((Math.random() * 11).toFixed(20))
console.log((Math.random() * 11).toFixed(30))



// Concat() method


let textOne = "Hello"
let textTwo = "JS"

console.log(textOne.concat(textTwo)) // no space
console.log(textOne.concat(" ", textTwo))
console.log(textOne.concat(" ", textTwo, " ", textOne))




// template literals

console.log(`say ${textOne} to ${textTwo}`) // use vaiable inside string
console.log(`This is a random number ${valueOne} but Datatype is string`)




// Function


// detailed comment
// This is a function called 'randomNumber'
// and it has 1 argument called 'rangeNumber'
// dose : it logs out a random integer number between 0 to GivenArgument-1 to console

function randomNumber(rangeNumber){

	let number = Number((Math.random() * rangeNumber).toFixed())
	console.log(`${number} is a random number between 0 to ${rangeNumber} and Datatype is ` + typeof number)
}

// calling function
randomNumber(2)
randomNumber(5)
randomNumber(10)
randomNumber(20)


// This is a function called 'randomInteger'
// and it has 1 argument called 'numberRange'
// dose : it returns a random integet value
function randomInteger(numberRange){

	let randomNumber = Number((Math.random() * numberRange).toFixed())
	return randomNumber
}

// taking value
console.log(randomInteger(7))
randomValue = randomInteger(10)
console.log(`${randomValue} datatype is ${typeof randomValue}`)