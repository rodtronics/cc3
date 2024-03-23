"use strict"

// this is the code for the all new crime committer


let ccVersion = 0.1;
let ccCodeName = "deep alpha";




// this part of the script manages the changing of tabs when clicked upon
// load the references to the tabs into this array
var tabElement = [];
tabElement[0] = document.getElementById("tabA_ID");
tabElement[1] = document.getElementById("tabB_ID");
tabElement[2] = document.getElementById("tabC_ID");
var tabTotalNumber = tabElement.length;

// this is the code for switching between tabs
// it doesn't affect the page. just the tabs
function setActiveTab(tabNumber) {
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
// done



// this part of the script cycles the logo colors when its clicked on
// variables related to cycling the logo colors
var logoColorIndex = 0;
var logoColorLength = 6;
var logoElement = document.getElementById("titleID");
// a series of colors to cycle through
var logoColorArray = ["#CA2C92", "#008080", "#FF7F11", "#50C878", "#EE4B2B", "#01baef", ];
// set up event listener for clicking on logo
logoElement.addEventListener("click", () => cycleLogoColor());
// function that cycles logo colors;
function cycleLogoColor() {
    logoColorIndex++;
    logoColorIndex = logoColorIndex % logoColorLength
    logoElement.style.color = logoColorArray[logoColorIndex];
}
// done



// this part of the script is to try and create a gizmo
// this just appends one of these into the crimeGizmoWrapper
var crimeGizmoWrapperElement = document.getElementById("crimeGizmoWrapper_ID");

function createGizmoTest(testWords) {
    let newGizmo = document.createElement("div");
    newGizmo.classList.add("gizmo");
    newGizmo.innerHTML = testWords;
    crimeGizmoWrapperElement.appendChild(newGizmo);
}
for (let index = 0; index < 16; index++) {
    createGizmoTest("newrods " + index);
}