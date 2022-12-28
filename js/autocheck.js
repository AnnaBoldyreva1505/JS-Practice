// clg - console.log
// Примитивы (типы данных)- число, строка,  буль,NaN, infinity
// сложные типы данных - объекты функции массивы

// ================= Задача 1 - Переменные const ======================
// Объяви две переменные, productName для названия товара и pricePerItem для хранения цены за штуку. При объявлении присвой переменным следующие характеристики товара:

// название - строка "Droid"
// цена за штуку - число 2000

// const productName = "Droid"
// const pricePerItem = 2000

// console.log(productName)
// console.log(pricePerItem)


// ================= Задача 2 - Переменные let ======================
// Имя товара изменили на "Repair droid" и увеличили его цену на 1500 кредитов. Переопредели значения переменных pricePerItem и productName после их объявления.

// let productName = "Droid"
// let pricePerItem = 2000

//  productName = "Repair droid"
//  pricePerItem = pricePerItem + 1500

// console.log(productName)
// console.log(pricePerItem)

// ================= Задача 3 - Строка, число, буль======================
// Объяви следующие переменные используя ключевое слово const или let и присвой им соответствующие значения. И проверить тип данных

// topSpeed - число 160.
// distance - число 617.54.
// login - строка "mango935".
// isOnline - буль true.
// isAdmin - буль false.

// const topSpeed = 160.
// const distance = 617.5
// const login = "mango935"
// const isOnline = true
// const isAdmin = false

// console.log("typeof topSpeed:", typeof topSpeed)
// console.log("distance:", typeof distance)
// console.log("login:", typeof login)
// console.log("isOnline:", typeof isOnline)
// console.log("isAdmin:", typeof isAdmin)


// ================= Задача 4 - Математические операторы ======================
// Дополни код, присвоив переменной totalPrice выражение для подсчёта общей суммы заказа. Переменная pricePerItem хранит цену одной единицы товара, а orderedQuantity - количество единиц товара в заказе.
// const pricePerItem = 3500;
// const orderedQuantity = 4;
// const totalPrice = pricePerItem * orderedQuantity;
// console.log(totalPrice)

// ================= Задача 5 - Шаблонные строки ======================
// Объяви перемнную message и запиши в неё сообщение о покупке, строку в формате: "You picked <имя товара>, price per item is <цена товара> credits". Где <имя товара> и <цена товара> это значения переменных productName и pricePerItem. Используй синтаксис шаблонных строк.

// const productName = "Droid";
// const pricePerItem = 3500;
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`
// console.log(message)

// ================= Задача 6 - Задача на повторение ======================
// Магазин по продаже ремонтных дроидов готов к открытию, осталось написать скрипт для их заказа. Объяви переменные и присвой им соответствующие значения:
// pricePerDroid - цена одного дроида, значение 800
// orderedQuantity - количество дроидов в заказе, значение 6
// deliveryFee - стоимость доставки, значение 50
// totalPrice - общая сумма заказа к оплате, не забудь о стоимости доставки
// message - сообщение о состоянии заказа в формате "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price."


// const orderedQuantity = 6
// const pricePerDroid = 800
// const deliveryFee = 50
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price`

// console.log(message)

// ================= Задача 7 - Функция  ======================
//Объяви функцию sayHi, внутри которой добавь console.log() со строкой "Hello, this is my first function!". После объявления вызови функцию sayHi.

//   function sayHi() {
//     console.log("Hello, this is my first function!")
//   }
// // вызов функции
// sayHi()


// ================= Задача 8 - Функция и ее параметры ======================
// В круглых скобках после имени функции идут параметры - перечисление данных, которые функция ожидает при вызове.

// Параметры - это локальные переменные доступные только в теле функции. Они разделяются запятыми. Параметров может быть несколько или вообще их может не быть, тогда записываются просто пустые круглые скобки.

// При вызове функции, в круглых скобках можно передать аргументы - значения для объявленных параметров функции.
// Функция add должна уметь складывать три числа и выводить результат в консоль. Добавь функции add три параметра a, b и c, которые будут получать значения аргументов при её вызове.

// Дополни console.log() так, чтобы он логировал строку "Addition result equals <result>", где <result> это сумма переданных чисел.

