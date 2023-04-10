// Fresh js
const requestURL = 'https://brotherblazzard.github.io/canvas-content/fruit.json';

fetch(requestURL) 
.then( (response) => {
return response.json();
})
.then( (jsonObject) => {
selectControls(jsonObject, '#fruit1');
selectControls(jsonObject, '#fruit2');
selectControls(jsonObject, '#fruit3');
});

function selectControls(drinks, controlId) {
let select = document.querySelector(controlId)
for(let x in drinks) {
    let option =  document.createElement("option")
    option.innerHTML = drinks[x].name;
    option.value = drinks[x].name;
    select.appendChild(option);
}
select.selectedIndex = -1;
}

//fresh event
function openForm() {

const firstName = document.getElementById("fname").value;
const email = document.getElementById("email").value;
const phone = document.getElementById("phone").value;
const fruit1 = document.getElementById("fruit1").value;
const fruit2 = document.getElementById("fruit2").value;
const fruit3 = document.getElementById("fruit3").value;
const instructions = document.getElementById("instructions").value;
const date = new Date();

orderInfo(firstName, email, phone, date, fruit1, fruit2, fruit3, instructions);
nutritionInfo(fruit1, fruit2, fruit3);

document.getElementById("form-output").style.display = "block";
document.getElementById("submit-button").style.display = "none";
}

function closeForm() {
document.getElementById("form-output").style.display = "none";
document.getElementById("submit-button").style.display = "block";
}

function orderInfo(firstName, email, phone, date, fruit1, fruit2, fruit3, instructions) {
document.getElementById("order-fname").textContent = firstName;
document.getElementById("order-email").textContent = email;
document.getElementById("order-phone").textContent = phone;
document.getElementById("order-fruit1").textContent = fruit1;
document.getElementById("order-fruit2").textContent = fruit2;
document.getElementById("order-fruit3").textContent = fruit3;
document.getElementById("order-instructions").textContent = instructions;
document.getElementById("order-date").textContent = `order date: ${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
}

function nutritionInfo(fruit1, fruit2, fruit3) {


fetch(requestURL) 
    .then( (response) => {
    return response.json();
    })
    .then( (jsonObject) => {
    let fruit1_data = jsonObject.filter(fruit => fruit.name == fruit1)[0];
    let fruit2_data = jsonObject.filter(fruit => fruit.name == fruit2)[0];
    let fruit3_data = jsonObject.filter(fruit => fruit.name == fruit3)[0];

    const carbs = fruit1_data.nutritions.carbohydrates + fruit2_data.nutritions.carbohydrates + fruit3_data.nutritions.carbohydrates;
    const protein = fruit1_data.nutritions.protein + fruit2_data.nutritions.protein + fruit3_data.nutritions.protein;
    const sugar = fruit1_data.nutritions.sugar + fruit2_data.nutritions.sugar + fruit3_data.nutritions.sugar;
    const calories = fruit1_data.nutritions.calories + fruit2_data.nutritions.calories + fruit3_data.nutritions.calories;
    const fat = fruit1_data.nutritions.fat + fruit2_data.nutritions.fat + fruit3_data.nutritions.fat;
    document.getElementById("carbs").textContent = carbs.toFixed(0);
    document.getElementById("protein").textContent = protein.toFixed(0);
    document.getElementById("sugar").textContent = sugar.toFixed(0);
    document.getElementById("calories").textContent = calories.toFixed(0);
    document.getElementById("fat").textContent = fat.toFixed(0);
    });
}


let drinksCounter = Number(window.localStorage.getItem("drinks"));
drinksCounter++;
localStorage.setItem("drinks", drinksCounter);

// Drinks counter 
const drinks = document.querySelector("#drinks_purchased");
let drinksCount = Number(window.localStorage.getItem("drinks"));



