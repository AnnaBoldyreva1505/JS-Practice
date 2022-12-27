// значение любое строчное   to  Number - 1
let value = "name"

let toNumber = Number(value)
console.log(`${value}, через конструктор Number():`, toNumber)
console.log(`тип данных ${value}, через конструктор Number():`, typeof toNumber)

// String  to  Number- 2 c использованием унарного плюса

toNumber = +value
console.log(`${value}, через унарный +:`, toNumber)
console.log(`тип данных ${value}, через унарный +:`, typeof toNumber)


//  строчное число   to  Number - 1
 value = "1"

 toNumber = Number(value)
console.log(`${value}, через конструктор Number():`, toNumber)
console.log(`тип данных ${value}, через конструктор Number():`, typeof toNumber)

// String  to  Number- 2 c использованием унарного плюса

toNumber = +value
console.log(`${value}, через унарный +:`, toNumber)
console.log(`тип данных ${value}, через унарный +:`, typeof toNumber)


//  пустая строка  to  Number - 1
 value = ""

 toNumber = Number(value)
console.log(` пустая строка ${value}, через конструктор Number():`, toNumber)
console.log(`тип данных ${value}, через конструктор Number():`, typeof toNumber)

// String  to  Number- 2 c использованием унарного плюса

toNumber = +value
console.log(`пустая строка ${value}, через унарный +:`, toNumber)
console.log(`тип данных ${value}, через унарный +:`, typeof toNumber)


//   строка  с пробелом to  Number - 1
 value = " "

 toNumber = Number(value)
console.log(`строка с пробелом ${value}, через конструктор Number():`, toNumber)
console.log(`тип данных ${value}, через конструктор Number():`, typeof toNumber)

// String  to  Number- 2 c использованием унарного плюса

toNumber = +value
console.log(`строка с пробелом ${value}, через унарный +:`, toNumber)
console.log(`тип данных ${value}, через унарный +:`, typeof toNumber)





// BOOLEAN к числу

value = true
toNumber = Number(value)
console.log(`${value}, через конструктор Number():`, toNumber)
console.log(`тип данных ${value}, через конструктор Number():`, typeof toNumber)

// BOOLEAN к числу - 2

toNumber = value + ""
console.log(`${value}, через унарный +:`, toNumber)
console.log(`тип данных ${value}, через унарный +:`, typeof toNumber)

value = false
toNumber = Number(value)
console.log(`${value}, через конструктор Number():`, toNumber)
console.log(`тип данных ${value}, через конструктор Number():`, typeof toNumber)

// BOOLEAN to Number - 2

toNumber = +value
console.log(`${value}, через унарный +:`, toNumber)
console.log(`тип данных ${value}, через унарный +:`, typeof toNumber)


// undefined to Number

value = undefined
toNumber = Number(value)
console.log(`${value}, через конструктор Number():`, toNumber)
console.log(`тип данных ${value}, через конструктор Number():`, typeof toNumber)

// undefined to Number - 2

toNumber = +value
console.log(`${value}, через унарный +:`, toNumber)
console.log(`тип данных ${value}, через унарный +:`, typeof toNumber)


// null to Number

value = null
toNumber = Number(value)
console.log(`${value}, через конструктор Number():`, toNumber)
console.log(`тип данных ${value}, через конструктор Number():`, typeof toNumber)

// null to Number - 2

toNumber = +value
console.log(`${value}, через унарный +:`, toNumber)
console.log(`тип данных ${value}, через унарный +:`, typeof toNumber)
