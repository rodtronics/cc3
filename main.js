"use strict";

// this is the code for the all new crime committer

const ccVersion = 3.1;
const ccCodeName = "deep alpha";

const crimesConst = [
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
  { crime: "Blackmail", severity: "Moderate", earnings: "High", notoriousness: "High", timeToCommit: "Hours" },
];

let totalCrimesCommitted = 0;
let money = 0;

// define the class
// none of this should duplicate what is in the crimes const
class crimeObjectClass {
  constructor(index) {
    this.crimeIndex = index;
    this.crimeIndexID = "crimeIndexID_" + this.crimeIndex;
    this.visible = false;
    this.running = false;
    this.numOfCriminals = 0;
    this.multiplier = 0; // this is ADDED onto 1
    this.category = null;
    this.timeCrimeStarted = 0;
    this.timeCrimeWillEnd = 0;
    this.state = 0; // 0 means not running (or not yet started) & 1 is running
    this.auto = 1;
    this.progress = 0.0;
    this.baseTimeToCompleteMS = 10000;
    this.futureCompletionTime = 0;
    this.progressElement = null;
    this.recruitmentAddElement = null;
    this.recruitmentSubElement = null;
    this.numCrimElement = null;
  }
}

// generate array of crimes
// this holds some static info
// and dynamic info about the crime
// is set up so the index is the same as the number in CrimeID
// so that one can be used to get the other
let crimeArray = [];
for (let index = 0; index < crimesConst.length; index++) {
  crimeArray[index] = new crimeObjectClass(index);
}

// make it so low severty crimes auto visible
for (let index = 0; index < crimesConst.length; index++) {
  crimeArray[index].visible = true;
}

function getNumberFromCrimeID(crimeID) {
  return parseInt(crimeID.slice(13));
}

// this part of the script manages the changing of tabs when clicked upon
// load the references to the tabs into this array
var tabElement = [];
tabElement[0] = document.getElementById("tabA_ID");
tabElement[1] = document.getElementById("tabB_ID");
tabElement[2] = document.getElementById("tabC_ID");
tabElement[3] = document.getElementById("tabD_ID");

var tabTotalNumber = tabElement.length;

function setActiveTab(tabNumber) {
  // clear all tabs to inactive
  for (let index = 0; index < tabTotalNumber; index++) {
    tabElement[index].setAttribute("data-tabState", "inactive");
  }
  // now set which one active
  tabElement[tabNumber].setAttribute("data-tabState", "active");
  // now switch background colour to reflect active tab
  document.getElementById("gizmoContainer_ID").setAttribute("data-backgroundColor", tabNumber);
}

setActiveTab(0);
// set up event listeners for tabs
for (let index = 0; index < tabTotalNumber; index++) {
  tabElement[index].addEventListener("click", () => setActiveTab(index));
}
// done

// make one event listener across whole gizmo Container
let gizmoContainerElement = document.getElementById("gizmoContainer_ID");
gizmoContainerElement.addEventListener("click", (elementClicked) => gizmoClicked(elementClicked));

// the function called when there is a click anywhere in gizmozone

// this function walks up element chain until it
// works out what the ID of the gizmo is
// or returns null
function getCrimeIDofGizmo(elementClickedPointerEvent) {
  // this function takes a pointer event
  // first thing is get the target of the event and
  // then just work on targets and their parents
  // console.log(elementClickedPointerEvent);
  let tempElementTarget = elementClickedPointerEvent.target;

  do {
    // if this is the base (based on it's class), return ID
    if (tempElementTarget.getAttribute("class") == "gizmoBase") {
      let gizmoID = tempElementTarget.getAttribute("data-gizmoID");
      return gizmoID;
    }
    // else get the parent of the target and try again
    tempElementTarget = tempElementTarget.parentElement;
    // if we eventually go up the chain and get to <body>
    // before getting ID, return null
  } while (tempElementTarget.tagName != "BODY");
  return null;
}

function addNewGizmoToContainer(index) {
  let crimeIndex = index;
  let crimeIndexID = "crimeIndexID_" + crimeIndex;

  // create the base of the gizmo
  // and give it the class gizmobase
  // meaning it holds the ID of the whole gizmo
  let newGizmo = document.createElement("div");
  newGizmo.classList.add("gizmoBase");
  newGizmo.setAttribute("data-gizmoID", crimeIndexID);
  gizmoContainerElement.appendChild(newGizmo);

  // put the title element in the gizmo
  let newGizmoTitle = document.createElement("div");
  newGizmoTitle.classList.add("gizmoTitle");
  newGizmoTitle.innerHTML = crimesConst[crimeIndex].crime;
  newGizmo.appendChild(newGizmoTitle);

  // progress bar - also info about click to committ etc
  let newGizmoCrimeProgress = document.createElement("div");
  newGizmoCrimeProgress.setAttribute("data-progressID", crimeIndexID);
  newGizmoCrimeProgress.classList.add("gizmoProgress");
  newGizmoCrimeProgress.innerHTML = "not committing";
  newGizmo.appendChild(newGizmoCrimeProgress);
  crimeArray[index].progressElement = newGizmoCrimeProgress;

  //container for recruitment buttons
  let newGizmoRecruitContainer = document.createElement("div");
  newGizmoRecruitContainer.classList.add("gizmoRecruitContainer");
  newGizmo.appendChild(newGizmoRecruitContainer);

  // the subtract button
  let newGizmoRecruitSub = document.createElement("div");
  newGizmoRecruitSub.classList.add("gizmoRecruitButton");
  newGizmoRecruitSub.innerHTML = "-";
  newGizmoRecruitSub.setAttribute("data-buttonState", "inactive");
  newGizmoRecruitSub.setAttribute("data-polarity", "sub");
  newGizmoRecruitContainer.appendChild(newGizmoRecruitSub);
  crimeArray[index].recruitmentSubElement = newGizmoRecruitSub;

  // the add button
  let newGizmoRecruitAdd = document.createElement("div");
  newGizmoRecruitAdd.classList.add("gizmoRecruitButton");
  newGizmoRecruitAdd.innerHTML = "+";
  newGizmoRecruitAdd.setAttribute("data-buttonState", "active");
  newGizmoRecruitAdd.setAttribute("data-polarity", "add");
  newGizmoRecruitContainer.appendChild(newGizmoRecruitAdd);
  crimeArray[index].recruitmentAddElement = newGizmoRecruitAdd;

  // crimepeople
  let newGizmoActiveCriminals = document.createElement("div");
  newGizmo.appendChild(newGizmoActiveCriminals);
  crimeArray[index].numCrimElement = newGizmoActiveCriminals;
}
// create some gizmos
for (let index = 0; index < crimesConst.length; index++) {
  if (crimeArray[index].visible == true) {
    addNewGizmoToContainer(index);
  }
}
// an array holding the elements

