const box = document.createElement("div");
const parag = document.createElement("p");
parag.style.textAlign = "center";
parag.style.color = "white";
parag.style.fontSize = "20px";
parag.textContent = "Azmp 202";
box.append(parag);
box.style.backgroundColor = "Green";
box.style.border = "2px solid red";
box.style.borderRadius = "20px";
box.style.width = "250px";
box.style.height = "250px";

document.body.appendChild(box);