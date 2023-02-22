//Used to track how many visits are on the
// Discover page.

//Varible to hold the visits display
const disVisits = document.querySelector("#visit");
const dayVisits = document.querySelector("#daysVisit");

//Varible to hold the current date
const todayDate = new Date();
//Adjust to have only the month, day, and year
const todayMonth = todayDate.getMonth();
const todayDay = todayDate.getDate();
const todayYear = todayDate.getFullYear();

//Create new completeDate Variable
const completeDate = (todayMonth + todayDay + todayYear);

//Variable to hold the numbers plus
let daysPlus = 1;

//Get the infomation stored in the local variable
let numberVisits = Number(window.localStorage.getItem("visits-si"));

//Get the local date varible in the local storage
let pastTodayDate = Number(window.localStorage.getItem("pastD-si"));

//Get the local daysPlus varible in the local storage
daysPlus = Number(window.localStorage.getItem("plusDay-si"));

//See if this site has been visited before
if (numberVisits !== 0){
    disVisits.innerText = numberVisits;

    //Test to see if the current day is still today
    if(pastTodayDate !== completeDate){
        //Set the local variable
        localStorage.setItem("pastD-si", completeDate);
        
        //Add to daysPlus
        daysPlus += 1;

        //Set the local varible for daysPlus
        localStorage.setItem("plusDay-si", daysPlus);

        //Display Days
        dayVisits.innerText = daysPlus;
    }

    else{
        //Display Days
        dayVisits.innerText = daysPlus;
    }
} 

else{
    disVisits.innerText = `This is your first visit. Welcome!`;
    localStorage.setItem("pastD-si", completeDate);
    localStorage.setItem("plusDay-si", 1);
    //Days visits
    dayVisits.innerText = "1";
}

//Make the visits added by one
numberVisits++;

//Set local storage
localStorage.setItem("visits-si", numberVisits);

