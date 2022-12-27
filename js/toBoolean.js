


// строка к булю - 1
let value = "name"

let toBoolean = Boolean(value)
console.log(`${value}, через конструктор String():`, toBoolean)
console.log(`тип данных ${value}, через конструктор Boolean():`, typeof toBoolean)

// Number to String - 2

toBoolean = !!value
console.log(`${value}, через !!:`, toBoolean)
console.log(`тип данных ${value}, через !!:`, typeof toBoolean)

// строчное число к булю - 1
 value = "123"
 toBoolean = Boolean(value)
console.log(`${value}, через конструктор String():`, toBoolean)
console.log(`тип данных ${value}, через конструктор Boolean():`, typeof toBoolean)

// Number to String - 2

toBoolean = !!value
console.log(`${value}, через !!:`, toBoolean)
console.log(`тип данных ${value}, через !!:`, typeof toBoolean)

// пустая строка к булю - 1
 value = ""
 toBoolean = Boolean(value)
console.log(`пустая строка ${value}, через конструктор String():`, toBoolean)
console.log(`тип данных ${value}, через конструктор Boolean():`, typeof toBoolean)

// Number to String - 2

toBoolean = !!value
console.log(`пустая строка ${value}, через !!:`, toBoolean)
console.log(`тип данных ${value}, через !!:`, typeof toBoolean)

// строка с пробелом к булю - 1
 value = " "
 toBoolean = Boolean(value)
console.log(`строка с пробелом ${value}, через конструктор String():`, toBoolean)
console.log(`тип данных ${value}, через конструктор Boolean():`, typeof toBoolean)

// Number to String - 2

toBoolean = !!value
console.log(`строка с пробелом ${value}, через !!:`, toBoolean)
console.log(`тип данных ${value}, через !!:`, typeof toBoolean)

// число к булю - 1
 value = 0
 toBoolean = Boolean(value)
console.log(` ${value}, через конструктор String():`, toBoolean)
console.log(`тип данных ${value}, через конструктор Boolean():`, typeof toBoolean)

// Number to String - 2

toBoolean = !!value
console.log(` ${value}, через !!:`, toBoolean)
console.log(`тип данных ${value}, через !!:`, typeof toBoolean)

// число к булю - 1
 value = 1
 toBoolean = Boolean(value)
console.log(` ${value}, через конструктор String():`, toBoolean)
console.log(`тип данных ${value}, через конструктор Boolean():`, typeof toBoolean)

// Number to String - 2

toBoolean = !!value
console.log(` ${value}, через !!:`, toBoolean)
console.log(`тип данных ${value}, через !!:`, typeof toBoolean)

// undefined к булю - 1
 value = undefined
 toBoolean = Boolean(value)
console.log(` ${value}, через конструктор String():`, toBoolean)
console.log(`тип данных ${value}, через конструктор Boolean():`, typeof toBoolean)

// Number to String - 2

toBoolean = !!value
console.log(` ${value}, через !!:`, toBoolean)
console.log(`тип данных ${value}, через !!:`, typeof toBoolean)

// null к булю - 1
 value = null
 toBoolean = Boolean(value)
console.log(` ${value}, через конструктор String():`, toBoolean)
console.log(`тип данных ${value}, через конструктор Boolean():`, typeof toBoolean)

// Number to String - 2

toBoolean = !!value
console.log(` ${value}, через !!:`, toBoolean)
console.log(`тип данных ${value}, через !!:`, typeof toBoolean)


// NaN к булю - 1
 value = NaN
 toBoolean = Boolean(value)
console.log(` ${value}, через конструктор String():`, toBoolean)
console.log(`тип данных ${value}, через конструктор Boolean():`, typeof toBoolean)

// Number to String - 2

toBoolean = !!value
console.log(` ${value}, через !!:`, toBoolean)
console.log(`тип данных ${value}, через !!:`, typeof toBoolean)

// infinity к булю - 1
 value = Infinity
 toBoolean = Boolean(value)
console.log(` ${value}, через конструктор String():`, toBoolean)
console.log(`тип данных ${value}, через конструктор Boolean():`, typeof toBoolean)

// Number to String - 2

toBoolean = !!value
console.log(` ${value}, через !!:`, toBoolean)
console.log(`тип данных ${value}, через !!:`, typeof toBoolean)




// true - числа (кроме 0), пустая строка, строчное значение
// false - пустая строка, Nan, 0 - число, undefined, nul, false


//Falsy values

console.log("Пустая строка:", Boolean(""))
console.log("Числовой ноль",Boolean(0))
console.log("NaN:", Boolean(NaN))
console.log("underfined:", Boolean(undefined))
console.log("null:",Boolean(null))
console.log("false:",Boolean(false))


