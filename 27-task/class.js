// let array = [12,23,43,54,65,67,89,90,100,54];

//#1
// let max = [];

// for (let index = 0; index < array.length; index++) {
//     if(array[index]%2 === 0){
//         max.push(array[index]);
//     }
// }
// let num =max[0];
// for (let i = 0; i < max.length; i++) {
//     if(max[i] > num){
//         num = max[i]
//     }
// }
// console.log(`en boyuk cut eded: ${num}`);


//#2

// let max = [];
// for (let index = 0; index < array.length; index++) {
//     if(index%2 != 0){
//         if(array[index] %2 != 0){
//             max.push(array[index]);
//         }
//     }
// }
// let num =max[0];
// for (let i = 0; i < max.length; i++) {
//     if(max[i] > num){
//         num = max[i];
//     }
// }
// console.log(`en boyuk tek indexli tek eded: ${num}`);


//#3



// let num =array[0];
// for (let i = 1; i < array.length; i++) {
//     if(array[i] > num){
//         num = array[i]
//     }
// }
// let little =array[0];
// for (let i = 1; i < array.length; i++) {
//     if(array[i] < little){
//         little = array[i]
//     }
// }
// let cem = num+little;
// let hasil = num*little;
// if(cem>hasil){
//     console.log("cem boyukdur")
// }
// else if(cem<hasil){
//     console.log("cem kicikdir")
// }
// else{
//     console.log("beraberdir")
// }

//#4
// let cem = 0;
// for (let index = 0; index < array.length; index++) {
//     cem+=array[index];
    
// }
// console.log(cem)


//#5




// let big =array[0];
// for (let i = 1; i < array.length; i++) {
//     if(array[i] > big){
//         big = array[i]
//     }
// }
// let little =array[0];
// for (let i = 1; i < array.length; i++) {
//     if(array[i] < little){
//         little = array[i]
//     }
// }
// for (let index = 0; index < array.length; index++) {
//     if(array[index] === big){
//         little = array[index];
//         array.push(little);
//     }
//     // if(array[index] === little){
//     //     big  = array[index]
//     // }
// }
// console.log(array)



//#6
// let eyni ;
// for (let index = 1; index < array.length; index++) {
//     eyni = array[index];
//     for (let i = 0; i < array.length; i++) {
//         if(array[i] === eyni){
//             eyni = array[i];
//         }
//     }
// }
// console.log(eyni)


//#7

// let num =array[0];
// for (let i = 1; i < array.length; i++) {
//     if(array[i] > num){
//         num = array[i]
//     }
// }
// let little =array[0];
// for (let i = 1; i < array.length; i++) {
//     if(array[i] < little){
//         little = array[i]
//     }
// }
// let edediorta = (num+little)/2;
// let hasil = num*little;
// if(edediorta>hasil){
//     console.log("cem boyukdur")
// }
// else if(edediorta<hasil){
//     console.log("cem kicikdir")
// }
// else{
//     console.log("beraberdir")
// }



//#7

// let people = [
//     { name: "Aysel", age: 25 },
//     { name: "Rəşad", age: 30 },
//     { name: "Leyla", age: 18 },
//     { name: "Kamal", age: 40 }
// ];

// let ortayas  = 0;
// let yas = 0;
// for (let index = 0; index < people.length; index++) {
//    yas+=people[index].age;
//    ortayas = yas/people.length;
    
// }
// console.log(ortayas)



//#8

// let people = [
//     { name: "Aysel", age: 25, city: "Bakı" },
//     { name: "Rəşad", age: 30, city: "Gəncə" },
//     { name: "Leyla", age: 18, city: "Bakı" },
//     { name: "Kamal", age: 40, city: "Sumqayıt" }
// ];


// let array = [];
// for (let index = 0; index < people.length; index++) {
//     if(people[index].city === "Bakı" && people[index].age >20 ){
//         array.push(people[index])
//     }
// }
// console.log(array)



//#10


// let array1 = [1, 3, 5, 7];
// let array2 = [2, 3, 6, 7, 8];

// let eyni = [];
// for (let index = 0; index < array2.length ; index++) {
//     if(array1[index] === array2[index]){
//         eyni.push(array1[index])
//     }
// }
// console.log(eyni)



//#11


// let array =[-10,12,-23,40,60,73,-6,-20];


// let countermenfi = 0;
// let countermusbet = 0;

// for (let index = 0; index < array.length; index++) {
//     if(array[index] < 0){
//         countermenfi++;
//     }
//     else if(array[index] > 0){
//         countermusbet++;
//     }
    
// }
// console.log(countermenfi);
// console.log(countermusbet);


//#12


// let hasilmenfi = 1;
// let hasilmusbet = 1;

// for (let index = 0; index < array.length; index++) {
//     if(array[index] < 0){
//         hasilmenfi*=array[index];
//     }
//     else if(array[index] > 0){
//         hasilmusbet*=array[index];
//     }
    
// }
// console.log(hasilmenfi);
// console.log(hasilmusbet);




//#13

// let array =[11,12,14,56] ;
// let reverse = [];
// for(let index = array.length-1;index>=0;index--){
//     reverse.push(array[index]);
// }
// console.log(reverse);




//#14



