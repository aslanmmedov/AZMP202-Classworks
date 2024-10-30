// for(let a = 0; a<=100;a++){
//     if(a%2===0){
//         console.log(a)
//     }
// }



// let count = 0;
// for(let a = 0; a<=100;a++){
//     if(a%2!=0){
//         count ++;
//     }
// }
// console.log(count)




// let cem = 0;
// for(let a = 0; a<=100;a++){
//     if(a%5===0){
//         console.log(cem+=a)
//     }
// }


// let array = [12, 14, 35, 56, 68, 93];

// let cem = 0;
// for(let a = 0; a<=array.length;a++){
//     cem += array[a];
// }   
// console.log(cem);

// let cem = 0;
// for (let index = 0; index < array.length; index++) {
//     if(index%2 != 0){
//         cem+=array[index];
//     }

// }
// console.log(cem);

// let cem = 0;
// for (let index = 0; index < array.length; index++) {
//     if(index%2 === 0){
//         cem+=array[index];
//     }

// }
// console.log(cem);


// let cem = 0;
// for (let index = 0; index < array.length; index++) {
//     cem = array[index]
//     if(array[index] > cem){
//         cem =array[index]
//     }
// }
// console.log(cem);


// let big = 0;
// let little = 0;
// for (let index = 0; index < array.length; index++) {
//     big = array[index]
//     if(array[index] > big){
//         big =array[index]
//     }
// }

// let liitle = array[0];

// for (let index = 0; index < array.length; index++) {

//     if (array[index] < liitle) {
//         largest = array[index];
//     }
// }
// console.log(big-liitle);


// let eded = 15;
// for (let index = 0; index < array.length; index++) {
//     if(array[index] === eded){
//         console.log("var")
//     }
// }



// const employees = [
//     { name: "Jamil", salary: 50000, department: "IT" },
//     { name: "Jale", salary: 60000, department: "HR" },
//     { name: "Bayram", salary: 55000, department: "IT" },
//     { name: "Sahil", salary: 75000, department: "HR" },
//     { name: "Maryam", salary: 65000, department: "IT" },
//     { name: "Elnara", salary: 80000, department: "HR" },
//     { name: "Davud", salary: 70000, department: "IT" },
//   ];
//   function Hesab(arr){
//     let cavab =[];
//     for (let index = 0; index < employees.length; index++) {
//         if(employees[index].salary > 60000){
//             cavab.push(arr[index])
//         }
//     }
//     return cavab;
// }
// console.log(Hesab(employees))




// let num = prompt("eded:");
// let fct = 1;
// for (let index = 1; index <= num; index++) {
//     fct = fct*index;
// }
// alert(fct)



// let iterator = 1;
// let num = 5;
// let fct = 1;
// while (iterator <= num) {
//     fct *= iterator;
//     iterator++;
// }
// console.log(fct);





// let str ="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat obcaecati molestias eos facilis aspernatur accusamus ullam perspiciatis culpa quod doloremque."
// count = 0;
// for (let index = 0; index < str.length; index++) {
//     if(str[index] === "l" || str[index] === "L"){
//         count++;
//     }
// }
// console.log(count);


// let names = ["azerbaijan","america","Kanada",'Germany']
// let count = [];
// for (let index = 0; index < names.length; index++) {
//     if(names[index][0] === "a" || names[index][0] === "A" && names[index][index.length-1] === "a" || names[index][index.length-1] === "A"){
//         // count = names[index];
//         count.push(names[index]);
//     }
// }
// alert(count)




// let number = 2465;
// let netice = "";
// for (let index = 2;index < number; index++) {
//     if(number%index === 0){
//         netice = "sade deyil"
//     }
// }
// console.log(netice)



const scores = [60,75,88,75,93,45]
// let cem = 0;
let big = scores[0];
for (let index = 0; index < scores.length; index++) {
    if(scores[index] > big){
        big =scores[index]
    }
}
alert(big)
// for (let index = 0; index < scores.length; index++) {
//     cem+=scores[index];
// }
// alert(cem/scores.length)








