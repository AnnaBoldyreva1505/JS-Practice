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
// function makeStringFromArray(array, delimiter) {
//     let string;
//     // Change code below this line
  
//   return string = array.join(delimiter)
  
//     // Change code above this line
//     return string;
//   }

// // Метод массивов join(delimiter) позволяет соединить элементы массива в строку. В строке элементы будут разделены символом или группой символов указанных в delimiter. То есть это операция обратная методу строк split(delimiter).


// function initSnaker(str) {
  
// }


// console.log(initSnaker(CamelCase));


// ================= Задача 13 ==============

// Термин slug - это человеко-понятный уникальный идентификатор, который используется в веб-разработке для создания читабельных URL-адресов.

// Например, вместо того чтобы пользователь увидел в адресной строке mysite.com/posts/1q8fh74tx, можно сделать slug из названия статьи. В результате адрес получится более приятным для восприятия: mysite.com/posts/arrays-for-begginers.

// Внимание
// Slug это всегда строка в нижнем регистре, слова которой разделены тире.

// Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title, и возвращает slug, созданный из этой строки.

// Значением параметра title будут строки, слова которых разделены только пробелами
// Все символы slug должны быть в нижнем регистре
// Все слова slug должна быть разделены тире

// function slugify(title) {
//   // Change code below this line

// return title.split(" ").join("-").toLowerCase()

//   // Change code above this line
// }



// ================= Задача 14 ==============


// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);

// firstTwoEls - массив из первых двух элементов
// nonExtremeEls - массив из всех элементов кроме первого и последнего
// lastThreeEls - массив из трёх последних элементов


// ================= Задача 15 concat - соеденить 2 массива==============

// Дополни код так, чтобы в переменной allClients получился массив всех элементов массивов oldClients и newClients.
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line

// ================= Задача 16 ==============

// Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух исходных firstArray и secondArray. Параметр maxLength содержит максимально допустимую длину нового массива.

// Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов. В противном случае функция должна вернуть новый массив целиком.

// if (firstArray.concat(secondArray).length > maxLength) {
//   return firstArray.concat(secondArray).slice(0, maxLength);
// } 

//   return firstArray.concat(secondArray);

// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line

// // if (firstArray.concat(secondArray).length > maxLength) {
// //   return firstArray.concat(secondArray).slice(0, maxLength);
// // } 

// //   return firstArray.concat(secondArray);

// return  firstArray.concat(secondArray).length > maxLength ? firstArray.concat(secondArray).slice(0, maxLength) : firstArray.concat(secondArray)

//   // Change code above this line
// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));


// ================= Задача 17 Цикл For ==============

// Дополни цикл for так, чтобы он логировал все целые числа в диапазоне от start до end включительно.
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i +=1 ) { // Change this line
//   console.log(i);
// }

// ================= Задача 18 Цикл For==============

// function calculateTotal(number) {
//   // Change code below this line
//  let sum = 0
// for (let index = 0; index <= number; index += 1) {
//  sum += index;  

// console.log(index);
// }
// //return  sum
// console.log(sum);
//    // Change code above this line
//  }
//  calculateTotal(5)
// ================= Задача 19 ==============

// Дополни код цикла for так, чтобы он последовательно логировал все элементы массива fruits.

// const fruitis = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i+=1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
//   console.log(i);
// }

// ================= Задача 20 ==============
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
// for (let index = 0; index < order.length; index += 1) {
//   total += order[index]
// }
//   // Change code above this line
//   return total;
// }
// Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел, и рассчитывает общую сумму его элементов. Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции.

// ================= Задача 21 ==============

// function findLongestWord(string) {
// //   // Change code below this line

// // const getWords = string.split(" ")
// // console.log(getWords);

// // getWords.reduce()

// // let longeestWord


// // for (let index = 0; index < getWords.length; index++) {
// //   const element = getWords[index].length;
// //   // console.log(getWords[index]);
// //   console.log(element);
  

// // }




// //   // Change code above this line
// // }

// // findLongestWord("The quick brown fox jumped over the lazy dog")
// // ================= Задача 22 ==============

// // function createArrayOfNumbers(min, max) {
// //   const numbers = [];
// //   // Change code below this line
// //  for(let i = min;  i <= max; i++) {
// //     numbers.push(i)
// //     console.log(numbers.push(i));
// //   }
// //   // Change code above this line
// //   console.log(numbers);
  
  
// // }

// // createArrayOfNumbers(5, 10)

// // ================= Задача 23 ==============

// // function filterArray(numbers, value) {
// //   // Change code below this line
// // const newArr = []

// //  for (let index = 0; index < numbers.length; index++) {

// // if(numbers[index] > value)
// //    newArr.push(numbers[index])
// //  }


// //  // Change code above this line
// // }

// // console.log(filterArray([1, 2, 3, 4, 5], 3));


// // ================= Задача 24 Includes()==============
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

// return fruits.includes(fruit)
  
//   return; // Change this line
// }


// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

// return fruits.includes(fruit)
  
//   return; // Change this line
// }


// // ================= Задача 25 Общие элементы ==============

// function getCommonElements(array1, array2) {
//   let result = [];
//     for (let i = 0; i < array1.length; i++) {
//       if (array2.includes(array1[i])) {
//         result.push(array1[i]);
//       }
//     }
//     return result;
//   }

//   getCommonElements([1, 2, 3], [2, 4])
// ================= Задача 26 for...of ==============

// const planets = ["Earth", "Mars", "Venus"];

// for (const planet of planets) {
//   console.log(planet);
// }

// const num = [5, 8, 10];
// let sum = 0
// for (let n of num) {

//  sum += n;
// }
// console.log(sum);

// ================= Задача 27 ==============

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

  

//   for (a of order) {
//       total += a}

//   // Change code above this line
//   return total;
// }

// ================= Задача 28 ==============
// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (let i of numbers) {
//     const number = i;

//     if (number > value) {
//       filteredNumbers.push(number);
//   }
//   }
//   return filteredNumbers;
//   // Change code above this line
// }

// ================= Задача 29 ==============
// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 6;


// ================= Задача 30 ==============
function getEvenNumbers(start, end) {
  let newArr = []
  
  for (let index = start; index <= end; index += 1) {
    if(index % 2 === 0){
     newArr.push(index)
   }
  }
  
  
    
  return newArr
  
  
  }

// ================= Задача 31 break==============
// Дополни код так, чтобы в переменную number записывалось первое число от start до end, которое делится на 5 без остатка.
//   const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//       break;
//   }
// }
    



















