// ================= Задача 1 ==============
// Запиши условие в инструкции if так, чтобы функция работала правильно.
function checkAge(age) {
  if (age >= 18) {
    // Change this line
    return "You are an adult";
  }

  return "You are a minor";
}

console.log(checkAge(19));

// ================= Задача 2 ==============

//   Функция checkPassword получает пароль пользователя в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения.

// Проведи рефакторинг кода функции checkPassword используя паттерн «ранний возврат»:

// удали переменную message
// удали else
// код должен работать так же, как и до оптимизации

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  // Change code below this line

  if (password === ADMIN_PASSWORD) {
    return "Welcome!";
  }
  return "Access denied, wrong password!";
}

console.log(checkPassword("mangohackzor"));

// ================= Задача 3 ==============

//     Функция checkStorage проверяет возможность оформления заказа и возвращает сообщение о результате. Она принимает два параметра, значения которых будут задаваться во время её вызова.

// available - доступное количество товаров на складе
// ordered - количество единиц товара в заказе
// Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат».

function checkStorage(available, ordered) {
  if (ordered === 0) {
    return "Your order is empty!";
  }

  if (ordered > available) {
    return "Your order is too large, not enough goods in stock!";
  }
  return "The order is accepted, our manager will contact you";
}

console.log(checkStorage(100, 50));

// ================= Задача 4 ==============
// Объяви переменную fruits и присвой ей массив фруктов - строк "apple", "plum", "pear" и "orange".
// const fruits = ["apple", "plum", "pear", "orange"];
// console.log(fruits);

// ================= Задача 5  ==============

// Объяви три переменные и присвой каждой из них значение, используя нотацию квадратных скобок.

// Имя переменной	Значение переменной
// firstElement	первый элемент массива
// firstElsecondElementement	второй элемент массива
// firstElement	последний элемент массива

// const fruits = ["apple", "plum", "pear", "orange"];

// const firstElement = fruits[0]
// console.log(firstElement);
// const secondElement = fruits[1]
// console.log(secondElement);
// const lastElement = fruits[fruits.length - 1]
// console.log(lastElement);
// const lastElement2 = fruits.at(-1)
// console.log(lastElement2);

// ================= Задача 6 Изменение массива по индексу элементв ==============

// const fruits = ["apple", "plum", "pear", "orange"];
// fruits[1] = "peach"
// fruits[3] = "banana"

// console.log(fruits);

// ================= Задача 7 Длинна массива ==============
// Объяви переменную fruitsArrayLength и присвой ей длину массива fruits используя свойство length.
// const fruits = ["apple", "plum", "pear", "orange"];
// const fruitsArrayLength  = fruits.length
// console.log(fruitsArrayLength);


// ================= Задача 8 Длинна массива ==============
// Объяви две переменные:

// Имя переменной	Ожидаемое значение
// lastElementIndex	Индекс последнего элемента масcива fruits через длина_массива - 1
// lastElement	Значение последнего элемента массива
const fruits = ["apple", "peach", "pear", "banana"];

// Change code below this line

// const lastElementIndex = fruits.length - 1;
const lastElementIndex = fruits.length - 1;
const lastElement = fruits[lastElementIndex];

console.log(lastElementIndex);
console.log(lastElement);

console.log(fruits.at(-1));
// ================= Задача 9 Длинна массива ==============
// Напиши функцию getExtremeElements(array) которая принимает один параметр array - массив элементов произвольной длины. Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array.

// function getExtremeElements(array) {
//     // Change code below this line
  
//   return [array[0], array[array.length - 1]]
//     // Change code above this line
//   }

//   console.log(getExtremeElements([1, 2, 3, 4, 5]));

// // Вариант 2
// function getExtremeElements(array) {
//     // Change code below this line
  
//   return [array.shift(), array.pop()]
//     // Change code above this line
//   }

//   console.log(getExtremeElements([1, 2, 3, 4, 5]));
// // ================= Задача 10 split ==============
// //   Метод split(delimiter) позволяет превратить строку в массив, «разбив» его по разделителю delimiter. Если разделитель это пустая строка, то получится массив отдельных символов. Разделителем может быть один или несколько символов.

// function splitMessage(message, delimiter) {
//     let words;
//     // Change code below this line
//   words = message.split(delimiter)
//     // Change code above this line
//     return words;
//   }

//   console.log(splitMessage('Mango', ''));
//   console.log(splitMessage('best_for_week', '_'));

// ================= Задача 11 split ==============
// Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки, в зависимости от количества слов и цены за слово.

// Объявлена функция calculateEngravingPrice(message, pricePerWord). Эта функция принимает строку, состоящую из слов разделённых только пробелами (параметр message) и цену гравировки одного слова (параметр pricePerWord).

// Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.


// function calculateEngravingPrice(message, pricePerWord) {
//     // Change code below this line
 
//  return message.split(" ").length * pricePerWord
 
//     // Change code above this line
//  }

//  console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// ================= Задача 12 join() ==============
// Дополни код функции makeStringFromArray(array, delimiter) так, чтобы она возвращала в переменной string результат соединения элементов массива array c разделителем delimiter - строку.
function makeStringFromArray(array, delimiter) {
    let string;
    // Change code below this line
  
  return string = array.join(delimiter)
  
    // Change code above this line
    return string;
  }




Метод массивов join(delimiter) позволяет соединить элементы массива в строку. В строке элементы будут разделены символом или группой символов указанных в delimiter. То есть это операция обратная методу строк split(delimiter).