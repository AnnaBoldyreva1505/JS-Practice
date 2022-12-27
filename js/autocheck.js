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


// ================= Задача 16 - Комбинированные операторы======================
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