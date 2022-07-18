//strict
'use strict';


if(localStorage.getItem('foods')===null){
    localStorage.setItem('foods',JSON.stringify([]));
}

let foods = JSON.parse(localStorage.getItem('foods'));;

let form = document.getElementById('food');




//food constructor
function Food(name, type, price) {
    this.name = name;
    this.type = type;
    this.price = price;
    foods.push(this);
}





//generate a unique id
Food.prototype.uniqueID = function () {
    return Math.floor(Math.random() * 10000);
}





//adding event listener
if(form){
form.addEventListener('submit', handleSubmit);
}


//Handling Submit
function handleSubmit(event) {
    event.preventDefault();

    
    let name = event.target.foodName.value;
    let type = event.target.totf.value;
    let price = event.target.price.value;

    let newFood = new Food(name, type, price);
    newFood.id =newFood.uniqueID();
    setData();
    
}

function setData(){
    localStorage.setItem('foods',JSON.stringify(foods))
}
