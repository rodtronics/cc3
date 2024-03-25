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


// define var
var crimeGizmoWrapperElement = document.getElementById("crimeGizmoWrapper_ID");
// once that's made I add an event listner across the entire gizmo div
// that'll callback a function that returns an identifier of what was clicked
crimeGizmoWrapperElement.addEventListener("click", (elementClicked) => gizmoClicked(elementClicked));

function gizmoClicked(elementClicked) {
    // get info about clicked gizmo
    let elementCSSClass = elementClicked.target.getAttribute("class");
    let elementGizmoID = elementClicked.target.getAttribute("data-gizmoID");

    // switch to determine where to go from there
    switch (elementCSSClass) {
        case "gizmoBase":
            console.log("gizmo class")
            break;

        default:
            console.log("other")
            break;
    };
}

function createGizmoTest(testWords) {
    let newGizmo = document.createElement("div");
    newGizmo.classList.add("gizmoBase");
    newGizmo.setAttribute("data-gizmoID", testWords);
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
    console.log(gizmoChildElements.length);

}




clearAndDereferenceGizmos();