//
//
//

function gizmoClicked(elementClickedPointerEvent) {
  // find out the crimeID of the gizmo
  let crimeIDofClickedGizmo = getNumberFromCrimeID(getCrimeIDofGizmo(elementClickedPointerEvent));
  let polarity = elementClickedPointerEvent.target.getAttribute("data-polarity");
  let target = elementClickedPointerEvent.target;
  // console.log(elementClickedPointerEvent.target);
  // do nothing if cant find an id
  if (crimeIDofClickedGizmo == null) {
    return;
  }

  // switch on class of clicked element
  let gizmoClass = elementClickedPointerEvent.target.getAttribute("class");
  switch (gizmoClass) {
    case "gizmoRecruitButton":
      recruitClicked(crimeIDofClickedGizmo, polarity);
      break;
    default:
      break;
  }
}

function recruitClicked(index, polarity) {
  // console.log(index, polarity);
  let criminals = crimeArray[index].numOfCriminals;

  switch (polarity) {
    case "sub":
      if (parseInt(criminals) > 0) {
        crimeArray[index].numOfCriminals--;
      }
      break;

    case "add":
      crimeArray[index].numOfCriminals++;
  }
  recruitmentSetButtonsActivity(index, polarity);

  updateCriminalNumbers(index);
}

function recruitmentSetButtonsActivity(index, polarity) {
  let criminals = crimeArray[index].numOfCriminals;
  // get the elements to change

  // if can remove a criminal then its active but if not then nto
  if (criminals < 1) {
    crimeArray[index].recruitmentSubElement.setAttribute("data-buttonState", "inactive");
  } else {
    crimeArray[index].recruitmentSubElement.setAttribute("data-buttonState", "active");
  }
}

function updateCrimeProgress() {
  for (let index = 0; index < crimeArray.length; index++) {
    // get the crimeID so can apply data
    let currentElement = crimeArray[index].progressElement;
    let currentCrimeID = getNumberFromCrimeID(currentElement.getAttribute("data-ProgressID"));
    let currentCrime = crimeArray[currentCrimeID];
    // get state and progress
    let currentState = currentCrime.state;
    let currentProgress = currentCrime.progress;
    let newProgressText = "";
    // update html text
    switch (currentCrime.state) {
      case 0:
        newProgressText = "∞";
        break;
      case 1:
        newProgressText = "??";
        break;
      default:
        newProgressText = "??";
        break;
    }
    let newHTML = "remaining: " + newProgressText;
    currentElement.innerHTML = newHTML;
  }
}
updateCrimeProgress();

function getCurrentTime() {
  let currentTime = dayjs();
}

// this calculates time from now until crime complete
// based on how many people working on it
// and progress
function calcTimeToComplete(index) {
  let currentCrime = crimeArray[index];

  let currentProgress = currentCrime.progress;
  if (currentProgress == 0) {
    return null;
  }
  let msLeft = (currentProgress * currentCrime.baseTimeToCompleteMS) / currentCrime.numOfCriminals;
  console.log(currentProgress);
  return msLeft;
}

function setCrimeCompletionTime(index, msLeft) {
  let currentCrime = crimeArray[index];
  let newCompletionTime = dayjs().add(dayjs(msLeft, "millisecond"));
  currentCrime.futureCompletionTime = newCompletionTime;
  console.log(msLeft);
}

let timeToComplete = calcTimeToComplete(0);
if (timeToComplete != null) {
  setCrimeCompletionTime(0, timeToComplete);
}
// setCrimeCompletionTime(0, calcTimeToComplete(0));

function updateMainCrimeNumbers() {
  let newHTML =
    "crime committer " + ccVersion + "<br>" + ccCodeName + "<br><br><br>you got $" + money + "<br><br>" + "total crimes committed:<br>" + totalCrimesCommitted;
  document.getElementById("titleAndVersionID").innerHTML = newHTML;
}

function updateCriminalNumbers(index) {
  for (let index = 0; index < crimeArray.length; index++) {
    crimeArray[index].numCrimElement.innerHTML = crimeArray[index].numOfCriminals + " crims working";
  }
}

updateMainCrimeNumbers();
updateCriminalNumbers();

let colorStyle = 3;
setColorStyle(colorStyle);

updateCrimeProgress();
