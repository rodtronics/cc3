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


// this part of the script is to try and create a gizmo
// this just appends one of these into the crimeGizmoWrapper
var crimeGizmoWrapperElement = document.getElementById("crimeGizmoWrapper_ID");
// once that's made I add an event listner across the entire gizmo div
// that'll callback a function that returns an identifier of what was clicked
crimeGizmoWrapperElement.addEventListener("click", (element) => whatGotClicked(element));

function gizmoClicked(elementClicked) {
    let elementClass = elementClicked.target.getAttribute("class");
}

function createGizmoTest(testWords) {
    let newGizmo = document.createElement("div");
    newGizmo.classList.add("gizmo");
    newGizmo.innerHTML = testWords;
    crimeGizmoWrapperElement.appendChild(newGizmo);
}
for (let index = 0; index < 16; index++) {
    createGizmoTest("newrods " + index);
}

// this function clears the gizmos utterly
// removes references and removes them from the DOM ready for GC
// idk if this is best for stopping leaks
// or is horribly inefficient. perhaps it'd be better to remove
// the divs from the DOM but keep them around
function clearAndDereferenceGizmos() {
    //first step is creating an array of every element inside
    // crimeGizmoWrapperElement
    let gizmoChildElements = crimeGizmoWrapperElement.children;
    for (let index = 0; index < gizmoChildElements.length; index++) {
        gizmoChildElements[index];

    }

}




clearAndDereferenceGizmos();