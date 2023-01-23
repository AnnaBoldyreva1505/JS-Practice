// =============== Задача 1 Объекты ===========

// const apartment = {
//    imgUrl: "https://via.placeholder.com/640x480",
//  descr: "Spacious apartment in the city center",
//  rating: 4,
//  price: 2153,
//  tags: ["premium", "promoted", "top"],
//  };

//  console.log(apartment);

// =============== Задача 2 Объекты ===========
//  Дополни объект квартиры свойством owner, значением которого будет объект с информацией о владельце. Добавь ему следующие свойства:

// name - имя владельца, значение "Henry";
// phone - телефон, значение "982-126-1588";
// email - почта, значение "henry.carter@aptmail.com".

// const apartment = {
//    imgUrl: "https://via.placeholder.com/640x480",
//    descr: "Spacious apartment in the city center",
//    rating: 4,
//    price: 2153,
//    tags: ["premium", "promoted", "top"],
//    owner: {
//      name: "Henry",
//        phone: "982-126-1588",
//      email: "henry.carter@aptmail.com",
//    }
//  };

// =============== Задача 3 Объекты ===========

// Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.

// aptRating - рейтинг;
// aptDescr - описание;
// aptPrice - цена;
// aptTags - теги.

// const apartment = {
//    imgUrl: "https://via.placeholder.com/640x480",
//    descr: "Spacious apartment in the city center",
//    rating: 4,
//    price: 2153,
//    tags: ["premium", "promoted", "top"],
//  };
 
//  // Change code below this line
//  const aptRating = apartment.rating;
//  const aptDescr = apartment.descr;
//  const aptPrice = apartment["price"];
//  const aptTags = apartment.tags;
//  // Change code above this line

//  console.log(aptRating);
//  console.log(aptDescr);
//  console.log(aptPrice);
//  console.log(aptTags);

// =============== Задача 4 Объекты ===========
// Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.

// ownerName - имя владельца;
// ownerPhone - телефон владельца;
// ownerEmail - почта владельца;
// numberOfTags - количество элементов массива в свойстве tags;
// firstTag - первый элемент массива в свойстве tags;
// lastTag - последний элемент массива в свойстве tags.

// const apartment = {
//    imgUrl: "https://via.placeholder.com/640x480",
//    descr: "Spacious apartment in the city center",
//    rating: 4,
//    price: 2153,
//    tags: ["premium", "promoted", "top"],
//    owner: {
//      name: "Henry",
//      phone: "982-126-1588",
//      email: "henry.carter@aptmail.com",
//    },
//  };
 
//  // Change code below this line
//  const ownerName = apartment.owner.name;
//  const ownerPhone = apartment.owner.phone;
//  const ownerEmail = apartment.owner.email;
//  const numberOfTags = apartment.tags.length;
//  const firstTag = apartment.tags[0];
//  const lastTag = apartment.tags.pop();

//  console.log(lastTag);
 // Change code above this line
// =============== Задача 5 Объекты ===========
// Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment используя синтаксис «квадратных скобок».

// aptRating - рейтинг;
// aptDescr - описание;
// aptPrice - цена;
// aptTags - теги.

// const apartment = {
//    imgUrl: "https://via.placeholder.com/640x480",
//    descr: "Spacious apartment in the city center",
//    rating: 4,
//    price: 2153,
//    tags: ["premium", "promoted", "top"],
//  };
 
//  // Change code below this line
//  const aptRating = apartment['rating'];
//  const aptDescr = apartment["descr"];
//  const aptPrice = apartment['price'];
//  const aptTags = apartment['tags'];
//  // Change code above this line
// =============== Задача 6 Объекты ===========
// Дополни код обновив значения свойств объекта apartment:

// цену в свойстве price на 5000;
// рейтинг квартиры в свойстве rating на 4.7;
// имя владельца во вложенном свойстве name на "Henry Sibola";
// массив тегов в свойстве tags добавив в конец строку "trusted".

// const apartment = {
//    imgUrl: "https://via.placeholder.com/640x480",
//    descr: "Spacious apartment in the city center",
//    rating: 4,
//    price: 2153,
//    tags: ["premium", "promoted", "top"],
//    owner: {
//      name: "Henry",
//      phone: "982-126-1588",
//      email: "henry.carter@aptmail.com",
//    },
//  };
//  apartment.price = 5000
//  apartment.rating = 4.7
//  apartment.owner.name = "Henry Sibola"
//  apartment.tags.push("trusted")
 // Change code below this line

