"use strict";
const url ="https://jruiz1980.github.io/wdd230/w7/chamber/scripts/data.json";
let directory = "";
/*const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}*/
// Function to fetch data using async/await
async function getBusinessData() {
    const response = await fetch(url);
    const data = await response.json();

    directory = data.companies; 

    // Display Directory
    displayCompanies(data.companies);
}

const displayCompanies = (companies) => {
    const cards = document.querySelector("div.cards"); 

    companies.forEach((company) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        card.setAttribute("class", "dir-sect");
        let h2 = document.createElement('h2');
        let div = document.createElement("div");
        let logo = document.createElement('img');
    
        // Build the h2 content out to show the company name 
        h2.textContent = `${company.name}`;

        // Build div with description
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let url = document.createElement("a");
        url.setAttribute("href", company.src);

        // Set description content
        address.textContent = `${company.address}`
        phone.textContent = `${company.phone}`
        url.textContent = `${company.url}`

        // Append the paragraphs to div
        div.appendChild(address);
        div.appendChild(phone);
        div.appendChild(url);
    
        // Setting image attributes
        logo.setAttribute('src', company.imageurl);
        logo.setAttribute('alt', `Logo of ${company.name}`);
        logo.setAttribute('title', `Logo of ${company.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '150');
        logo.setAttribute('height', '150');
    
        // Append the section(card) with the created elements
        card.appendChild(logo);
        card.appendChild(h2);
        card.appendChild(div);
        
    
        cards.appendChild(card);
        cards.setAttribute("class", "cards gallery");
    }); 
}

const listCompanies = (companies) => {
    const cards = document.querySelector("div.cards"); 

    // Create table, thead and tbody
    let table = document.createElement("table");
    let tbody = document.createElement('tbody');

    companies.forEach((company) => {        
        // Create elements to add to the tbody element
        let row = document.createElement('tr');

        // Create elements to add to the tr element
        let name = document.createElement('td');
        let address = document.createElement("td");
        let phone = document.createElement("td");
        let tblurl = document.createElement("td");
        
        let url = document.createElement("a");
        tblurl.appendChild(url);

        // Set td content
        name.textContent = `${company.name}`;
        address.textContent = `${company.address}`;
        phone.textContent = `${company.phone}`;
        url.textContent = `${company.url}`;
        url.setAttribute("href", company.url);        

        // Append the td elements to row
        row.appendChild(name);
        row.appendChild(address);
        row.appendChild(phone);
        row.appendChild(tblurl);
    
        // Append the row to tbody
        tbody.appendChild(row);
    }); 

    table.appendChild(tbody);
    cards.appendChild(table);
    cards.setAttribute("class", "cards table-dir");
}

getBusinessData();

// B U T T O N S
const gallery = document.querySelector("#gallery-btn");
const list = document.querySelector("#list-btn");

// Gallery Directory
gallery.addEventListener("click", 
    function(){
    list.removeAttribute("class");
    gallery.setAttribute("class","active");

    // Clear HTML
    const node = document.querySelector(".cards");
    node.innerHTML = "";
    
    //Display Filter List
    displayCompanies(directory);
});

// List Directory
list.addEventListener("click", 
    function(){
    gallery.removeAttribute("class");
    list.setAttribute("class","active");

    // Clear HTML
    const node = document.querySelector(".cards");
    node.innerHTML = "";
    
    //Display Companies Table
    listCompanies(directory);
});