
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