// =============== Задача 7 Объекты ===========
// Добавь объекту apartment несколько новых свойств:

// area - площадь в квадратных метрах, число 60;
// rooms - количество комнат, число 3;
// location - местоположение квартиры, обьект со следующими вложенными свойствами;
// country - страна, строка "Jamaica";
// city - город, строка "Kingston".

// const apartment = {
//    imgUrl: "https://via.placeholder.com/640x480",
//    descr: "Spacious apartment in the city center",
//    rating: 4.7,
//    price: 5000,
//    tags: ["premium", "promoted", "top", "trusted"],
//    owner: {
//      name: "Henry Sibola",
//      phone: "982-126-1588",
//      email: "henry.carter@aptmail.com",
//    },
//  };
//  apartment.area = 60;
//  apartment.rooms = 3;
//  apartment.location = {
//    country: "Jamaica",
//    city: "Kingston",
//  }

//  console.log(apartment);
// =============== Задача 8 Объекты Короткие свойства===========
// Синтаксис коротких свойств (shorthand properties) решает эту проблему, позволяя использовать имя переменной как имя свойства, а её значение как значение свойства.

// Дополни код объявления объекта так, чтобы у него были свойства name, price, image и tags со значениями из переменных с аналогичными именами. Обязательно используй синтаксис коротких свойств.
// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   // Change code below this line
//   name,
//   price,
//  image ,
//   tags,
  
//   // Change code above this line
// };
// console.log(product);
// =============== Задача 9 Объекты Вычисляемые свойства ===========
// Синтаксис вычисляемых свойств (computed properties) помогает избежать лишнего кода и в некоторых случаях упростить его. Значением вычисляемого свойства может быть любое валидное выражение.

// Дополни код объявления объекта credentials так, чтобы в результате у него были два свойства: email и password, имена которых хранятся в переменных emailInputName и passwordInputName.

// Значением свойства email должна быть строка "henry.carter@aptmail.com", а значением свойства password - строка "jqueryismyjam".

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line

// [emailInputName]: "henry.carter@aptmail.com",
// [passwordInputName]: "jqueryismyjam",
  // Change code above this line
// };
// =============== Задача 10 Объекты for .... in ===========
// В отличии от массива или строки, объект - это не итерируемая сущность, то есть его нельзя перебрать циклами for или for...of. Для перебора объектов используется специальный цикл for...in, который перебирает ключи объекта object.

// for (key in object) {
//   // инструкции
// }
// Переменная key доступная только в теле цикла. На каждой итерации в неё будет записано значение ключа (имя) свойства. Для того чтобы получить значение свойства с таким ключом (именем), используется синтаксис квадратных скобок.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значение свойства с таким ключом
//   console.log(book[key]);
// }

//  const apartment = {
//    descr: "Spacious apartment in the city center",
//    rating: 4,
//    price: 2153,
//  };
//  const keys = [];
//  const values = [];
 
//  for (let key in apartment) {
//    keys.push(key)
//    values.push(apartment[key])
//  }

// console.log(keys);
// console.log(values);

// =============== Задача 11 Объекты for .... in Собственные свойства===========
// при переборе циклом for...in необходимо на каждой итерации добавить проверку на собственное свойство. Даже если сейчас мы уверены в том что у объекта нет несобственных свойств, это оградит от возможных ошибок в будущем.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Если это собственное свойство - выполняем тело if
//   if (book.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(book[key]);
//   }

//   // Если это не собственное свойство - ничего не делаем
// }
// const animal = {
//    legs: 4,
//  };
//  const dog = Object.create(animal);
//  dog.name = "Mango";
 
//  console.log(dog); // {name: 'Mango'}
//  console.log(dog.name); // 'Mango'
//  console.log(dog.legs); // 4

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
// if (apartment.hasOwnProperty(key)) {
//    keys.push(key);
//   values.push(apartment[key]);
// }
 

  // Change code above this line
// }

// function countProps(object) {
//    let propCount = 0;
//    // Change code below this line
//  for (let key in object) {
 
//  if(object.hasOwnProperty(key))
//    propCount += 1
//  }
//  console.log(propCount);
//    // Change code above this line
//    return propCount;
//  }



