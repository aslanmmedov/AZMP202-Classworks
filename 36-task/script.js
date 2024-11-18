let list = document.querySelector(".list");
let input = document.querySelector(".inpt");
let btn = document.querySelector(".delete");
let h3 = document.querySelector(".h3");
let add = document.querySelector(".add");
let count = 0;
let arr = [];
add.addEventListener("click",function(){
    count++;
    let notelist = document.createElement("li");
    notelist.setAttribute("id",count);
    // console.log(notelist.id);
    arr.push(input.value);
    localStorage.setItem("infotake",JSON.stringify(arr))
    notelist.innerHTML = `
                <h3 class="h3">${input.value}</h3>
                <button class = "delete">Delete</button>  
    `
    list.appendChild(arr)
    
})