// Change code below this line
// function add(a, b, c) {
//   const result = a + b + c
//   console.log(`Addition result equals ${result}`);
//   // Change code above this line
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// ================= Задача 9 - return ======================
// Оператор return используется для передачи значения из тела функции во внешний код. Когда интерпретатор встречает return, он сразу же выходит из функции (прекращает её выполнение), и возвращает указанное значение в то место кода, где функция была вызвана.
// Дополни код функции add так, чтобы она возвращала результат сложения значений трёх параметров a, b и c.

// function add(a, b, c) {
//   // Change code below this line

// return a + b + c

//   // Change code above this line
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));



// ================= Задача 10 - return ======================

// function makeMessage (name, price) {
//   // Change code below this line
//   const message = `You picked ${name}, price per item is ${price} credits`;
//   // Change code above this line
//   return message;
// };

// console.log(makeMessage("Anna", 5000))

// ================= Задача 11 - МАТЕМАТИЧЕСКИЕ ОПЕРАТОРЫ 2.0 ======================
// Функция calculateTotalPrice считает и возвращает общую сумму покупки. Она принимает два параметра, значения которых будут задаваться во время её вызова.

// orderedQuantity - количество единиц товара в заказе;
// pricePerItem - цена одной единицы товара.
// Дополни код функции так, чтобы в переменную totalPrice записывалась общая сумма покупки, результат умножения кол-ва товаров на цену одного.

// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//   // Change code below this line
//   const totalPrice = orderedQuantity * pricePerItem;

//   // Change code above this line
//   return totalPrice;
// };

// console.log(calculateTotalPrice(1000, 5))

// ================= Задача 12 - МАТЕМАТИЧЕСКИЕ ОПЕРАТОРЫ 2.0 ======================
// Функция makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) составляет и возвращает сообщение о покупке ремонтных дроидов. Она объявляет три параметра, значения которых будут задаваться во время её вызова.

// orderedQuantity - количество дроидов в заказе
// pricePerDroid - цена одного дроида
// deliveryFee - стоимость доставки
// Дополни код функции так, чтобы она возвращала сообщение о заказе в формате "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price.". Не забудь о цене доставки при вычислениях общей стоимости.

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line

// const message = `You ordered droids worth ${orderedQuantity * pricePerDroid + deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price.`;

//   // Change code above this line
//   return message;
// }

// console.log(makeOrderMessage(10, 5000, 1000))

// ================= Задача 13 - Сравнения чисел ======================
// Функция isAdult объявляет один параметр age (возраст), значение которого будет задаваться во время её вызова. Присвой переменной passed выражение проверки возраста пользователя на совершеннолетие. Человек считается совершеннолетним в возрасте 18 лет и старше.

// function isAdult(age) {
//   // Change code below this line
//   const passed = age >= 18;

//   // Change code above this line
//   return passed;
// }

// console.log(isAdult(13))
// console.log(isAdult(43))

// ================= Задача 14 - === (строгое равенство) и !== (строгое неравенство) ======================

// Функция isValidPassword(password) проверяет равенство сохранённого и введённого паролей и возвращает результат проверки - буль true или false. Переменная SAVED_PASSWORD хранит значение ранее сохраненного пароля. Введённый пароль передаётся в параметр password.

// Присвой переменной isMatch выражение проверки равенства введённого и сохранённого ранее паролей. Результатом выражения проверки должно быть true, если значения совпадают, и false, если нет.


// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   // Change code below this line
//   const isMatch = password === SAVED_PASSWORD;

//   // Change code above this line
//   return isMatch;
// }

// console.log(isValidPassword("jqueryismyjam"))
// console.log(isValidPassword('kiwirul3z'))

// ================= Задача 15 - Ветвление if else======================
// Добавь выражение проверки совершеннолетия пользователя, значения параметра age, в условие для инструкции if.

// Если пользователь совершеннолетний, должен выполняться блок if и в переменную message записывается строка "You are an adult".
// В противном случае должен выполняться блок else и записывается строка "You are a minor".

// function checkAge(age) {
//   let message;

//   if (age >= 18) { // Change this line
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }

