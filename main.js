"use strict"

// this is the code for the all new crime committer


const ccVersion = 3.1;
const ccCodeName = "deep alpha";

const crimes = [
    { crime: "Trespassing", severity: "Very Low", earnings: "Low", notoriousness: "Low", timeToCommit: "Minutes" },
    { crime: "Vandalism", severity: "Very Low", earnings: "Low", notoriousness: "Low", timeToCommit: "Minutes" },
    { crime: "Public intoxication", severity: "Very Low", earnings: "N/A", notoriousness: "Low", timeToCommit: "N/A" },
    { crime: "Shoplifting", severity: "Very Low", earnings: "Low", notoriousness: "Low", timeToCommit: "Seconds" },
    { crime: "Theft", severity: "Very Low", earnings: "Low", notoriousness: "Low", timeToCommit: "Minutes" },
    { crime: "Breaking and entering", severity: "Low", earnings: "Moderate", notoriousness: "Moderate", timeToCommit: "Minutes" },
    { crime: "Forgery", severity: "Low", earnings: "Moderate", notoriousness: "Moderate", timeToCommit: "Hours" },
    { crime: "Money counterfeiting", severity: "Low", earnings: "High", notoriousness: "High", timeToCommit: "Days" },
    { crime: "Car theft", severity: "Low", earnings: "High", notoriousness: "Moderate", timeToCommit: "Minutes" },
    { crime: "Breaking and entering", severity: "Low", earnings: "Moderate", notoriousness: "Moderate", timeToCommit: "Minutes" },
    { crime: "White-collar crime", severity: "Low", earnings: "High", notoriousness: "High", timeToCommit: "Months" },
    { crime: "Intellectual property theft", severity: "Low", earnings: "High", notoriousness: "High", timeToCommit: "Hours" },
    { crime: "Credit card theft", severity: "Low", earnings: "High", notoriousness: "High", timeToCommit: "Minutes" },
    { crime: "Check fraud", severity: "Low", earnings: "Moderate", notoriousness: "High", timeToCommit: "Hours" },
    { crime: "Identity fraud", severity: "Low", earnings: "High", notoriousness: "High", timeToCommit: "Hours" },
    { crime: "Welfare fraud", severity: "Low", earnings: "Moderate", notoriousness: "High", timeToCommit: "Days" },
    { crime: "Tax fraud", severity: "Low", earnings: "High", notoriousness: "High", timeToCommit: "Weeks" },
    { crime: "Cyber fraud", severity: "Low", earnings: "High", notoriousness: "High", timeToCommit: "Hours" },
    { crime: "Piracy", severity: "Low", earnings: "Low", notoriousness: "Low", timeToCommit: "Seconds" },
    { crime: "Hacking", severity: "Low", earnings: "High", notoriousness: "High", timeToCommit: "Hours" },
    { crime: "Scams", severity: "Low", earnings: "High", notoriousness: "High", timeToCommit: "Days" },
    { crime: "Pyramid schemes", severity: "Low", earnings: "High", notoriousness: "High", timeToCommit: "Months" },
    { crime: "Insurance scams", severity: "Low", earnings: "High", notoriousness: "High", timeToCommit: "Weeks" },
    { crime: "Counterfeiting", severity: "Low", earnings: "High", notoriousness: "Moderate", timeToCommit: "Days" },
    { crime: "Money laundering", severity: "Moderate", earnings: "High", notoriousness: "High", timeToCommit: "Months" },
    { crime: "Embezzlement", severity: "Moderate", earnings: "High", notoriousness: "High", timeToCommit: "Years" },
    { crime: "Cyber extortion", severity: "Moderate", earnings: "High", notoriousness: "High", timeToCommit: "Hours" },
    { crime: "Fraudulent schemes", severity: "Moderate", earnings: "High", notoriousness: "High", timeToCommit: "Months" },
    { crime: "Bribery", severity: "Moderate", earnings: "High", notoriousness: "High", timeToCommit: "Days" },
    { crime: "Blackmail", severity: "Moderate", earnings: "High", notoriousness: "High", timeToCommit: "Hours" }
  ];




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

    console.log(elementGizmoID);
    };


function createGizmoTest(testWords) {
    let crimeIndex = Math.floor(Math.random() * crimes.length);

    let newGizmo = document.createElement("div");
    newGizmo.classList.add("gizmoBase");
    newGizmo.setAttribute("data-gizmoID", testWords);
    crimeGizmoWrapperElement.appendChild(newGizmo);

    let newGizmoTitle = document.createElement("div");
    newGizmoTitle.classList.add("gizmoTitle");
    newGizmoTitle.innerHTML = crimes[crimeIndex].crime;
    newGizmo.appendChild(newGizmoTitle);

    let newGizmoSeverityWrapper = document.createElement("div");
    newGizmoSeverityWrapper.classList.add("gizmoSeverityWrapper");
    newGizmo.appendChild(newGizmoSeverityWrapper);

    let newGizmoSeverityWord = document.createElement("div");
    newGizmoSeverityWord.classList.add("gizmoSeverityWord");
    newGizmoSeverityWord.innerHTML = "severity";
    newGizmoSeverityWrapper.appendChild(newGizmoSeverityWord);

    let newGizmoSeverity = document.createElement("div");
    newGizmoSeverity.classList.add("gizmoSeverity");
    newGizmoSeverity.innerHTML = crimes[crimeIndex].severity;
    newGizmoSeverityWrapper.appendChild(newGizmoSeverity);


}
for (let index = 0; index < 79; index++) {
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





// generally, define all the functions and variables etc,
// and then after this, start the actual execution of the program
// one reason is that if something fails it's obvious the js isn't working


// set the version number and name
document.getElementById("titleAndVersionID").innerHTML = ("crime committer v"+ccVersion + "<br>" + ccCodeName);