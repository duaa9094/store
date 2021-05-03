'use strict';



let laptops = [];

function Laptop(brand, model, quantity, price, color) {
  this.brand = brand;
  this.model = model;
  this.quantity = quantity;
  this.price = price;
  this.color = color;

  laptops.push(this);
}




Laptop.prototype.render = function () {

  let tr = document.createElement('tr');
  table.appendChild(tr);

  let td = document.createElement('td');
  tr.appendChild(td);
  td.textContent = this.brand;

  td = document.createElement('td');
  tr.appendChild(td);
  td.textContent = this.model;

  td = document.createElement('td');
  tr.appendChild(td);
  td.textContent = this.quantity;

  td = document.createElement('td');
  tr.appendChild(td);
  td.textContent = this.price;

  td = document.createElement('td');
  tr.appendChild(td);
  td.textContent = this.color;
}



let form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  let brand = event.target.brand.value;
  let model = event.target.model.value;
  let quantity = event.target.quantity.value;
  quantity = parseInt(quantity);
  let price = event.target.price.value;
  price = parseInt(price);
  let gray = event.target.gray.checked;
  let black = event.target.black.checked;
  let white = event.target.white.checked;

  let color;
  if (gray) {
    color = 'gray';

  } else if (black) {
    color = 'black';

  } else {
    color = 'white';
  }


  new Laptop(brand, model, quantity, price, color);

  renderTable();
  saveToLS();

}


let table = document.getElementById('table');

function renderTable() {
  table.textContent = '';

  let tr = document.createElement('tr');
  table.appendChild(tr);

  let th = document.createElement('th');
  tr.appendChild(th);
  th.textContent = 'Brand';

  th = document.createElement('th');
  tr.appendChild(th);
  th.textContent = 'Model';

  th = document.createElement('th');
  tr.appendChild(th);
  th.textContent = 'Quantity';

  th = document.createElement('th');
  tr.appendChild(th);
  th.textContent = 'Price';

  th = document.createElement('th');
  tr.appendChild(th);
  th.textContent = 'Color';


  for (let i = 0; i < laptops.length; i++) {

    laptops[i].render();
  }

}


function saveToLS() {
  localStorage.setItem('laptops', JSON.stringify(laptops));

}

function getFromLS() {
  let savedlaptops = localStorage.getItem('laptops');
  savedlaptops = JSON.parse(savedlaptops);

  if (savedlaptops) {

    for (let i = 0; i < savedlaptops.length; i++) {
      let reInst = new Laptop(savedlaptops[i].brand, savedlaptops[i].model, savedlaptops[i].quantity, savedlaptops[i].price, savedlaptops[i].color);
    }
    renderTable();
  }
}

getFromLS();