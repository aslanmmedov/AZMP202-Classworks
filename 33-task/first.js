let head = document.querySelector(".header");
let parag = document.querySelectorAll(".parag");

head.addEventListener("click",open)

function open(){
    parag.forEach(element => {
        if(element.classList.contains("active")){
            element.classList.remove("active");
        }
        else{
            element.classList.add("active");
        }
    });
    
}