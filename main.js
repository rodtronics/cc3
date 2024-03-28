"use strict";

// this is the code for the all new crime committer

// init some variables needed before functions
const ccVersion = 3.1;
const ccCodeName = "deep alpha";
let totalCrimesCommitted = 0;
let money = 0;

// crime data
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
// define the class
// none of this should duplicate what is in the crimes const
class crimeObjectClass {
  constructor(index) {
    this.crimeIndex = index;
    this.crimeIndexID = "crimeIndexID_" + this.crimeIndex;
    this.visible = true;
    this.running = false;
    this.numOfCriminals = 0;
    this.multiplier = 0; // this is ADDED onto 1
    this.category = null;
    this.timeCrimeStarted = 0;
    this.timeCrimeWillEnd = 0;
    this.state = 2; // 0 means paused & 1 is running. 3 means not ever started
    // 4 means now in crimes per second mode
    this.auto = 1;
    this.progress = 0.0;
    this.baseTimeToCompleteMS = 10000;
    this.progressElement = null;
    this.gizmoElement = null;
    this.recruitmentAddElement = null;
    this.recruitmentSubElement = null;
    this.numCrimElement = null;
    this.timesDoneElement = null;
    this.timesDone = 0;
    this.cpsRate = 0.0;
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

// extracts the integer number from the ID word
function getNumberFromCrimeID(crimeID) {
  return parseInt(crimeID.slice(13));
}

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

// make a crime gizmo
function addNewGizmoToContainer(index) {
  let crimeIndex = index;
  let crimeIndexID = "crimeIndexID_" + crimeIndex;

  // create the base of the gizmo
  // and give it the class gizmobase
  // meaning it holds the ID of the whole gizmo
  let newGizmo = document.createElement("div");
  newGizmo.classList.add("gizmoBase");
  newGizmo.setAttribute("data-gizmoID", crimeIndexID);
  crimeArray[index].gizmoElement = newGizmo;
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

  let newGizmoTimesDone = document.createElement("div");
  newGizmo.appendChild(newGizmoTimesDone);
  crimeArray[index].timesDoneElement = newGizmoTimesDone;
}
// create some gizmos
for (let index = 0; index < crimesConst.length; index++) {
  if (crimeArray[index].visible == true) {
    addNewGizmoToContainer(index);
  }
}

//called upon to switch tabs (display of tabs only)
function setActiveTab(tabNumber) {
  // clear all tabs to inactive
  for (let index = 0; index < tabTotalNumber; index++) {
    tabElement[index].setAttribute("data-tabState", "inactive");
  }
  // now set which one active
  tabElement[tabNumber].setAttribute("data-tabState", "active");
  // now switch background colour to reflect active tab
  document.getElementById("gizmoContainer_ID").setAttribute("data-backgroundColor", tabNumber);
  clearTabs();
  switch (tabNumber) {
    case 0:
      for (let index = 0; index < crimeArray.length; index++) {
        if (crimeArray[index].visible == true) {
          gizmoContainerElement.appendChild(crimeArray[index].gizmoElement);
        }
      }
      break;
    case 1:
      break;
    case 2:
      break;
    case 3:
      break;
  }
}

// what to do if a gizmo clicked
// incl switching thru what element class clicked
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

// when + or - buttons pressed
function recruitClicked(index, polarity) {
  // console.log(index, polarity);
  let criminals = crimeArray[index].numOfCriminals;

  switch (polarity) {
    case "sub":
      if (parseInt(criminals) > 0) {
        crimeArray[index].numOfCriminals--;
      }
      if (crimeArray[index].numOfCriminals == 0) {
        crimeArray[index].state = 0;
      }
      break;

    case "add":
      if (crimeArray[index].state == 2) {
        initCrime(index);
      }
      crimeArray[index].numOfCriminals++;
      crimeArray[index].state = 1;
  }
  recruitmentSetButtonsActivity(index, polarity);
  updateCriminalNumbers(index);
  setCrimeCompletionTime(index);
}

// changes the display of + and - buttons
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

function updateCrimeProgressDiv() {
  for (let index = 0; index < crimeArray.length; index++) {
    // get the crimeID so can apply data
    let currentElement = crimeArray[index].progressElement;
    let currentCrimeID = getNumberFromCrimeID(currentElement.getAttribute("data-ProgressID"));
    let currentCrime = crimeArray[currentCrimeID];
    let currentProgress = currentCrime.progress;
    let newProgressText = "";
    let currentState = currentCrime.state;
    // update html text
    // console.log(currentState);
    switch (currentState) {
      case 0: // paused
        newProgressText = "remaining: ∞";
        break;
      case 1: // running
        newProgressText = "remaining " + getCrimeTimeLeft(index);
        break;
      case 2: // never done
        newProgressText = "never done";
        break;
      case 3:
        newProgressText = "CPS " + currentCrime.cpsRate.toFixed(3);
        break;
      default:
        newProgressText = "??";
        break;
    }
    let newHTML = newProgressText;
    currentElement.innerHTML = newHTML;
  }
}

function updateCrimeProgressValue(index) {
  for (let index = 0; index < crimeArray.length; index++) {
    let currentCrime = crimeArray[index];
    if (currentCrime.state == 1) {
      let initTime = currentCrime.timeCrimeStarted;
      let finishTime = currentCrime.timeCrimeWillEnd;
      let durationStartToFinish = dayjs(finishTime).diff(dayjs(initTime));
      let durationNowToFinish = dayjs(finishTime).diff(dayjs());
      let newProgress = 1 - durationNowToFinish / durationStartToFinish;
      currentCrime.progress = newProgress;
      if (index == 2) {
        // console.log(newProgress);
        // console.log(dayjs(durationStartToFinish).format("DD/MM/YY HH:mm:ss"));
      }
    }
  }
}

function initCrime(index) {
  let currentCrime = crimeArray[index];
  currentCrime.timeCrimeStarted = dayjs();
  setCrimeCompletionTime(index);
}

// this calculates time from now until crime complete
// based on how many people working on it
// and progress
function calcTimeToComplete(index) {
  let currentCrime = crimeArray[index];
  let currentProgress = currentCrime.progress;
  if (currentCrime.numOfCriminals == 0) {
    return null;
  }
  let msLeft = ((1 - currentProgress) * currentCrime.baseTimeToCompleteMS) / currentCrime.numOfCriminals;
  if (msLeft < 250) {
    msLeft = 250;
  }
  if (currentCrime.baseTimeToCompleteMS / currentCrime.numOfCriminals < 1000) {
    currentCrime.state = 3;
  } else {
    currentCrime.state = 1;
  }

  return msLeft;
}

function setCrimeCompletionTime(index) {
  let msLeft = calcTimeToComplete(index);
  let currentCrime = crimeArray[index];
  let newCompletionTime = dayjs().add(dayjs(msLeft, "millisecond"));

  currentCrime.timeCrimeWillEnd = newCompletionTime;
  // console.log(dayjs());
  // console.log(crimeArray[index].timeCrimeWillEnd);
  return newCompletionTime;
}

function getCrimeTimeLeft(index) {
  let currentCrime = crimeArray[index];

  let timeLeft = dayjs(currentCrime.timeCrimeWillEnd).diff(dayjs());
  if (timeLeft < 0) {
    crimeCompleted(index);
    return "restarting";
  }
  // console.log(timeLeft);
  return dayjs(timeLeft).format("mm:ss");
}

function crimeCompleted(index) {
  crimeArray[index].timesDone++;
  updateTimesDone(index);
  totalCrimesCommitted++;
  updateMainCrimeNumbers();
  // console.log("crime committed " + crimeArray[index].timesDone);
  initCrime(index);
}

function updateTimesDone(index) {
  crimeArray[index].timesDoneElement.innerHTML = "<bs>times done: " + crimeArray[index].timesDone.toFixed(0);
}

function updateMainCrimeNumbers() {
  let newHTML =
    "crime committer " +
    ccVersion +
    "<br>" +
    ccCodeName +
    "<br><br><br>you got $" +
    money +
    "<br><br>" +
    "total crimes committed:<br>" +
    totalCrimesCommitted.toFixed(0);
  document.getElementById("titleAndVersionID").innerHTML = newHTML;
}

function updateCriminalNumbers(index) {
  for (let index = 0; index < crimeArray.length; index++) {
    crimeArray[index].numCrimElement.innerHTML = "<br>" + crimeArray[index].numOfCriminals + " crims working";
  }
}

function cpsMode(index) {
  let currentCrime = crimeArray[index];
  let cpsRate = 1000 / (currentCrime.baseTimeToCompleteMS / currentCrime.numOfCriminals);
  currentCrime.cpsRate = cpsRate;
  currentCrime.timesDone = currentCrime.timesDone + cpsRate / 4;
  totalCrimesCommitted = totalCrimesCommitted + cpsRate / 4;
  updateTimesDone(index);
}

// initialisations before main loop
let tabElement = [];
tabElement[0] = document.getElementById("tabA_ID");
tabElement[1] = document.getElementById("tabB_ID");
tabElement[2] = document.getElementById("tabC_ID");
tabElement[3] = document.getElementById("tabD_ID");
let tabTotalNumber = tabElement.length;

setActiveTab(0);

// set up event listeners for tabs
for (let index = 0; index < tabTotalNumber; index++) {
  tabElement[index].addEventListener("click", () => setActiveTab(index));
}

function clearTabs() {
  while (gizmoContainerElement.firstChild) {
    gizmoContainerElement.removeChild(gizmoContainerElement.lastChild);
  }
}

let colorStyle = 3;
setColorStyle(colorStyle);

updateMainCrimeNumbers();
updateCriminalNumbers();
updateCrimeProgressDiv();

//mainloop
function gameLoop() {
  updateMainCrimeNumbers();
  updateCriminalNumbers();
  updateCrimeProgressDiv();
  updateCrimeProgressValue();
  for (let index = 0; index < crimeArray.length; index++) {
    if (crimeArray[index].state == 3) {
      cpsMode(index);
    }
  }
  // window.requestAnimationFrame(gameLoop);

  // let currentCrime = crimeArray[2];
  // let initTime = currentCrime.timeCrimeStarted;
  // let finishTime = currentCrime.timeCrimeWillEnd;
  // let durationStartToFinish = dayjs(finishTime).diff(dayjs(initTime));
  // console.log(dayjs(durationStartToFinish).format("mm:ss:sss"));
}

setInterval(gameLoop, 250);
