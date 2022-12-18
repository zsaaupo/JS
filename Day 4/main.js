// Arrow function (ES6)


// Explicit returen

// if fuction have multiple line then we use Explicit returen
let funcOne = (paramOne, paramTwo) => {

	let sum = paramOne + paramTwo
	let vat = 20 / 100
	let totalVat = sum * vat
	let total = sum + totalVat 

	return total
}


console.log(funcOne(20, 30))


// implicit return


// if function have only one statement we can use implicit return

// Multiple paramitter fuction
let funcTwo = (paramOne, paramTwo) => paramOne + paramTwo

console.log(funcTwo(2,2))


// single parameter function
let funcThree = name => `The name is ${name}`

console.log(funcThree("Zack"))


// 0 parameter function
let funcFour = () => Number((Math.random() * 7).toFixed())

console.log(funcFour())


// anonimus function
// note : not yet reviewed
document.addEventListener('click', () => console.log('click'))



// array


const arryaOne = ["cpu", "ram", "mobo", "gpu", "psu", "monitor"]

console.log(arryaOne)
console.log(arryaOne[5])
console.log(arryaOne.length)

arryaOne.push("casing")
arryaOne.push("Kyeboard")

console.log(arryaOne)
console.log(arryaOne.length)


// array slice based on length
console.log(arryaOne.slice(4, 7))

console.log(arryaOne.indexOf("mobo"))




// Object {}


// basic
const objOne = {
	cpu : "R5 3600",
	gpu : "RTX 2060",
	ram : "16 GB"
}

// access as dot notatino
console.log(objOne.gpu)

// access as bracket notation
console.log(objOne["cpu"])

// assign as dot notation
objOne.ramBus = "3200"

// assign as bracket notation
objOne["mobo"] = "Mortar max"

console.log(objOne)


// function inside object
let pc = (cpu, cpuPrice, gpu, gpuPrice) => {

	const built = {

		cpu : cpu,
		cpuPrice : cpuPrice,
		gpu : gpu,
		gpuPrice : gpuPrice,
		totalPrice : function(){
			return this.cpuPrice + this.gpuPrice
		}
	}

	const statement = `My CPU is ${built.cpu} and it cost ${built.cpuPrice}. And my GPU is ${gpu} and is cost ${built.gpuPrice}. My total cost is ${built.totalPrice()}.`

	return statement
}

console.log(pc("R5 3600", 18000, "RTX 2060", 36000))