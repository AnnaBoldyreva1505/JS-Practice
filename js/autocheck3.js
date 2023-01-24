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



// =============== Задача 26 Объекты ===========

// Функция calculateMeanTemperature(forecast) принимает один параметр forecast - объект температур на два дня следующего формата.

// {
//   today: { low: 10, high: 20 },
//   tomorrow: { low: 20, high: 30 }
// }
// Замени объявления переменных todayLow, todayHigh, tomorrowLow и tomorrowHigh одной операцией деструктуризации свойств объекта forecast.

// Change code below this line
// function calculateMeanTemperature(forecast) {

//    const {today: {low:todayLow, high:todayHigh}, tomorrow: {low:tomorrowLow, high:tomorrowHigh}} = forecast
   
 
 
//    // Change code above this line
//    return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
//  }


// =============== Задача 27 Объекты ===========

// Синтаксис ... (spread) позволяет распылить коллекцию элементов (массив, строку или объект) в место, где ожидается набор отдельных значений. Конечно есть некоторые ограничения, например нельзя распылить массив в объект и наоборот.

// Можно привести аналогию с ящиком яблок. Поставив ящик на пол не вынимая из него яблоки, получим аналог массива значений. Если высыпать яблоки из ящика на пол, произойдёт распыление - набор отдельных значений.

// Отличие всего одно - в JavaScript распыление не изменяет оригинальную коллекцию, то есть делается копия каждого элемента. После распыления останется и ящик полный яблок, и копия каждого яблока на полу.

// В переменной scores хранится массив результатов тестирования. Используя распыление и методы Math.max() и Math.min() дополни код так, чтобы в переменной bestScore был самый высокий балл, а в worstScore самый низкий.

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore);
// console.log(worstScore);
// =============== Задача 28 Объекты spread===========

// Операция spread позволяет создать копию массива или «склеить» произвольное количество массивов в один новый. Раньше для этого использовали методы slice() и concat(), но операция распыления позволяет сделать тоже самое в более краткой форме.

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores) ;

// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);
// =============== Задача 29 Объекты ===========
// В конструкторе можно создавать новые тесты, для которых есть настройки по умолчанию которые хранятся в переменной defaultSettings. Во время создания теста, все или часть настроек можно переопределить, они хранятся в переменной overrideSettings.

// Для того чтобы получить финальные настройки теста, необходимо взять настройки по умолчанию и поверх них применить переопределённые настройки. Дополни код так, чтобы в переменной finalSettings получился объект финальных настроек теста.

// const defaultSettings = {
//    theme: "light",
//    public: true,
//    withPassword: false,
//    minNumberOfQuestions: 10,
//    timePerQuestion: 60,
//  };
//  const overrideSettings = {
//    public: false,
//    withPassword: true,
//    timePerQuestion: 30,
//  };
//  // Change code below this line
//  const finalSettings = {...defaultSettings, ...overrideSettings};
// =============== Задача 30 Объекты ===========
// Напиши функцию makeTask(data) которая принимает один параметр data - объект со следующими свойствами.

// text - текст задачи.
// category - категория задачи.
// priority - приоритет задачи.
// Функция должна составить и вернуть новый объект задачи, не изменяя напрямую параметр data. В новом объекте должно быть свойство completed, значение которого хранится в одноимённой локальной переменной.

// В параметре data гарантированно будет только свойство text, а остальные два, category и priority, могут отсутствовать. Тогда, в новом объекте задачи, в свойствах category и priority должны быть значения по умолчанию, хранящиеся в одноимённых локальных переменных.
// function makeTask(data) {
//    const completed = false;
//    const category = "General";
//    const priority = "Normal";
//    // Change code below this line
//   return {completed, category, priority, ...data};
 

  
//    // Change code above this line
//  }

//  makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" })

//  console.log( makeTask({}));

// =============== Задача 31 Объекты ===========
// Используя операцию rest дополни код функции add() так, чтобы она принимала любое количество аргументов, считала и возвращала их сумму.
// // Change code below this line
// function add(...args) {
//    // Change code above this line
 
//    let sum = 0;
 
//    for (const arg of args) {
//     sum += arg
 
//    }
//    return sum
//  }
// =============== Задача 32 Объекты ===========
// Операция ... (rest) также позволяет собрать в массив только ту часть аргументов, которая необходима, объявив параметры до «сбора».

// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   console.log(firstNumber); // Значение первого аргумента
//   console.log(secondNumber); // Значение второго аргумента
//   console.log(otherArgs); // Массив остальных аргументов
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);
// Все аргументы, для которых будут объявлены параметры, передадут им свои значения, остальные аргументы будут помещены в массив. Операция rest собирает все оставшиеся аргументы и поэтому должна идти последней в подписи функции, иначе будет ошибка.

// Функция addOverNum() считает сумму всех аргументов. Измени параметры и тело функции addOverNum() так, чтобы она считала сумму только тех аргументов, которые больше чем заданное число. Это число должно быть первым параметром функции.
// // Change code below this line
// function addOverNum(firstNumber, ...args) {
//    let total = 0;
 
//    for (const arg of args) {
 
//      if(firstNumber < arg)
//      total += arg;
//    }
 
//    return total;
//    // Change code above this line
//  }
 
// =============== Задача 33 Объекты ===========
// Change code below this line
// function findMatches(first, ...args) {
//    const matches = []; // Don't change this line
//    for (const arg of args)
//      if (first.includes(arg)) {
//        matches.push(arg)
//      }
//  console.log(matches)
//    // Change code above this line
//    return matches;
//  }
//  Функция findMatches() принимает произвольное количество аргументов. Первым аргументом всегда будет массив чисел, а остальные аргументы будут просто числами.

