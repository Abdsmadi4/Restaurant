//use strict
'use strict';

let foodsDiv = document.getElementById('render');

    let foodListHeading = document.createElement('h3');
    foodListHeading.setAttribute('id', 'flHeading');
    foodListHeading.textContent = 'Foods Table';
    foodsDiv.appendChild(foodListHeading);
    
    let foodTable = document.createElement('table');
    foodTable.setAttribute('id', 'fTable');
    foodsDiv.appendChild(foodTable);
    
    
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    foodTable.appendChild(thead);
    foodTable.appendChild(tbody);
    
    
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



render();



//renderdata function 
function render(){
    for (let i = 0; i < foods.length; i++) {
        let tr2 = document.createElement('tr');
        tbody.appendChild(tr2);
    
        let td1 = document.createElement('td');
        td1.textContent = `${foods[i].id}`;
        tr2.appendChild(td1);
    
        let td2 = document.createElement('td');
        td2.textContent = `${foods[i].name}`;
        tr2.appendChild(td2);
    
        let td3 = document.createElement('td');
        td3.textContent = `${foods[i].type}`;
        tr2.appendChild(td3);
    
        let td4 = document.createElement('td');
        td4.textContent = `${foods[i].price}`;
        tr2.appendChild(td4);
    }
    
}