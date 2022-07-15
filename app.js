//strict
'use strict';

//food list
let foods =[];
const form = document.getElementById('food');

let foodsDiv = document.getElementById('render');

let foodListHeading = document.createElement('h3');
foodListHeading.setAttribute('id','flHeading');
foodListHeading.textContent = 'Foods Table';
foodsDiv.appendChild(foodListHeading);

let foodTable = document.createElement('table');
foodTable.setAttribute('id','fTable');
foodsDiv.appendChild(foodTable);


let thead = document.createElement('thead');
let tbody = document.createElement('tbody');
foodTable.appendChild(thead);
foodTable.appendChild(tbody);





//food constructor
function Food(name,type,price){
    this.name = name;
    this.type = type;
    this.price = price;

    foods.push(this);
}


// render instance
Food.prototype.renderTable = function(){
    
    let tr = document.createElement('tr');
    thead.appendChild(tr);

    let th1 = document.createElement('th');
    th1.textContent = 'ID';
    tr.appendChild(th1);

    let th2 = document.createElement('th');
    th2.textContent = 'Name';
    tr.appendChild(th2);

    let th3 = document.createElement('th');
    th3.textContent = 'Type';
    tr.appendChild(th3);

    let th4 = document.createElement('th');
    th4.textContent = 'Price';
    tr.appendChild(th4);
    
   };

Food.prototype.render = function(){
    let tr = document.createElement('tr');
    tbody.appendChild(tr);

    let td1 = document.createElement('td');
    td1.textContent = `${this.id}`;
    tr.appendChild(td1);

    let td2 = document.createElement('td');
    td2.textContent = `${this.name}`;
    tr.appendChild(td2);

    let td3 = document.createElement('td');
    td3.textContent = `${this.type}`;
    tr.appendChild(td3);

    let td4 = document.createElement('td');
    td4.textContent = `${this.price}`;
    tr.appendChild(td4);

}

//generate a unique id
Food.prototype.uniqueID = function(){
    Food.prototype.id = Math.floor(Math.random() * 10000);
}





//adding event listener
form.addEventListener('submit',handleSubmit);



//Handling Submit
function handleSubmit (event){
    event.preventDefault();

    let name = event.target.foodName.value;
    let type = event.target.totf.value;
    let price = event.target.price.value;
    
    const newFood = new Food(name,type,price);

    newFood.uniqueID();
    if(newFood.id < 1000){
        newFood.uniqueID();
    }


    if(foods.length === 1){
        newFood.renderTable();
    }

    newFood.render();
    console.log(foods);
}

