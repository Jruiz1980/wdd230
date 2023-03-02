const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);  
    displayProphets(data.prophets);
}
getProphetData();
const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards'); // select the output container element

    prophets.forEach((prophet) => {
      // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let birth = document.createElement('h4');
        let place = document.createElement('h4');
        let children = document.createElement('h4');
        let prophetYears = document.createElement(`h4`)
        let death = document.createElement('h4');
        let portrait = document.createElement('img');

        // Build the h2 content out to show the prophet's full name - finish the template string
        h2.textContent = `${prophet.name} ${prophet.lastname}`;
        birth.textContent = `Birth: ${prophet.birthdate}`;
        place.textContent = `Place: ${prophet.birthplace}`;
        children.textContent = `Children: ${prophet.numofchildren}`;
        prophetYears.textContent = `Prophet Years: ${prophet.length}`;

        // Build the image portrait by setting all the relevant attribute
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        // Append the section(card) with the created elements
        card.appendChild(h2);
        card.appendChild(portrait);
        card.appendChild(birth);
        card.appendChild(place);
        card.appendChild(children);
        card.appendChild(prophetYears);
        card.appendChild(death);
        cards.appendChild(card);
    }) // end of forEach loop
} // end of function expression