//   return message;
// }

// console.log(checkAge(25))
// console.log(checkAge(15))


// ================= Задача 15 - СКЛАД ТОВАРОВ======================

// Функция checkStorage(available, ordered) проверяет возможность оформления заказа и возвращает сообщение о результате. Она объявляет два параметра, значения которых будут задаваться во время её вызова:

// available - общее количество товаров на складе
// ordered - единиц товара в заказе
// Используя ветвления дополни код функции так, что:

// Если в заказе указано число, превышающее количество товаров на складе, в переменную message записывается строка "Not enough goods in stock!".
// В противном случае записывается строка "Order is processed, our manager will contact you.".


// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
// if (available <= ordered) {
//   message = "Not enough goods in stock!"
// } else {
//   message = "Order is processed, our manager will contact you."
// }
//   // Change code above this line
//   return message;
// }

// console.log(checkStorage(200, 150))


// ================= Задача 16 - Комбинированные операторы======================
// Замени выражения со стандартными математеческими операторами на комбинированный оператор присвоения с добавлением, вычитанием, умножением и делением.

// Значение переменной a равно 7
// Использован оператор +=
// Значение переменной b равно 6
// Использован оператор -=
// Значение переменной c равно 45
// Использован оператор *=
//   Значение переменной d равно 2

// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Change code below this line
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;


// ================= Задача 17 - Комбинированные операторы======================
// Станция по продаже ремонтных дроидов готова к запуску, осталось написать программное обеспечение для отдела продаж.

// Функция makeTransaction(pricePerDroid, orderedQuantity, customerCredits) выполняет транзакцию по продаже дроидов и возвращает сообщение о результате операции. Она объявляет три параметра, значения которых будут задаваться во время её вызова:

// pricePerDroid - цена одного дроида
// orderedQuantity - кол-во заказанных дроидов
// customerCredits - сумма средств на счету клиента
// Дополни её следующим функционалом:

// Объяви переменную totalPrice для хранения общей суммы заказа и присвой ей выражение расчёта этой суммы.
// Добавь проверку сможет ли клиент оплатить заказ:
// если сумма к оплате превышает количество кредитов на счету клиента, запиши в переменную message строку "Insufficient funds!";
// в противном случае, вычти сумму покупки со счёта клиента и запиши в переменную message сообщение: "You ordered <число> droids, you have <число> credits left".

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
// const totalPrice = pricePerDroid * orderedQuantity;
// if (customerCredits < totalPrice) {
// message = `Insufficient funds!`;
// } else {
//   message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;
// }
//   // Change code above this line
//   return message;
// }

// console.log(makeTransaction(1000, 3, 15000))
// console.log(makeTransaction(20000, 3, 15000) )


// ================= Задача 18 - ЗАДАЧА: ПРОВЕРКА БАЛАНСА ======================
// Станция по продаже ремонтных дроидов готова к запуску, осталось написать программное обеспечение для отдела продаж.

// Функция makeTransaction(pricePerDroid, orderedQuantity, customerCredits) выполняет транзакцию по продаже дроидов и возвращает сообщение о результате операции. Она объявляет три параметра, значения которых будут задаваться во время её вызова:

// pricePerDroid - цена одного дроида
// orderedQuantity - кол-во заказанных дроидов
// customerCredits - сумма средств на счету клиента
// Дополни её следующим функционалом:

// Объяви переменную totalPrice для хранения общей суммы заказа и присвой ей выражение расчёта этой суммы.
// Добавь проверку сможет ли клиент оплатить заказ:
// если сумма к оплате превышает количество кредитов на счету клиента, запиши в переменную message строку "Insufficient funds!";
// в противном случае, вычти сумму покупки со счёта клиента и запиши в переменную message сообщение: "You ordered <число> droids, you have <число> credits left".

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
//     const totalPrice = pricePerDroid * orderedQuantity
    
//     if (totalPrice > customerCredits) {
//         message = "Insufficient funds!"
//     } else {
//         message =  `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`
//     }
//   // Change code above this line
//   return message;
// }

// console.log(makeTransaction(1000, 3, 15000))

