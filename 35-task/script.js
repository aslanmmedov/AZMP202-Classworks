// let timetake = document.querySelector(".time");
// let btn = document.querySelector(".btn-start");
// let empty = document.querySelector(".empty-p");

// btn.addEventListener("click",function(){
//     let count = timetake.value;
//    let interval = setInterval(() => {
//             if(count === 0){
//                 clearInterval(interval)
//             }
//             console.log(empty.textContent = count--)
//     }, 1000);
// })


let image = document.querySelector(".img1");
let nam = document.querySelector(".name");
let usernam = document.querySelector(".username");
let det = document.querySelector(".detail");
let con = document.querySelector(".cont");
let spn  = document.querySelector("span");
let cnt = document.querySelector(".cont");
let none = document.querySelector(".none")
det.addEventListener("click",function(){
    con.innerHTML = `
        <h1>Details for:${det.closest("h2")}</h1>
        <h2>Last Name:${det.closest("span")}</h2>
        <h3>Password:</h3>
        <button class="cls">Back</button>
    `
})
let cls = document.querySelector(".cls");
cls.addEventListener("click",function(){
    this.closest("div").classList().add("none");
})