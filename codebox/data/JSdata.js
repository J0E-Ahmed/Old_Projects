let title = document.getElementById("title");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let adds = document.getElementById("adds");
let discount = document.getElementById("discount");
let total = document.getElementById("total");
let count = document.getElementById("count");
let category = document.getElementById("category");
let submit = document.getElementById("submit");

let mood = "creat";
let tmp;
// get total
function getTotal() {
  if (price.value != "") {
    let result = +price.value + +adds.value + +taxes.value - +discount.value;
    total.innerHTML = result;
    total.style.background = "green";
  } else {
    total.innerHTML = "";
    total.style.background = "rgb(106, 20, 20)";
  }
}

// create product

let dataPro;

if (localStorage.product != null) {
  dataPro = JSON.parse(localStorage.product);
} else {
  dataPro = [];
}

submit.onclick = function () {
  let newpro = {
    title: title.value.toLowerCase(),
    taxes: taxes.value,
    price: price.value,
    adds: adds.value,
    count: count.value,
    category: category.value.toLowerCase(),
    discount: discount.value,
    total: total.innerHTML,
  };
  // coun
  if (title.value != '' && price.value != '' && category.value != '' && newpro.count<=100) {
    if (mood === "creat") {
      if (newpro.count > 1) {
        for (let i = 0; i < newpro.count; i++) {
          dataPro.push(newpro);
        }
      } else {
        dataPro.push(newpro);
      }
    } else {
      dataPro[tmp] = newpro;
      mood = "creat";
      submit.innerHTML = "Creat";
      count.style.display = "block";
    }
    cleardata();
}
//save localStorage
localStorage.setItem("product", JSON.stringify(dataPro));
  showdata();
};

// clear inputs
function cleardata() {
  taxes.value = "";
  title.value = "";
  adds.value = "";
  discount.value = "";
  count.value = "";
  price.value = "";
  category.value = "";
  total.innerHTML = "";
}

// read
function showdata() {
  getTotal();
  let table = "";
  for (let i = 0; i < dataPro.length; i++) {
    table += `
        <tr>
            <td>${i+1}</td>
            <td>${dataPro[i].title}</td>
            <td>${dataPro[i].price}</td>
            <td>${dataPro[i].taxes}</td>
            <td>${dataPro[i].adds}</td>
            <td>${dataPro[i].discount}</td>
            <td>${dataPro[i].total}</td>
            <td>${dataPro[i].category}</td>
            <td><button onclick="updateData(${i})" id="update">update</button></td>
            <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
        </tr>
        `;
  }

  document.getElementById("tbody").innerHTML = table;
  let btnDelete = document.getElementById("deleteAll");
  if (dataPro.length > 0) {
    btnDelete.innerHTML = `
        <button onclick="deleteAll()">delete All (${dataPro.length})</button>
        `;
  } else {
    btnDelete.innerHTML = "";
  }
}
showdata();

// delete
function deleteData(i) {
  dataPro.splice(i, 1);
  localStorage.product = JSON.stringify(dataPro);
  showdata();
}

function deleteAll() {
  localStorage.clear();
  dataPro.splice(0); //delete all data in array
  showdata();
}

// update
function updateData(i) {
  title.value = dataPro[i].title;
  taxes.value = dataPro[i].taxes;
  price.value = dataPro[i].price;
  adds.value = dataPro[i].adds;
  discount.value = dataPro[i].discount;
  getTotal();
  count.style.display = "none";
  category.value = dataPro[i].category;
  submit.innerHTML = "update";
  mood = "update";
  tmp = i;
  scroll({
    top: 0,
    behavior: "smooth",
  });
}

// search

let searchMood = "title";
function getSearchMood(id) {
  let search = document.getElementById("search");
  if (id === "searchtitle") {
    searchMood = "title";
  } else {
    searchMood = "category";
  }
  search.placeholder = "Search By " + searchMood;
  search.focus();
  search.value = "";
}
function searchData(value) {
  let table = "";
  for (let i = 0; i < dataPro.length; i++) {
    if (searchMood == "title") {
      if (dataPro[i].title.includes(value.toLowerCase())) {
        table += `
        <tr>
            <td>${i+1}</td>
            <td>${dataPro[i].title}</td>
            <td>${dataPro[i].price}</td>
            <td>${dataPro[i].taxes}</td>
            <td>${dataPro[i].adds}</td>
            <td>${dataPro[i].discount}</td>
            <td>${dataPro[i].total}</td>
            <td>${dataPro[i].category}</td>
            <td><button onclick="updateData(${i})" id="update">update</button></td>
            <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
        </tr>
        `;
      }
    } else {
      if (dataPro[i].category.includes(value.toLowerCase())) {
        table += `
      <tr>
          <td>${i+1}</td>
          <td>${dataPro[i].title}</td>
          <td>${dataPro[i].price}</td>
          <td>${dataPro[i].taxes}</td>
          <td>${dataPro[i].adds}</td>
          <td>${dataPro[i].discount}</td>
          <td>${dataPro[i].total}</td>
          <td>${dataPro[i].category}</td>
          <td><button onclick="updateData(${i})" id="update">update</button></td>
          <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
      </tr>
      `;
      }
    }
  }
  document.getElementById("tbody").innerHTML = table;
}
// clean date
