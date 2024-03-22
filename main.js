"use strict"

// this is the code for the all new crime committer


let ccVersion = 0.1;
let ccCodeName = "deep alpha";





// load the references to the tabs into this array
var tabElement = [];
tabElement[0] = document.getElementById("tabA_ID");
tabElement[1] = document.getElementById("tabB_ID");
tabElement[2] = document.getElementById("tabC_ID");
var tabTotalNumber = tabElement.length;





// this is the code for switching between tabs
// it doesn't affect the page. just the tabs

function setActiveTab(tabNumber) {

    //make sure trying to set legit tab value
    // unecessary imo
    // if ((tabNumber < 0) || (tabElement > (tabTotalNumber - 1))) {
    //     console.log("OOB trying to set active tab");
    //     return;
    // }

    // clear all tabs to inactive
    for (let index = 0; index < tabTotalNumber; index++) {
        tabElement[index].setAttribute("data-tabState", "inactive");
    }

    // now set which one active
    tabElement[tabNumber].setAttribute("data-tabState", "active");

}

// set up event listeners for tabs
for (let index = 0; index < tabTotalNumber; index++) {
    tabElement[index].addEventListener("click", () => setActiveTab(index));
}