//  function countProps(object) {
//    let propCount = 0;
//    // Change code below this line
//    for (key in object){
 
//    propCount += object.hasOwnProperty(key)
     
//    }
 
//    // Change code above this line
//    return propCount;
//  }
 

//  countProps({ name: 'Mango', age: 2 })

// =============== Задача 12 Объекты Object.keys(obj), ===========
// У встроенного класса Object есть несколько полезных методов для работы с объектами. Первый из них это Object.keys(obj), который принимает объект и возвращает массив ключей его собственных свойств. Если в объекте нет свойств, метод вернёт пустой массив.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'genres', 'rating']
// Скомбинировав результат Object.keys() и цикл for...of можно удобно перебрать собственные свойства объекта, не прибегая к использованию архаического цикла for...in с проверками принадлежности свойств.

// Перебери объект apartment используя метод Object.keys() и цикл for...of. Запиши в переменную keys массив ключей собственных свойств объекта apartment, и добавь в массив values все значения его свойств.
// Перебери объект apartment используя метод Object.keys() и цикл for...of. Запиши в переменную keys массив ключей собственных свойств объекта apartment, и добавь в массив values все значения его свойств.
// const apartment = {
//    descr: "Spacious apartment in the city center",
//    rating: 4,
//    price: 2153,
//  };
//  const values = [];
//  // Change code below this line
//  const keys = Object.keys(apartment);
 
//  for (let key of keys) {
//    values.push(apartment[key])
//  }

//  console.log(values);

// =============== Задача 13 Объекты ===========
// Выполни рефакторинг функции countProps(object) используя метод Object.keys() и, возможно, но необязательно, цикл for...of.
// function countProps(object) {
//    // Change code below this line
//    let propCount = 0;
 
//    for (const key in object) {
//      if (object.hasOwnProperty(key)) {
//        propCount += 1;
//      }
//    }
 
//    return propCount;
//    // Change code above this line
//  }
 

// function countProps(object) {
//    // Change code below this line
//    let propCount = 0;
 
//    for (const key of Object.keys(object)) {
     
//        propCount += 1;
     
//    }
 
//    return propCount;
//    // Change code above this line
//  }
 

// =============== Задача 14 Объекты Object.values(obj)===========

// Если метод Object.keys(obj) возвращает массив ключей собственных свойств объекта, то метод Object.values(obj) возвращает массив значений его собственных свойств. Если в объекте нет свойств, метод Object.values(obj) вернёт пустой массив.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ["title", "author", "rating"]

// const values = Object.values(book);
// console.log(values); // ["The Last Kingdom", "Bernard Cornwell", 8.38]
// Массив значений свойств также можно перебрать циклом for...of, например для получения общей суммы числовых значений.


// const apartment = {
//    descr: "Spacious apartment in the city center",
//    rating: 4,
//    price: 2153,
//  };
//  // Change code below this line
//  const keys = Object.keys(apartment);
//  const values = Object.values(apartment);

//  console.log(keys);

//  console.log(values);

// =============== Задача 15 Объекты ===========

// Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, где имя свойства это имя сотрудника, а значение свойства это зарплата. Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её. Используй переменную totalSalary для хранения общей суммы зарплаты.

// function countTotalSalary(salaries) {
//    let totalSalary = 0;
//    // Change code below this line
 
 
//  for (let name of Object.values(salaries)) {
//    totalSalary += name
//  }
   
//    // Change code above this line
//    return totalSalary;
//  }

// =============== Задача 16 Объекты ===========

// Перебери массив объектов colors используя цикл for...of. Добавь в массив hexColors значения свойств hex, а в массив rgbColors значения свойств rgb из всех объектов массива colors.

// const colors = [
//    { hex: "#f44336", rgb: "244,67,54" },
//    { hex: "#2196f3", rgb: "33,150,243" },
//    { hex: "#4caf50", rgb: "76,175,80" },
//    { hex: "#ffeb3b", rgb: "255,235,59" },
//  ];
 
//  const hexColors = [];
//  const rgbColors = [];
//  // Change code below this line
 
//  for (let color of colors) {
//    hexColors.push(color.hex)
//    rgbColors.push(color.rgb)
//  }

// =============== Задача 17 Объекты ===========

// const products = [
//    { name: "Radar", price: 1300, quantity: 4 },
//    { name: "Scanner", price: 2700, quantity: 3 },
//    { name: "Droid", price: 400, quantity: 7 },
//    { name: "Grip", price: 1200, quantity: 9 },
//  ];
 
