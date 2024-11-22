let tbody = document.querySelector("tbody");

const BASE_URL = "https://northwind.vercel.app/api";
function getData(endpoint) {
  fetch(`${BASE_URL}/${endpoint}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      DrawTable(data);
    })
    .catch((err) => {
      console.log(err);
    });
}
function getDataById(endpoint, id) {
  fetch(`${BASE_URL}/${endpoint}/${id}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}
function deleteDataById(endpoint,id,btn) {
  fetch(`${BASE_URL}/${endpoint}/${id}`, { method: "DELETE" })
    .then((res) => {
      if(res.ok){
          btn.closest("tr").remove();
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
getData("customers");

function DrawTable(arr) {
  tbody.innerHTML = "";
  arr.forEach((customer) => {
    const tableRow = document.createElement("tr");
    tableRow.innerHTML = `
                   <td>${customer.id}</td>
                   <td>${customer.companyName}</td>
                   <td>${customer.contactName}</td>
                   <td>${customer.contactTitle}</td>
                   <td>${customer.address.city}</td>
                   <td>${customer.address.country}</td>
                   <td><button class = "delete btn btn-outline-danger" data-id = ${customer.id}>Delete</button></td>
    `;
    tbody.appendChild(tableRow);
  });

  let dlt = document.querySelectorAll(".delete");
  dlt.forEach((btn) => {
    btn.addEventListener("click", function () {
      let dltId = this.getAttribute("data-id");
      deleteDataById("customers",dltId,this)
    });
  });
}
