
let d = new Date();

    document.getElementById("currentYear").textContent = d.getFullYear();

let lastUpdated = document.lastModified;

    document.getElementById("lastModified").textContent = lastUpdated;

function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById('hamburgerBtn').classList.toggle("open");
}
const x = document.getElementById('hamburgerBtn')
    x.onclick = toggleMenu;


const datefieldUK = document.querySelector(".date"); 
const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);
    datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

const curr = new Date().getDay();
const eventSection = document.querySelector(".event");
if (curr == 1 || curr == 2)
    {
    eventSection;
    }
else {
    eventSection.hidden = true;
    }