//  function getProductPrice(productName) {
//    // Change code below this line
 
//    for (let product of products) {
   
//    if(productName.includes(product.name))
//        return product.price
     
//  }
//  return null
//    // Change code above this line
//  }

//  function getProductPrice(productName) {
//    for (const product of products) {
//      if (product.name === productName) {
//        return product.price;
//      }
//    }
//    return null;
//  }




// =============== Задача 19 Объекты ===========
// Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) свойства. Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products. Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.

// const products = [
//    { name: "Radar", price: 1300, quantity: 4 },
//    { name: "Scanner", price: 2700, quantity: 3 },
//    { name: "Droid", price: 400, quantity: 7 },
//    { name: "Grip", price: 1200, quantity: 9 },
//  ];
 
 
 
//  function getAllPropValues(propName) {
//    const propValues = [];
//    for (const product of products) {
//      if (product.hasOwnProperty(propName)) {
//        propValues.push(product[propName]);
//      }
//    }
//    return propValues;
//  }
 


// =============== Задача 20 Объекты ===========
// Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара. Функция должна вернуть общую стоимость (цена * количество) товара с таким именем из массива products.

// const products = [
//    { name: "Radar", price: 1300, quantity: 4 },
//    { name: "Scanner", price: 2700, quantity: 3 },
//    { name: "Droid", price: 400, quantity: 7 },
//    { name: "Grip", price: 1200, quantity: 9 },
//  ];
 
 
//  function calculateTotalPrice(productName) {
//    // Пиши код ниже этой строки
 
//  for (let product of products) {
//    console.log(product)
//    if (productName === product.name) {
//      return product.price * product.quantity
   
//    }
 
//  }
//  return null
   // Пиши код выше этой строки
//  }

// =============== Задача 21 Объекты ===========

// const highTemperatures = {
//    yesterday: 28,
//    today: 26,
//    tomorrow: 33,
//  };
 
//  const {yesterday, today, tomorrow} = highTemperatures
 
 
//  const meanTemperature = (yesterday + today + tomorrow) / 3;
 
// =============== Задача 22 Объекты ===========
// В прогнозе максимальных температур также может быть необязательное свойство icon - иконка погоды. Замени объявления переменных yesterday, today, tomorrow и icon одной операцией деструктуризации свойств объекта highTemperatures. Задай значение по умолчанию для icon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
// const highTemperatures = {
//    yesterday: 28,
//    today: 26,
//    tomorrow: 33,
//  };
//  // Change code below this line
 
//  const {
//    yesterday,
//    today,
//    tomorrow,
   
//    icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//  } = highTemperatures
   
//  // Change code above this line
//  const meanTemperature = (yesterday + today + tomorrow) / 3;
// =============== Задача 23 Объекты ===========

// Замени объявления переменных highYesterday, highToday, highTomorrow и highIcon одной операцией деструктуризации свойств объекта highTemperatures. Задай значение по умолчанию для highIcon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const highTemperatures = {
//    yesterday: 28,
//    today: 26,
//    tomorrow: 33,
//  };
//  // Change code below this line
 
//  const {yesterday: highYesterday , today: highToday, tomorrow: highTomorrow, icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures
 
 
//  // Change code above this line
//  const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
// =============== Задача 24 Объекты ===========
// Выполни рефакторинг цикла for...of так, чтобы в нём использовалась деструктуризация объекта..
// const colors = [
//    { hex: "#f44336", rgb: "244,67,54" },
//    { hex: "#2196f3", rgb: "33,150,243" },
//    { hex: "#4caf50", rgb: "76,175,80" },
//    { hex: "#ffeb3b", rgb: "255,235,59" },
//  ];
 
//  const hexColors = [];
//  const rgbColors = [];
//  // Change code below this line
 
//  for (const {hex, rgb} of colors) {
//    hexColors.push(hex);
//    rgbColors.push(rgb);
//  }
// =============== Задача 25 Объекты ===========
// const forecast = {
//    today: {
//      low: 28,
//      high: 32,
//      icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//    },
//    tomorrow: {
//      low: 27,
//      high: 31,
//    },
//  };
//  // Change code below this line
 
//  const { 
//    today: { low: lowToday, high: highToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"},
//    tomorrow: {low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"},} = forecast;