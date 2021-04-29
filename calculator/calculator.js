function add (a, b) {
	return a + b
}

function subtract (a, b) {
	return a - b
}

function sum (array) {
	return array.reduce((total, nextValue) => total + nextValue, 0)
}

function multiply (array) {
	return array.reduce((total, nextValue) => total * nextValue)
}

function power(a, b) {
	return Math.pow(a, b)
}

function factorial(a) {
	if (a == 0) return 1;
	let value = 1;
	for (let i = a; i > 0; i--) {
		value *= i
	} return value
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}