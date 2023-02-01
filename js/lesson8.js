

// const fruit = {
//     name: "banana",
//     weight: 100,
//     price: 60,
//     total: 0,

//     getTotalSum() {


//         console.log(this.weight);
//         const result = this.weight * this.price
//         console.log("total fruit", result);
//         this.total = result
//         return this.total
//     },

//     lossWeight(value){
//         if(this.weight >= value){
//                     const res = this.weight - value
//         this.weight = res
//         this.getTotalSum()
// return this.weight
//         } else{
//             alert(`NO Fruits. left: ${this.weight} `)
//         }

//     },

//     addWeight(value = 0){
//         console.log("addWeight", this);
//         return this.weight += value
//             }
        

// }


// console.log("fruit", fruit);
// const result = fruit.getTotalSum()
// console.log(result);
// fruit.getTotalSum()
// const newWeight = fruit.lossWeight(30)
// console.log(newWeight);

// const nextBought = fruit.lossWeight(50)
// console.log("nextBought" , nextBought);

// // fruit.lossWeight(50)

// fruit.addWeight()

// function getWeightFromObject(callback) {
//     const result = callback()
//     console.log("getWeightFromObject", result);
    
// }

// getWeightFromObject(fruit.addWeight.bind(fruit, 100)) //когда передаем колл бэк если нужно сразу тогда используем call - синтаксис аналогичен, или apply


const user = {
    name: '',

showName(){
    return this.name
},

    setName(newName){
        return this.name = newName
    }
}

const Anna = {
    name: "Anna",
}

const Igor = {
    name: "Igor",
}

const Vera = {
    name: "Vera",
}

let response = user.showName.call(Anna)
console.log("response", response);
let setNewName = user.setName.call(Anna, "Miracle")
console.log(setNewName);

response = user.showName.apply(Igor)
console.log("response", response);
setNewName = user.setName.apply(Anna, ["done"])
console.log(setNewName);

response = user.showName.call(Vera)
console.log("response", response);
setNewName = user.setName.call(Anna, "mix")
console.log(setNewName);