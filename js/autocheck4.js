// ====================== Задача 1 ===================
// Дополни код так, чтобы в переменной result был результат выполнения функции makePizza, а в переменной pointer была ссылка на функцию makePizza.
// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result = makePizza();
// const pointer = makePizza;

// console.log(makePizza());
// console.log(makePizza);
// ====================== Задача 2 ===================
// Дополни функцию makeMessage так, чтобы она ожидала вторым параметром (параметр callback) колбэк-функцию и возвращала ее вызов. Функция deliverPizza или makePizza будет передаваться как колбэк и ожидать аргументом имя готовой доставляемой пиццы.
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
  
//   return callback(pizzaName);
// }
// console.log(makeMessage("Royal Grand", makePizza));


// ====================== Задача 3 ===================


// Дополни второй вызов функции makePizza(pizzaName, callback), передав вторым аргументом инлайн колбэк-функцию eatPizza(pizzaName), которая логирует строку "Eating pizza <имя пиццы>".

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function deliverPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}.`);
// });


// ====================== Задача 4 ===================

// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoke', 'Four meats'],
//   order(pizzaName, makePizza, onOrderError) {

//     if(this.pizzas.includes(pizzaName)){
//       return makePizza(pizzaName)
      
//     } 
//      return  onOrderError(`There is no pizza with a name ${pizzaName} in the assortment.`)
       
   
//   },
// };
// // Change code above this line



// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }


// // Method calls with callbacks
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);


// ====================== Задача 5 ===================
// Функция calculateTotalPrice(orderedItems) принимает один параметр orderedItems - массив чисел, и рассчитывает общую сумму его элементов, которая сохраняется в переменной totalPrice и возвращается как результат работы функции.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   // for (let i = 0; i < orderedItems.length; i += 1) {
//   //   totalPrice += orderedItems[i];
//   // }

//   orderedItems.forEach(function (index) {
//     totalPrice += index
//   })

//   // Change code above this line
//   return totalPrice;
// }

// calculateTotalPrice([12, 85, 37, 4])

// ====================== Задача 6 ===================
// Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив, в котором будут только те элементы оригинального массива, которые больше чем значение параметра value.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   numbers.forEach((index) => {

//     if(index > value){
//       filteredNumbers.push(index)
//     }
    
//   })

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] > value) {
//   //     filteredNumbers.push(numbers[i]);
//   //   }
//   // }

//   // Change code above this line
//   return filteredNumbers;
// }

// ====================== Задача 7 ===================
// Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины в параметры firstArray и secondArray, и возвращает новый массив их общих элементов, то есть тех которые есть в обоих массивах.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line


// firstArray.forEach((index) => {
//   if (secondArray.includes(index)) {
//      commonElements.push(index);
//     }
// })

  
//   // for (let i = 0; i < firstArray.length; i += 1) {
//   //   if (secondArray.includes(firstArray[i])) {
//   //     commonElements.push(firstArray[i]);
//   //   }
//   // }

//   return commonElements;
//   // Change code above this line
// }


// ====================== Задача 8 ===================

// Выполни рефакторинг функции calculateTotalPrice() так, чтобы она была объявлена как стрелочная.
// // Change code below this line

// // function calculateTotalPrice(quantity, pricePerItem) {
// //   // Change code above this line
// //   return quantity * pricePerItem;
// // }


// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// }


// ====================== Задача 9 ===================
// Выполни рефакторинг функции calculateTotalPrice() так, чтобы она использовала неявный возврат.
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// ====================== Задача 10 ===================
// Выполни рефакторинг функции calculateTotalPrice(orderedItems) заменив её объявление на стрелочную функцию. Замени коллбек-функцию передаваемую в метод forEach() на стрелочную функцию.
// // Change code below this line
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });

//   return totalPrice;
// }
// Change code above this line

// ====================== Задача 11 ===================
// Замени объявление функции filterArray() и коллбек для метода forEach() на стрелочные функции.
// Change code below this line
// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];
//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });
//    return filteredNumbers
// }
// ====================== Задача 12 ===================
// Замени объявление функции getCommonElements() и коллбек для метода forEach() на стрелочные функции.

// // Change code below this line
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach((element) => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Change code above this line
//   return commonElements;
// }
// ====================== Задача 13 ===================

// const changeEven = (numbers, value) => {
//   // Change code below this line
//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] % 2 === 0) {
//   //     numbers[i] = numbers[i] + value;
//   //   }
//   // }
//   // Change code above this line
// const newArr = []

// numbers.forEach((index) => {
//   if(index % 2 === 0){
//     newArr.push(index + value)
//   }
// })

  
// }
// ====================== Задача 14 ===================

// Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент, значение которого это чётное число, добавляя к нему значение параметра value.

// Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers, а создавала, наполняла и возвращала новый массив с обновлёнными значениями.

// function changeEven(numbers, value) {
//   // Change code below this line
// const newArray = [];
//   numbers.forEach(element => {
//     if (element % 2 === 0) {
//       newArray.push(element + value)
//     } else{
//       newArray.push(element)
//     }
//   });

//   return newArray;
// };
// ====================== Задача 15 ===================

// Дополни код так, чтобы в переменной planetsLengths получился массив длин названий планет. Обязательно используй метод map().
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(elem => elem.length);
// ====================== Задача 16 ===================
// Используя метод map() сделай так, чтобы в переменной titles получился массив названий книг (свойство title) из всех объектов массива books.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map(book => book.title);
// ====================== Задача 17 ===================
// Используя метод flatMap() сделай так, чтобы в переменной genres получился массив всех жанров книг (свойство genres) из массива книг books
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line

// const genres = books.flatMap(book => book.genres);

// ====================== Задача 18 ===================
// Дополни функцию getUserNames(users) так, чтобы она возвращала массив имён пользователей (свойство name) из массива объектов в параметре users.
// Этот массив объектов мы будем передавать в параметр users при вызове функции из задания.

// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];
// // Change code below this line
// const getUserNames = users => {
 
//   return users.map(user => user.name)

//  };
//  // Change code above this line


// // Дополни функцию getUserNames(users) так, чтобы она возвращала массив имён пользователей (свойство name) из массива объектов в параметре users.

// ====================== Задача 19 ===================
// Дополни функцию getUserEmails(users) так, чтобы она возвращала массив почтовых адресов пользователей (свойство email) из массива объектов в параметре users.
// // Change code below this line
// const getUserEmails = users => {

//   return users.map(user => user.email)

//   };
  // Change code above this line

// Дополни функцию getUserEmails(users) так, чтобы она возвращала массив почтовых адресов пользователей (свойство email) из массива объектов в параметре users.
// ====================== Задача 20 ===================
// Дополни код так, чтобы в переменной evenNumbers получился массив чётных чисел из массива numbers, а в переменной oddNumbers массив нечётных. Обязательно используй метод filter().

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);
// ====================== Задача 21 ===================

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(author => author.author === AUTHOR);

// // ====================== Задача 22 ===================
// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// Дополни функцию getUsersWithEyeColor(users, color) так, чтобы она возвращала массив пользователей у которых цвет глаз (свойство eyeColor) совпадает со значением параметра color.



// // Change code below this line
// const getUsersWithEyeColor = (users, color) => {
 
//   return users.filter(user => user.eyeColor === color)
//   };
  // Change code above this line

// ====================== Задача 23 ===================
// Дополни функцию getUsersWithAge(users, minAge, maxAge) так, чтобы она возвращала массив пользователей, возраст которых (свойство age) попадает в промежуток от minAge до maxAge.
// const getUsersWithAge = (users, minAge, maxAge) => {

//   return users.filter(user => user.age >= minAge && user.age < maxAge)

// };
// ====================== Задача 24 ===================
// Дополни функцию getUsersWithFriend(users, friendName) так, чтобы она возвращала массив пользователей у которых есть друг с именем в параметре friendName. Массив друзей пользователя хранится в свойстве friends.
// const getUsersWithFriend = (users, friendName) => {
//   return users.filter(user => user.friends.includes(friendName))
// };
// // ====================== Задача 25 ===================

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]


// Change code below this line
// const getFriends = (users) => {
// users.filter(user => user.friend)
// };

// getFriends(users)
// // Change code above this line

// ====================== Задача 26 ===================
// Дополни функцию getActiveUsers(users) так, чтобы она возвращала массив активных пользователей, значение свойства isActive которых true.
// // Change code below this line
// const getActiveUsers = (users) => {
//   return users.filter(user => user.isActive === true)
// };
// Change code above this line
// ====================== Задача 27  ==================
// Дополни функцию getInactiveUsers(users) так, чтобы она возвращала массив неактивных пользователей, значение свойства isActive которых false.

// // Change code below this line
// const getInactiveUsers = (users) => {
//   return users.filter(user => user.isActive !== true)
// };
// Change code above this line
// ====================== Задача 28 ===================
// Используя метод find() дополни код так, чтобы:

// В переменной bookWithTitle получился объект книги название которой (свойство title) совпадает со значением переменной BOOK_TITLE.
// В переменной bookByAuthor получился объект книги автор который (свойство author) совпадает со значением переменной AUTHOR.

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';
// // Change code below this line

// const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
// const bookByAuthor = books.find((book) => book.author === AUTHOR);

// // ====================== Задача 29 ===================
// Дополни функцию getUserWithEmail(users, email) так, чтобы она возвращала объект пользователя, почта которого (свойство email) совпадает со значением параметра email.
// // Change code below this line
// const getUserWithEmail = (users, email) => {
//   return users.find((user) => user.email === email)
// };
// Change code above this line

// ====================== Задача 30 ===================

// Используя метод every() дополни код так, чтобы:

// В переменной eachElementInFirstIsEven был результат проверки всех элементов массива firstArray на чётность.
// В переменной eachElementInFirstIsOdd был результат проверки всех элементов массива firstArray на нечётность.
// В переменной eachElementInSecondIsEven был результат проверки всех элементов массива secondArray на чётность.
// В переменной eachElementInSecondIsOdd был результат проверки всех элементов массива secondArray на нечётность.
// В переменной eachElementInThirdIsEven был результат проверки всех элементов массива thirdArray на чётность.
// В переменной eachElementInThirdIsOdd был результат проверки всех элементов массива thirdArray на нечётность.


// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every((value) => value % 2 ===0);
// const eachElementInFirstIsOdd = firstArray.every((value) => value % 2 !==0);

// const eachElementInSecondIsEven = secondArray.every((value) => value % 2 ===0);
// const eachElementInSecondIsOdd = secondArray.every((value) => value % 2 !==0);

// const eachElementInThirdIsEven = thirdArray.every((value) => value % 2 ===0);
// const eachElementInThirdIsOdd = thirdArray.every((value) => value % 2 !==0);
// ====================== Задача 31 ===================
// Change code below this line

// Дополни функцию isEveryUserActive(users) так, чтобы она проверяла все ли пользователи сейчас активны (свойство isActive) и возвращала true или false.

// const isEveryUserActive = (users) => {
//   return users.every((user) => user.isActive)
// };
// Change code above this line

// ====================== Задача 32 ===================
// Используя метод some() дополни код так, чтобы:

// В переменной anyElementInFirstIsEven был результат проверки наличия чётных элементов в массиве firstArray.
// В переменной anyElementInFirstIsOdd был результат проверки наличия нечётных элементов в массиве firstArray.
// В переменной anyElementInSecondIsEven был результат проверки наличия чётных элементов в массиве secondArray.
// В переменной anyElementInSecondIsOdd был результат проверки наличия нечётных элементов в массиве secondArray.
// В переменной anyElementInThirdIsEven был результат проверки наличия чётных элементов в массиве thirdArray.
// В переменной anyElementInThirdIsOdd был результат проверки наличия нечётных элементов в массиве thirdArray.
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some((number) => number % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some((number) => number % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some((number) => number % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some((number) => number % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some((number) => number % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some((number) => number % 2 !== 0);

// ====================== Задача 33 ===================
// Дополни функцию isAnyUserActive(users) так, чтобы она проверяла наличие активных пользователей (свойство isActive) и возвращала true или false.
// // Change code below this line
// const isAnyUserActive = users => {
//   return users.some((user) => user.isActive)
// };
// // Change code above this line
// ====================== Задача 34 ===================
// Метод reduce(callback, initialValue) используется для последовательной обработки каждого элемента массива с сохранением промежуточного результата, как аккумулятор. Немного сложнее других в усвоении, но результат стоит того.

// массив.reduce((previousValue, element, index, array) => {
//   // Тело коллбек-функции
// }, initialValue);
// Не изменяет оригинальный массив.
// Поэлементно перебирает оригинальный массив.
// Возвращает что угодно.
// Делает что угодно.
// Легче всего представить его работу на примере подсчёта суммы элементов массива.

// const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);

// console.log(total); // 32
// Первый параметр коллбек-функции (previousValue) это аккумулятор, то есть промежуточный результат. Значение которое вернёт коллбек-функция на текущей итерации, будет значением этого параметра на следующей.

// Вторым аргументом для reduce() можно передать необязательное начальное значение аккумулятора - параметр initialValue.

// # Вначале метод reduce() создаёт внутреннюю переменную-аккумулятор и
// # присваивает ей значение параметра initialValue или первого элемента
// # перебираемого массива, если initialValue не задан.
// previousValue = 0

// # Далее коллбек-функция вызывается для каждого элемента массива. Текущее значение
// # параметра previousValue это то, что вернула коллбек-функция на прошлой итерации.
// Итерация 1 -> previousValue = 0 -> number = 2 -> return 0 + 2 -> return 2
// Итерация 2 -> previousValue = 2 -> number = 7 -> return 2 + 7 -> return 9
// Итерация 3 -> previousValue = 9 -> number = 3 -> return 9 + 3 -> return 12
// Итерация 4 -> previousValue = 12 -> number = 14 -> return 12 + 14 -> return 26
// Итерация 5 -> previousValue = 26 -> number = 6 -> return 26 + 6 -> return 32

// # После того как весь массив перебран, метод reduce() возвращает значение аккумулятора.
// Результат - 32
// То есть метод reduce() используется когда необходимо взять «много» и привести к «одному». В повседневных задачах его применение сводится к работе с числами.

// ====================== Задача 35 ===================
// Игровому сервису необходим функционал подсчёта среднего времени проведённого в играх. Дополни код так, чтобы в переменной totalPlayTime получилось общее игровое время из массива playtimes.
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;
// ====================== Задача 36 ===================

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((total, player) => {
//   return total + player.playtime / player.gamesPlayed;
// }, 0);



// Нашему сервису необходимо рассчитать среднее время проведённое в одной игре для каждого игрока, и получить общую сумму этих времён. Рассчитать время для каждого из игроков, можно разделив его время (свойство playtime) на количество игр (свойство gamesPlayed).
// ====================== Задача 37 ===================
// Change code below this line
// const calculateTotalBalance = users => {
//   const sum = users.reduce((total, totalSum) => {
//      return total + totalSum.balance
//     }, 0);
// return sum;

     
// };


// Дополни функцию calculateTotalBalance(users) так, чтобы она считала и возвращала сумму всех средств (свойство balance) которые хранят пользователи из массива users.
// ====================== Задача 38 ===================
// Дополни функцию getTotalFriendCount(users) так, чтобы она считала и возвращала общее количество друзей (свойство friends) всех пользователей из массива users.

// // Change code below this line
// const getTotalFriendCount = users => {
//   const allFriends = users.reduce((total, friend) => {
//     return total + friend.friends.length
//   }, 0);
//  return allFriends;
// };
// ====================== Задача 39 ===================

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();

// Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная по возрастанию копия массива releaseDates, а в переменной alphabeticalAuthors копия массива имён авторов authors отсортированная в по алфавиту.
// ====================== Задача 40 ===================
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);
// Онлайн бибилиотеке необходимо отображать книги сортированные по дате издания, по её возрастанию или убыванию. Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная по возрастанию копия массива releaseDates, а в переменной descendingReleaseDates копия отсортированная по убыванию.
// ====================== Задача 41 ===================
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];
// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

// Онлайн бибилиотеке необходимо отображать книги отсортированные по автору, в алфавитном и обратном алфавитном порядке. Дополни код так, чтобы в переменной authorsInAlphabetOrder получилась отсортированная по алфавиту копия массива authors, а в переменной authorsInReversedOrder копия отсортированная в обратном алфавитном порядке.
// ====================== Задача 42 ===================
// Дополни код так, чтобы:

// В переменной sortedByAuthorName получился массив книг отсортированный по имени автора в алфавитном порядке.
// В переменной sortedByReversedAuthorName получился массив книг отсортированный по имени автора в обратном алфавитном порядке.
// В переменной sortedByAscendingRating получился массив книг отсортированный по возрастанию рейтинга.
// В переменной sortedByDescentingRating получился массив книг отсортированный по убыванию рейтинга.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((firstAuthor, secondAuthor) => firstAuthor.author.localeCompare(secondAuthor.author));

// const sortedByReversedAuthorName = [...books].sort((firstAuthor, secondAuthor) => secondAuthor.author.localeCompare(firstAuthor.author));

// const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);

// const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);


// ====================== Задача 43 ===================
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// const sortByAscendingBalance = users => {
//   return [...users].sort((a, b) => a.balance - b.balance)
// };
// Change code above this line


// Дополни функцию sortByAscendingBalance(users) так, чтобы она возвращала массив пользователей отсортированный по возрастанию их баланса (свойство balance).


// ====================== Задача 44 ===================
// Change code below this line
// const sortByDescendingFriendCount = users => {
//   return [...users].sort((a, b) => b.friends.length - a.friends.length);

// };
// // Change code above this line

// Дополни функцию sortByDescendingFriendCount(users) так, чтобы она возвращала массив пользователей отсортированный по убыванию количества их друзей (свойство friends).
// ====================== Задача 45 ===================

// Дополни функцию sortByName(users) так, чтобы она возвращала массив пользователей отсортированный по их имени (свойство name) в алфавитном порядке.


// // Change code below this line
// const sortByName = users => {
//   return [...users].sort((a, b) => a.name.localeCompare(b.name))
// };
// Change code above this line

// ====================== Задача 46 ===================
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // // Change code below this line




// const names = [...books]
//   .filter(value => value.rating > MIN_BOOK_RATING)
//   .sort((a, b) => a.author.localeCompare(b.author))
//   .map(book => book.author);

//   console.log(names);
// ====================== Задача 47 ===================

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]


// const getNamesSortedByFriendCount = users => {

// return [...users].sort((a, b) => a.friends.length.localeCompare(b.name.length))

// };
// getNamesSortedByFriendCount(users)

// console.log(getNamesSortedByFriendCount(users));
// // ====================== Задача 48 ===================

// // Change code below this line
// const getNamesSortedByFriendCount = users => {
//   const result = [...users].sort((a, b) => a.friends.length - b.friends.length).map(userName => userName.name)
//  return result
// };
// // Change code above this line
// Дополни функцию getNamesSortedByFriendCount(users) так, чтобы она возвращала массив имён пользователей отсортированный по возрастанию количества их друзей (свойство friends).

// ====================== ЗАДАНИЕ ОТ САНДРЫ ===================


// const arr = [
//   { name: "Albert", surname: "Einstein", born: 1879, dead: 1955, id: 1 },
//   { name: "Isaac", surname: "Newton", born: 1643, dead: 1727, id: 2 },
//   { name: "Galileo", surname: "Galilei", born: 1564, dead: 1642, id: 3 },
//   { name: "Marie", surname: "Curie", born: 1867, dead: 1934, id: 4 },
//   { name: "Pierre", surname: "Curie", born: 1859, dead: 1906, id: 5 },
//   { name: "Johannes", surname: "Kepler", born: 1571, dead: 1630, id: 6 },
//   { name: "Nicolaus", surname: "Copernicus", born: 1473, dead: 1543, id: 7 },
//   { name: "Max", surname: "Planck", born: 1858, dead: 1947, id: 8 },
//   { name: "Katherine", surname: "Blodgett", born: 1898, dead: 1979, id: 9 },
//   { name: "Ada", surname: "Lovelace", born: 1815, dead: 1852, id: 10 },
//   { name: "Sarah E.", surname: "Goode", born: 1855, dead: 1905, id: 11 },
//   { name: "Lise", surname: "Meitner", born: 1878, dead: 1968, id: 12 },
//   { name: "Hanna", surname: "Hammarström", born: 1829, dead: 1909, id: 13 }
//   ];
  

//   // const allScientist = []
//   //   for (const elem of arr) {
//   //     allScientist.push(elem.name)
//   //   }

//   //   console.log(allScientist);


//   ///////////////////////////// - Получить массив ученых, родившихся в 19 веке.///////////////////////
//   // Вариант 1
//     // const allScientistBorn19Centery = []
//     // for (const elem of arr) {
//     //   if(elem.born > 1800 && elem.born < 1900) 
//     //   allScientistBorn19Centery.push(elem)
//     // }

//     // console.log(allScientistBorn19Centery);


// // Вариант 2
// // const scientists = arr.filter(scientist => scientist.born >= 1800 && scientist.born < 1900);
// // console.log(scientists);
  
// //////////////////////////// - Найти общую сумму лет, сколько прожили все ученые./////////////////////////
// // Вариант 1
// // let sumOfYearsLived = 0
// // for (const elem of arr) {
// //   sumOfYearsLived += elem.dead - elem.born
// // }
// // console.log(sumOfYearsLived);
// // // Вариант 2
// // const totalYears = arr.reduce((acc, scientist) => acc + (scientist.dead - scientist.born), 0);
// // console.log(totalYears);



// ////////////////////////// - Отсортировать ученых по алфавиту.////////////////////////////////////////////


// // const scientistsAZ = arr.sort((a, b) => a.surname.localeCompare(b.surname))
// // console.log(scientistsAZ);

// // const scientistsAZ2 = arr.sort((a, b) => a.name.localeCompare(b.name));
// // console.log(scientistsAZ2);



// /////////////////////// - Отсортировать ученых по количеству прожитых лет.////////////////////////////////////

// // const AZ = arr.sort((a, b) => (a.dead - a.born) - (b.dead - b.born))

// // console.log(AZ);


// // const ZA = [arr].sort((a, b) => (b.dead - b.born) - (a.dead - a.born));
// // console.log(ZA);




// ///////////////////Удалить из массива ученых, родившихся в 15, 16 или 17 веках./////////////////////////////

//     // const allScientistBorn18Centery = []
//     // for (const elem of arr) {
//     //   if(elem.born > 1700) 
//     //   allScientistBorn18Centery.push(elem)

//     // }

//     // console.log(allScientistBorn18Centery);


//     // const filteredArr = arr.filter(scientist => scientist.born >= 1700);
//     // console.log(filteredArr);


//     // for (const scientist of arr) {
//     //   if (scientist.born < 1700) {
//     //     const index = arr.indexOf(scientist);
//     //     arr.splice(index, 1);
//     //   }
//     // }


//     ////////////////// - Найти год рождения Albert Einstein./////////////////////////


//     // let bDayEinstein = arr.find(option => option.surname === "Einstein").born;
//     // console.log(bDayEinstein);



//     // for (const scientist of arr) {
//     //   if (scientist.name === "Albert" && scientist.surname === "Einstein") {
//     //     console.log(scientist.born);
//     //     break;
//     //   }
//     // }


//     // const einstein = arr.find(scientist => scientist.name === "Albert" && scientist.surname === "Einstein");
//     // console.log(einstein.born);





//     //////////////// - Найти ученых, фамилия которых начинается на букву "С"./////////////////////
// //  const C = [...arr].filter(scientist => scientist.surname[0] === "C");
// //  console.log(C);

// //  const scientists = arr.filter(scientist => scientist.surname.startsWith("C"));

// //  let scientists2 = [];
// //  for (const scientist of arr) {
// //      if (scientist.surname.startsWith("C")) {
// //          scientists.push(scientist);
// //      }
// //  }
 


// //////////////// - Удалить из массива всех ученых, имя которых начинается на букву "A".////////////////////
//  const filteredArr = arr.filter(scientist => scientist.name[0] !== "A");
//  console.log(filteredArr);

//  const scientistsWithoutA = arr.filter(scientist => !scientist.name.startsWith("A"));


//     // for (const scientist of arr) {
//     //   if (scientist.born < 1700) {
//     //     const index = arr.indexOf(scientist);
//     //     arr.splice(index, 1);
//     //   }
//     // }



// /////////////////// - Найти ученого, который родился позже всех.////////////////////////

// let max = arr.reduce((acc, curr) => acc.born > curr.born ? acc : curr);
 
// console.log(max);





// ///////////////// - Найти ученого, который прожил больше всех и ученого, который меньше.///////////////



// //сздать новое свойство
// // const scientists = arr.map(scientist => {
// //   scientist.lifespan = scientist.dead - scientist.born;
// //   return scientist;
// // });

// // const longestLived = scientists.reduce((longest, current) => {
// //   return (longest.lifespan > current.lifespan) ? longest : current
// // }, { lifespan: 0 });
// // console.log(longestLived);

// // const shortestLived = scientists.reduce((shortest, current) => {
// //   return (shortest.lifespan < current.lifespan) ? shortest : current
// // }, { lifespan: Number.MAX_SAFE_INTEGER });
// // console.log(shortestLived);



// let oldest = arr.reduce((a, b) => (a.dead - a.born > b.dead - b.born) ? a : b);
// let youngest = arr.reduce((a, b) => (a.dead - a.born < b.dead - b.born) ? a : b);

// console.log("oldest", oldest);
// console.log("youngest", youngest);

// // - Найти ученых, у которых совпадают первые буквы имени и фамилии.

// const connect = arr.filter(scientist => scientist.name[0] === scientist.surname[0])
// console.log(connect);



// // - Узнать, все ли ученые работали в 19 веке.


// let allWorkedIn19thCentury = arr.every(scientist => scientist.born >= 1800 && scientist.born < 1900);
// console.log(allWorkedIn19thCentury);