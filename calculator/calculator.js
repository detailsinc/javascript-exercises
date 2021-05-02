function add (a, b) {
	return a + b
}

function subtract (a, b) {
	return a - b
}

function sum (array) {
	return array.reduce((total, curV) => {
		return total += curV
	}, 0)
}

function multiply (array) {
	return array.reduce((total, curV) => {
		return total *= curV
	})
}

function power(a, b) {
	return Math.pow(a, b)
}

function factorial(n) {
	if (n === 0) {return 1}
	let result = 1;
	for (let i = n; i > 0; i--) {
		 result *= i
	}
	return result
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}