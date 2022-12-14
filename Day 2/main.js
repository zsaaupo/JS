// Math methods


// make round of float

console.log(Math.round(5.6))
console.log(Math.round(5.5))
console.log(Math.round(5.3))


// round up of float

console.log(Math.ceil(7.1))
console.log(Math.ceil(7.5))
console.log(Math.ceil(7.9))


// round down of float

console.log(Math.floor(9.9))
console.log(Math.floor(9.5))
console.log(Math.floor(9.1))




// var, let & const


// var Variable


// CaseOne
var ValueOne = 1 
console.log(ValueOne)
ValurOne = 2 // change the value
console.log(ValueOne)


//CaseTwo
var ValueTwo = 3
console.log(ValueTwo)
var ValueTwo = 2 // re-declare the variable
console.log(ValueTwo)


//CaseThree
if (1 == 1){
	var ValueThree = 6
}
console.log(ValueThree) // can be access outsite of specific block


// CaseFour
console.log(ValueFour) // use before declare as undefine variable
var ValueFour = 77


// CaseFive

function check(){
	var ValurFive = 88
}
// console.log(ValurFive) // can't access outside off function




// let Variable


// CaseOne
let ValurSix = 1
console.log(ValurSix)
ValurSix = 2 // change the value
console.log(ValurSix)


//CaseTwo
let ValurSeven = 5
console.log(ValurSeven)
// let ValurSeven = 10 // can't be re-declare
// console.log(ValurSeven)


// CaseThree
if (true){
	let ValueEight = 7
}
// console.log(ValueEight) // can't be access outsite of specific block


// CaseFour
// console.log(ValueNine) // can't be use before declare as undefine variable
let ValueNine = 59


// CaseFive is as same as var case five




// const Variable


// CaseOne
const ValueTen = 1
console.log(ValueTen)
// ValueTen = 2 // Value can't be change
// console.log(ValueTen)

// but object item can be change

const ValueObj = {
	"one" : 1,
	"two" : 2,
}
console.log(ValueObj)
ValueObj.two = 3 // object item can be change
console.log(ValueObj)


// CaseTwo to CaseFive are same as let variable