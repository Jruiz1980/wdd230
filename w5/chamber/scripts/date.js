
const datefieldUK = document.querySelector(".date"); 
const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;
const eventSection = document.querySelector(".event");

if (now == 1 || now == 2){
eventSection;
}
else {
    eventSection.style.display = "none";
}