// ================= Задача 19 - if...else ======================
// Функция checkPassword(password) получает пароль пользователя в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения, хранящееся в переменной message.

// Если значение параметра password равно null, значит пользователь отменил операцию и в message записывается строка "Canceled by user!".
// Если значение параметра password совпадает со значением ADMIN_PASSWORD, в переменную message присваивается строка "Welcome!".
// Если ни одно из предыдущих условий не выполнилось, в переменную message записывается строка "Access denied, wrong password!".

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) { // Change this line
//     message =  'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) { // Change this line
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }

//   return message;
// }


// console.log(checkPassword("qwerty"))
// console.log(checkPassword("jqueryismyjam"))


// ================= Задача 20 - if...else if======================

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line

//   if(ordered === 0){
//    message = "There are no products in the order!";
//   } else if(ordered > available){
//     message = "Your order is too large, there are not enough items in stock!";
//   } else{
//     message = "The order is accepted, our manager will contact you";
//   }
//   // Change code above this line
//   return message;
// }



// ================= Задача 21 - И ИЛИ НЕ======================

// Функция isNumberInRange(start, end, number) проверяет, входит ли число в промежуток. Она объявляет три параметра, значения которых будут задаваться во время её вызова:

// number - число, вхождение которого проверяется
// start - начало числового промежутка
// end - конец числового промежутка
// Присвой переменной isInRange выражение проверки вхождения number в числовой промеждуток от start до end.То есть число должно быть больше либо равно start и меньше либо равно end.Результатом выражения проверки будет буль true или false.

// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end   ; // Change this line

//   return isInRange;
// }

// console.log(isNumberInRange(20, 50, 76))


// ================= Задача 22 - И ИЛИ НЕ======================

// Функция checkIfCanAccessContent(subType) проверяет, может ли пользователь получить доступ к контенту. Проверка происходит по типу подписки. Получить доступ могут только пользователи с подпиской pro или vip.

// Присвой переменной canAccessContent выражение проверки подписки. Если значение параметра subType равно строкам "pro" или "vip", пользователь получит доступ. Результатом выражения проверки будет буль true или false.

// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === "pro" || subType === "vip"; // Change this line

//   return canAccessContent;
// }


// ================= Задача 23 - И ИЛИ НЕ======================

// Функция isNumberNotInRange(start, end, number) проверяет, не входит ли число в промежуток. То есть число должно быть меньше либо равно start и больше либо равно end. Результатом выражения проверки будет буль true или false.

// Она объявляет три параметра, значения которых будут задаваться во время её вызова:

// number - число, не вхождение которого проверяется
// start - начало числового промежутка
// end - конец числового промежутка
// Присвой переменной isNotInRange выражение инверсии значения переменной isInRange используя оператор!.


// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange; // Change this line

//   return isNotInRange;
// }

// console.log(isNumberNotInRange(5, 10, 7))


// ================= Задача 24 - Расчет скидки======================
// Функция getDiscount(totalSpent) определяет значение скидки в зависимости от общей суммы потраченных денег (параметр totalSpent) в магазине за всё время (партнёрская программа). Скидка записывается в переменную discount и возвращается из функции как результат её работы.

// Используя ветвления и логические операторы, дополни код функции.

// Если потрачено от 50000 ( включительно ) или больше кредитов - скидка 10% (золотой партнёр)
// Если потрачено от 20000 (включительно) до 50000 кредитов - скидка 5% (серебрянный партнёр)
// Если потрачено от 5000 (включительно) до 20000 кредитов - скидка 2% (бронзовый партнёр)
// Если потрачено меньше чем 5000 кредитов - скидка 0 (базовый партнёр)
// Значения скидок каждого уровня хранятся в одноимённых константах BASE_DISCOUNT, BRONZE_DISCOUNT, SILVER_DISCOUNT и GOLD_DISCOUNT.

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
// if(totalSpent >= 50000){
//   discount = GOLD_DISCOUNT;
// }else if(totalSpent <= 50000 && totalSpent >= 20000){
//   discount = SILVER_DISCOUNT;
// }else if(totalSpent <= 20000 && totalSpent >= 5000){
//   discount = BRONZE_DISCOUNT;
// }else{
//   discount = BASE_DISCOUNT;
// }
//   // Change code above this line
//   return discount;
// }




