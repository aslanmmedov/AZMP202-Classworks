// class Human{
//     constructor(name,age,country){
//         this.name = name;
//         this.age = age;
//         this.country = country;
//     }

//     displayDetails(name,age,country) {
//         return `${name},${age}`
//     }
// }

// const human1 = new Human("aslan",20,"azerbaijan");
// console.log(human1)

//#2

class Operators{
    constructor(number,number2){
        this.number = number;
        this.number2 = number2;
    }

    multiply(number,number2) {
            return number * number2;     
        
    }
    divide(number,number2) {
            return number / number2;     
    }
    plus(number,number2) {
            return number + number2;     
    }
    minus(number,number2) {
            return number - number2;     
    }
}
const divide = new Operators()
console.log(divide.multiply(5,5))      




