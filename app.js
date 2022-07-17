//strict
'use strict';

//food list
let foods = [];
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
    Food.prototype.id = Math.floor(Math.random() * 10000);
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

    const newFood = new Food(name, type, price);

    newFood.uniqueID();
    if (newFood.id < 1000) {
        newFood.uniqueID();
    }

    if (foods != null) {
        setData();
    }
}

//set data in local storage
function setData() {
    localStorage.setItem("foods", JSON.stringify(foods));
}

//get data from local storage 
function getDdata() {
    let localData = localStorage.getItem("foods");

    let parseData = JSON.parse(localData);

    if (parseData != null) {
        for (let i = foods.length; i < parseData.length; i++) {
            new Food(parseData[i]['name'], parseData[i]['type'], parseData[i]['price']);
        }
    }

}