// ================= Задача 24 -Тернарный оператор ======================
// Тернарный оператор используется как более синтаксически краткая замена инструкции if...else, когда одной и той же переменной необходимо присвоить разные значения по условию.

// <условие> ? <выражение если условие истинно> : <выражение если условие ложно>
// Работает по такой схеме:

// Вычисляется условие.
// Если условие истинно, то есть приводится к true, вычисляется выражение после ?.
//         Если условие ложно, то есть приводится к false, вычисляется выражение после :.
    
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line

// message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you"
  
//   // if (ordered > available) {
//   //   message = "Not enough goods in stock!";
//   // } else {
//   //   message = "The order is accepted, our manager will contact you";
//   // }

//   // Change code above this line
//   return message;
// }

// console.log(checkStorage(150, 180));
// console.log(checkStorage(180, 150));

// ================= Задача 25 -Тернарный оператор ======================


// Функция checkPassword(password) сравнивает переданный ей пароль (параметр password) с сохранённым паролем администратора (константа ADMIN_PASSWORD) и возвращает строку с сообщением о результате.

// Используя тернарный оператор дополни функцию так, что:

// Если значения password и ADMIN_PASSWORD совпадают, присвой переменной message строку "Access is allowed".
// В противном случае, присвой message строку "Access denied, wrong password!".

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line
// message = password === ADMIN_PASSWORD ?  "Access is allowed"  : "Access denied, wrong password!"
//   // Change code above this line
//   return message;
// }

// console.log(checkPassword("jqueryismyjam"))
// console.log(checkPassword("jqueryisyjam"))

// ================= Задача 26 - switch ======================

// Функция getSubscriptionPrice(type) получает строку с типом подписки пользователя (параметр type), проверяет её на совпадение с тремя возможными типами ежемесячной подписки и возвращает цену хранящуюся в переменной price.

// Если значение параметра type это строка:

// "starter" - цена подписки 0 кредитов.
// "professional" - цена подписки 20 кредитов.
// "organization" - цена подписки 50 кредитов.
// Изначально в теле функции была инструкция if...else, которая выглядела вот так.

// if (type === "starter") {
//   price = 0;
// } else if (type === "professional") {
//   price = 20;
// } else if (type === "organization") {
//   price = 50;
// }
// // После рефакторинга инструкция if..else была заменена на switch. Дополни код инструкции switch, чтобы функция работала правильно.
// function getSubscriptionPrice(type) {
//   let price;
//   // Change code below this line

//  switch (type.trim()) { // Change this line
//     case "starter": // Change this line
//       price = 0; // Change this line
//       break;

//     case "professional": // Change this line
//       price = 20; // Change this line
//       break;

//     case "organization": // Change this line
//       price = 50; // Change this line
//       break;
//   }

//   // Change code above this line
//   return price;
// }

// console.log(getSubscriptionPrice('professional'))
// console.log(getSubscriptionPrice(' professional         '))


// ================= Задача 28 - switch ======================

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line

//   // if (password === null) {
//   //   message = "Canceled by user!";
//   // } else if (password === ADMIN_PASSWORD) {
//   //   message = "Welcome!";
//   // } else {
//   //   message = "Access denied, wrong password!";
//   // }

// switch (password) { // Change this line
//     case null: // Change this line
//       message  = "Canceled by user!"; // Change this line
//       break;

//     case ADMIN_PASSWORD: // Change this line
//       message  = "Welcome!"; // Change this line
//       break;

//       default:  // Change this line
//       message  = "Access denied, wrong password!"; // Change this line
//       break;
//   }


//   // Change code above this line
//   return message;
// }


// ================= Задача 29 - switch ======================
// Функция getShippingCost(country) должна проверять возможность доставки товара в страну пользователя (параметр country) и возвращать сообщение о результате хранящееся в переменной message. Обязательно используй инструкцию switch.

// Формат возвращаемой строки "Shipping to <country> will cost <price> credits", где вместо <country> и <price> необходимо подставить соотвествующие значения.

// Список стран и стоимость доставки:

