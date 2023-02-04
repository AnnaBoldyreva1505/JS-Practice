// // const fruit = {
// //     name: "banana",
// //     weight: 100,
// //     price: 60,
// //     total: 0,

// //     getTotalSum() {

// //         console.log(this.weight);
// //         const result = this.weight * this.price
// //         console.log("total fruit", result);
// //         this.total = result
// //         return this.total
// //     },

// //     lossWeight(value){
// //         if(this.weight >= value){
// //                     const res = this.weight - value
// //         this.weight = res
// //         this.getTotalSum()
// // return this.weight
// //         } else{
// //             alert(`NO Fruits. left: ${this.weight} `)
// //         }

// //     },

// //     addWeight(value = 0){
// //         console.log("addWeight", this);
// //         return this.weight += value
// //             }

// // }

// // console.log("fruit", fruit);
// // const result = fruit.getTotalSum()
// // console.log(result);
// // fruit.getTotalSum()
// // const newWeight = fruit.lossWeight(30)
// // console.log(newWeight);

// // const nextBought = fruit.lossWeight(50)
// // console.log("nextBought" , nextBought);

// // // fruit.lossWeight(50)

// // fruit.addWeight()

// // function getWeightFromObject(callback) {
// //     const result = callback()
// //     console.log("getWeightFromObject", result);

// // }

// // getWeightFromObject(fruit.addWeight.bind(fruit, 100)) //когда передаем колл бэк если нужно сразу тогда используем call - синтаксис аналогичен, или apply

// // const user = {
// //     name: '',

// // showName(){
// //     return this.name
// // },

// //     setName(newName){
// //         return this.name = newName
// //     }
// // }

// // const Anna = {
// //     name: "Anna",
// // }

// // const Igor = {
// //     name: "Igor",
// // }

// // const Vera = {
// //     name: "Vera",
// // }

// // let response = user.showName.call(Anna)
// // console.log("response", response);
// // let setNewName = user.setName.call(Anna, "Miracle")
// // console.log(setNewName);

// // response = user.showName.apply(Igor)
// // console.log("response", response);
// // setNewName = user.setName.apply(Anna, ["done"])
// // console.log(setNewName);

// // response = user.showName.call(Vera)
// // console.log("response", response);
// // setNewName = user.setName.call(Anna, "mix")
// // console.log(setNewName);

// class Student {
//   #pass = "qwerty";

//   constructor(name = "", email = "", phone = "") {
//     this.name = name;
//     this.email = email;
//     this.phone = phone;
//     this.results = [];
//   }

//   get _name() {
//     return this.name;
//   }

//   set _name(newName) {
//     return (this.name = newName);
//   }

//   //   setName(newName) {
//   //     return this.name = newName
//   //   }
//   //   getName() {
//   //     return this.name
//   //   }

//   //   setEmail(newEmail) {
//   //     return this.email = newEmail
//   //   }

//   //   getEmail() {
//   //     return this.email
//   //   }

//   createResultObj(date, total) {
//     return { date, total };
//   }
//   passTest(date, ...rest) {
//     // console.log("date test", date);
//     const result = rest.reduce((total, num) => (total += num), 0);
//     // console.log("Test result", result);
//     const res = this.createResultObj(date, result);
//     // console.log("res", res);
//     this.results.push(res);
//     return this.results;
//   }
// }

// // const ira = new Student("Irina", "yui@gmail.com", "+77072117120");
// // console.log(ira);

// const Anna = new Student("Anya", "234567890@gmail.com", "+77772117120");
// // console.log(Anna);
// Anna._name = "Ania";
// // console.log(Anna._name);
// // console.log('pass',Anna.pass);
// // Anna.pass = '123456'

// // console.log(Anna);
// Anna.passTest("2/2/23", 1, 1, 1, 1, 0, 1, 1, 0);
// Anna.passTest("5/2/23", 1, 1, 1, 1, 0, 1, 1, 0);
// Anna.passTest("7/2/23", 1, 1, 1, 1, 0, 1, 1, 0);
// Anna.passTest("9/2/23", 1, 1, 1, 1, 0, 1, 1, 0);

// const annasResults = Anna.passTest("10/2/23", 1, 1, 1, 1, 0, 1, 1, 0);
// // console.log(annasResults);

// class updateStudent extends Student {
//   constructor(a, b, c) {
//     super(a, b, c);
//     this.score = 0;
//   }

//   getScore() {
//     const allRes = this.results.reduce((total, elem) => {
//       total += elem.total;
//       console.log(total);
//       return total;
      
//     }, 0);
//    console.log(allRes);
//    this.score = allRes
//    return this.score
//   }
// }

// const vera = new updateStudent("Vera", "1@matchMedia.kz", "9999999");
// // console.log(vera);
// vera.passTest("4/3/2023", 1, 1, 1, 1, 1, 0, 1, 1, 1, 0);
// vera.passTest("5/3/2023", 1, 1, 1, 1, 1, 0, 1, 1, 1, 0);
// vera.passTest("6/3/2023", 1, 1, 1, 1, 1, 0, 1, 1, 1, 0);
// vera.passTest("7/3/2023", 1, 1, 1, 1, 1, 0, 1, 1, 1, 1);
// console.log("vera", vera);
