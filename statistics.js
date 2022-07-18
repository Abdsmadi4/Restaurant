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
function render() {
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

//lables
let labels = [];
for (let i = 0; i < foods.length; i++) {
    labels[i] = foods[i].type;
}

//data
let dataa = [];
let fav = 0;
let sf = 0;
let d=0;
let p = 0;
let f = 0;
for (let i = 0; i < foods.length; i++) {
    if(foods[i].type === 'fruit and vegetables'){
        fav++;
    }else if(foods[i].type === 'starchy food'){
        sf++;
    }else if(foods[i].type === 'dairy'){
        d++;
    }else if(foods[i].type === 'protein'){
        p++;
    }else if(foods[i].type === 'fat'){
        f++;
    }

}
dataa.push(fav);
dataa.push(sf);
dataa.push(d);
dataa.push(p);
dataa.push(f);


//setuop block
let data = {

    labels: labels,
    datasets: [{
        label: '# of Votes',
        data: dataa,
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
    }]

};
//options block
let options = {
    Plugins: {
        legend: {
            display: false
        }
    }
};
//config block
let config = {
    type: 'pie',
    data,
    options: {}
};

let myChart = new Chart(document.getElementById('myChart'), config);





//setup block
const labels2 = [];
for(let i=0;i<foods.length;i++){
    labels2[i]=foods[i].name
}
let dataa2 = [];
for(let i=0;i<foods.length;i++){
    dataa2[i] = foods[i].price;
}
console.log(dataa2);
 data = {
    labels: labels2,
  datasets: [{
    label: labels2,
    data: dataa2,
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)'
    ],
    borderWidth: 1
  }]
};
//options block
//config 
const config2 = {
    type: 'bar',
    data,
    options: {
        scales: {
            y: {
              beginAtZero: true
            }
          }
    },
  };

let myChart2 = new Chart(document.getElementById('myChart2'), config2);