// China - 100 кредитов
// Chile - 250 кредитов
// Australia - 170 кредитов
// Jamaica - 120 кредитов
// Из списка видно, что доставка есть не везде.Если указанной страны нет в списке, то функция должна вернуть строку "Sorry, there is no delivery to your country"

// function getShippingCost(country) {
//   let message;
//   // Change code below this line
// switch (country) { // Change this line
//     case 'China': // Change this line
//       message  = `Shipping to ${country} will cost 100 credits`; // Change this line
//       break;

//  case 'Chile': // Change this line
//       message  = `Shipping to ${country} will cost 250 credits`; // Change this line
//       break;

//        case 'Australia': // Change this line
//       message  = `Shipping to ${country} will cost 170 credits`; // Change this line
//       break;

//         case 'Jamaica': // Change this line
//       message  = `Shipping to ${country} will cost 120 credits`; // Change this line
//       break;

//       default:  // Change this line
//       message  = "Sorry, there is no delivery to your country"; // Change this line
//       break;
//   }
//   // Change code above this line
//   return message;
// }



// ================= Задача 30 - length ======================

// Для того чтобы узнать длину строки, то есть количество её символов, у строк есть встроенное свойство length, значение которого можно получить обратившить к нему через точку после имени переменной или строкового литерала.

// Функция getNameLength(name) принимает имя (параметр name) и возвращает строку, в которой указана его длина. Дополни шаблонную строку в переменной message длиной строки из параметра name.

// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line

//   return message;
// }

// console.log(getNameLength("Anna"))





// // ================= Задача 31 - length index ======================
// Дополни код присвоив объявленным переменным выражения обращения к соответствующим элементам или свойствам строки в переменной course.

// courseTopicLength - длина строки.
// firstElement - первый символ строки.
//     lastElement - последний символ строки.



//     const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];


// console.log(courseTopicLength)
// console.log(firstElement)
// console.log(lastElement)
// Change code above this line



// // ================= Задача 32 - slice ======================
// // Метод строк slice(startIndex, endIndex) используется для создания копии части или всей строки.Он делает копию элементов строки от startIndex и до, но не включая endIndex и возвращает новую строку

// function getSubstring(string, length) {
//   const substring = string.slice(0, length); // Change this line

//   return substring;
// }

// console.log(getSubstring("string", 3))


// // ================= Задача 33 - slice + length ======================
// Функция formatMessage(message, maxLength) принимает строку (параметр message) и форматирует её, если длина превышает значение в параметре maxLength.

// Дополни код функции так, что если длина строки:

// не превышает maxLength, функция возвращает её в исходном виде.
// больше maxLength, то функция обрезает строку до maxLength символов и добавляет в конец троеточие "...", после чего возвращает укороченную версию.
// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
// result = message.length <= maxLength ? message : message.slice(0, maxLength) + "..."
//   /// Change code above this line
//   return result;
// }

// console.log(formatMessage("Curabitur ligula sapien", 16))



// // ================= Задача 34 - toLowerCase ======================
// Функция normalizeInput(input) принимает строку(параметр input) и возвращает такую же строку, но в нижнем регистре.Присвой переменной normalizedInput выражение создания строки в нижнем регистре из параметра input.
// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Change this line

//   return normalizedInput;
// }

// console.log(normalizeInput("Big SALE"))

// // ================= Задача 35 - includes ======================
// Метод строк includes(substring) проверяет входит ли подстрока substring в строку, возвращает буль - true если входит и false в противном случае.Регистр символов в строке и подстроке имеет значение, так как например буква "a" не равна букве "А".

// function checkForName(fullName, name) {
//  const result = fullName.includes(name); // Change this line
//   return result;
// }

// console.log(checkForName("Anna Boldyreva", "Anna"))




// // ================= Задача 36 - Проверка спама ======================

// function checkForSpam(message) {
//   let result;
//   // Change code below this line
//   message = message.toLowerCase(message);

//   result = message.includes('spam') || message.includes('sale') ? true  : false;

//   //   if (message.includes('spam') || message.includes('sale')) {
//   //     return true;
//   //   } else {
//   //   return false;
//   // }
//   // Change code above this line
//   return result;
// }