//  Дополни код функции так, чтобы она возвращала новый массив matches, в котором будут только те аргументы, начиная со второго, которые есть в массиве первого аргумента.
 
//  Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) должна вернуть массив [1, 2], потому что только они есть в массиве первого аргумента. 

// =============== Задача 34 Объекты ===========
// Добавь объекту bookShelf ещё два метода, которые пока что будут возвращать просто строки по аналогии с getBooks() и addBook(bookName).

// Метод removeBook(bookName) будет удалять книгу по имени. Возвращает строку "Deleting book <имя книги>", где <имя книги> это значение параметра bookName.

// Метод updateBook(oldName, newName) будет обновлять название книги на новое. Возвращает строку "Updating book <старое имя> to <новое имя>", где <старое имя> и <новое имя>это значения параметров oldName и newName соотвественно.
// const bookShelf = {
//    // Change code below this line
//    books: ["The last kingdom", "The guardian of dreams"],
//    getBooks() {
//      return "Returning all books";
//    },
//    addBook(bookName) {
//      return `Adding book ${bookName}`;
//    },
 
//    removeBook(bookName) {
//    return  `Deleting book ${bookName}`
//    },
 
//    updateBook(oldName, newName) {
//    return  `Updating book ${oldName} to ${newName}`
//    }
//    // Change code above this line
//  };
// =============== Задача 35 Объекты ===========
const bookShelf = {
   books: ["The last kingdom", "Haze", "The guardian of dreams"],
   updateBook(oldName, newName) {
     // Change code below this line
 
  return      this.books.splice(this.books.indexOf(oldName), 1, newName)
 
     // Change code above this linereturn re
   },
 };
 

// =============== Задача 36 Объекты ===========

// К нам обратилась владелица лавки зелий «У старой жабы» и заказала программу для ведения инвентаря - добавления, удаления, поиска и обновления зелий. Добавь объекту atTheOldToad свойство potions, значением которого сделай пустой массив.


// const atTheOldToad = {
//    // Change code below this line
 
//  potions: [] 
 
//    // Change code above this line
//  };


//  добавь объекту atTheOldToad метод getPotions(), который просто возвращает значение свойства potions.

// const atTheOldToad = {
//    potions: ["Speed potion", "Dragon breath", "Stone skin"],
//    // Change code below this line
//  getPotions() {
//    return this.potions
//  }
//    // Change code above this line
//  };

// Дополни метод addPotion(potionName) так, чтобы он добавлял зелье potionName в конец массива зелий в свойстве potions.

// const atTheOldToad = {
//    potions: ["Speed potion", "Dragon breath", "Stone skin"],
//    addPotion(potionName) {
//      // Change code below this line
 
//  this.potions.push(potionName)
 
//      // Change code above this line
//    },
//  };

// Дополни метод removePotion(potionName) так, чтобы он удалял зелье potionName из массива зелий в свойстве potions.
// const atTheOldToad = {
//    potions: ["Speed potion", "Dragon breath", "Stone skin"],
//    removePotion(potionName) {
//      // Change code below this line
 
//  let deletedPotions = this.potions.indexOf(potionName);

//      this.potions.splice(deletedPotions, 1)
 
//      // Change code above this line
//    },
//  };



// const atTheOldToad = {
//    potions: ["Speed potion", "Dragon breath", "Stone skin"],
//    updatePotionName(oldName, newName) {
//      // Change code below this line
 
//  const oldNameFind = this.potions.indexOf(oldName)
//      return this.potions.splice(oldNameFind, 1, newName)
//      // Change code above this line
//    },
//  };

//  Дополни метод updatePotionName(oldName, newName) так, чтобы он обновлял название зелья с oldName на newName, в массиве зелий в свойстве potions.




// const atTheOldToad = {
//    potions: [
//      { name: "Speed potion", price: 460 },
//      { name: "Dragon breath", price: 780 },
//      { name: "Stone skin", price: 520 },
//    ],
//    // Change code below this line
//    getPotions() {
//      return this.potions;
//    },
//   addPotion(newPotion) {
//      for (let potion of this.potions) {
 
//      if (potion.name === newPotion.name) {
//        return `Error! Potion ${newPotion.name} is already in your inventory!`;
 
//      }
//      }
//      this.potions.push(newPotion)
//    },
//    removePotion(potionName) {
    
//  for (let potion of this.potions) {
//    if (potion.name === potionName) {
//      const index = this.potions.indexOf(potion);
//       this.potions.splice(index, 1);
//    }
//  }
 
//    `Potion ${potionName} is not in inventory!`;
    
//    },
//   updatePotionName(oldName, newName) {
 
//     for (let potion of this.potions) {
   
//       if (oldName === potion.name) {
//         potion.name = newName
//       }
  
//  }
 
//      return `Potion ${oldName} is not in inventory!`;
//    },
//    // Change code above this line
//  };

//  Заказчица хочет чтобы каждое зелье было представлено не только именем, но и ценой, а в будущем может быть и другими характеристиками. Поэтому теперь в свойстве potions будет храниться массив объектов со следующими свойствами.

// {
//   name: "Dragon breath",
//   price: 700
// }
// Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.

// getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
// addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions, но только если такого зелья еще нет в инвентаре. В противном случае возвращается строка.
// removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
// updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName на newName в массиве potions.



 