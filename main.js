"use strict";

// this relies on a handful of scripts for different functions and data

// this is the code for the all new crime committer

// init some variables needed before functions
const ccVersion = 3.1;
const ccCodeName = "deep alpha";
let totalCrimesCommitted = 0;
let money = 0;
let refreshRate = 50; //ms between frames
let globalPrecision = 4; // precision of display of floating points
let cpsAveragedOnThisTime = 5000;
let mainCrimeNumbersRefreshRate = 50; // how often to refresh main crime numbers
let cpsAverageNumber = cpsAveragedOnThisTime / mainCrimeNumbersRefreshRate; // how many refreshes to maintain average

/*

totaltime = 2000
rr =50
2000/50 = 40
40 values over 2 seconds

cpsav = 2000/1000 = 2




*/

// extracts the integer number from the ID word
function getNumberFromID(crimeID) {
  // console.log(crimeCompleted);

  let position = crimeID.search("_");

  try {
    return parseInt(crimeID.slice(position + 1));
  } catch (error) {
    console.log(crimeID + " " + error);
  }
}

// make one event listener across whole gizmo Container
let gizmoContainerElement = document.getElementById("gizmoContainer_ID");
gizmoContainerElement.addEventListener("click", (elementClicked) => gizmoClicked_Start(elementClicked));

// the function called when there is a click anywhere in gizmozone

// this function walks up element chain until it
// works out what the ID of the gizmo is
// or returns null
function getGizmoID(elementClickedPointerEvent) {
  // this function takes a pointer event
  // first thing is get the target of the event and
  // then just work on targets and their parents
  // console.log(elementClickedPointerEvent);
  let tempElementTarget = elementClickedPointerEvent.target;

  do {
    // if this is the base (based on it's class), return ID
    if (tempElementTarget.classList.contains("gizmoBase")) {
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

function getBaseElementofGizmoClicked(elementClickedPointerEvent) {
  let tempElementTarget = elementClickedPointerEvent.target;
  do {
    // if this is the base (based on it's class), return ID
    if (tempElementTarget.classList.contains("gizmoBase")) {
      return tempElementTarget;
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
  newGizmo.classList.add("gizmoBase", "crimeGizmo");
  newGizmo.setAttribute("data-gizmoID", crimeIndexID);
  crimeArray[index].containerElement = newGizmo;
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
  newGizmoActiveCriminals.classList.add("criminalText");
  crimeArray[index].numCrimElement = newGizmoActiveCriminals;
  // times done
  let newGizmoTimesDone = document.createElement("div");
  newGizmo.appendChild(newGizmoTimesDone);
  newGizmoTimesDone.classList.add("criminalText");
  crimeArray[index].timesDoneElement = newGizmoTimesDone;
}
// create some gizmos
for (let index = 0; index < crimesConst.length; index++) {
  if (crimeArray[index].visible == true) {
    addNewGizmoToContainer(index);
  }
}

for (let index = 0; index < researchArray.length; index++) {
  researchArray[index].element = researchCreateElement(index);
}

/*
this is all the tab code
*/
// set up event listener
let tabContainerElement = document.getElementById("tabContainerID");
tabContainerElement.addEventListener("click", (elementClicked) => tabClicked(elementClicked));
// create arrays
let letterArray = ["A", "B", "C", "D", "E"];
let tabElement = [];
setTabElements(); // assign elements
setActiveTab(0); // init tabs
/*
all other tab code in tabCode.js
*/

function formatTime(timeInMS) {
  let formattedTime = "";
  let timeUntilComplete = 0;
  timeUntilComplete = dayjs.duration(dayjs(timeInMS), "millisecond");
  timeUntilComplete.days = timeUntilComplete.format("D");
  timeUntilComplete.hours = timeUntilComplete.format("H");
  timeUntilComplete.minutes = timeUntilComplete.format("mm");
  timeUntilComplete.seconds = timeUntilComplete.format("ss");
  timeUntilComplete.milliseconds = timeUntilComplete.format("SSS");

  if (timeUntilComplete.days > 0) {
    formattedTime += timeUntilComplete.days + "d " + timeUntilComplete.hours + "h " + timeUntilComplete.minutes + "m ";
  } else if (timeUntilComplete.hours > 0) {
    formattedTime += timeUntilComplete.hours + "h " + timeUntilComplete.minutes + "m ";
  } else if (timeUntilComplete.minutes > 0) {
    formattedTime += timeUntilComplete.minutes + "m ";
  }
  formattedTime += timeUntilComplete.seconds + "s";
  if (timeInMS < 10000) {
    formattedTime += " " + timeUntilComplete.milliseconds + "ms";
  }
  return formattedTime;
}

function getOrdinal(value) {
  let ordinal = "";
  switch (value) {
    case "1":
      ordinal = "st";
      break;
    case "2":
      ordinal = "nd";
      break;
    case "3":
      ordinal = "rd";
      break;
    default:
      ordinal = "th";
      break;
  }
  return ordinal;
}

// a more generic form of this. if anything clicked in the gizmozone
// the click event gets passed here
// see if can get the base element (otherwise do nothing)
// and then once got base event, switch depending on what class of base element
function gizmoClicked_Start(elementClickedPointerEvent) {
  let baseElementClicked = getBaseElementofGizmoClicked(elementClickedPointerEvent);
  if (baseElementClicked == null) {
    return;
  }
  if (baseElementClicked.classList.contains("crimeGizmo")) {
    gizmoClicked_Crime(elementClickedPointerEvent);
  } else if (baseElementClicked.classList.contains("facilityGizmo")) {
    gizmoClicked_Facility(elementClickedPointerEvent);
  } else if (baseElementClicked.classList.contains("researchGizmo")) {
    gizmoClicked_Research(elementClickedPointerEvent);
  }
}

function gizmoClicked_Crime(elementClickedPointerEvent) {
  let elementClickedTarget = elementClickedPointerEvent.target;
  let crimeIDofClickedGizmo = getGizmoID(elementClickedPointerEvent);
  let crimeIDNumberofClickedGizmo = getNumberFromID(crimeIDofClickedGizmo);
  // manage plus and minus buttons
  if (crimeIDofClickedGizmo == null) {
    return;
  }

  let gizmoClass = elementClickedTarget.getAttribute("class");
  switch (gizmoClass) {
    case "gizmoRecruitButton":
      let polarity = elementClickedTarget.getAttribute("data-polarity");
      recruitClicked(crimeIDNumberofClickedGizmo, polarity);
      break;
    case "gizmoTitle":
      showModal("crime", crimeIDNumberofClickedGizmo);

    default:
      break;
  }
}

function gizmoClicked_Facility(elementClickedPointerEvent) {
  let elementClickedTarget = elementClickedPointerEvent.target;
  let facilityID = getGizmoID(elementClickedPointerEvent);
  let facilityIDNumber = getNumberFromID(facilityID);
  if (facilityIDNumber == null) {
    return;
  }

  let gizmoClass = elementClickedTarget.getAttribute("class");
  switch (gizmoClass) {
    case "gizmoTitle":
      showModal("facility", facilityIDNumber);
  }
}
function gizmoClicked_Research(elementClickedPointerEvent) {
  let elementClickedTarget = elementClickedPointerEvent.target;
  let researchID = getGizmoID(elementClickedPointerEvent);
  let researchIDNumber = getNumberFromID(researchID);
  if (researchIDNumber == null) {
    return;
  }

  let gizmoClass = elementClickedTarget.getAttribute("class");
  switch (gizmoClass) {
    case "gizmoTitle":
      showModal("research", researchIDNumber);
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
    let currentCrimeID = getNumberFromID(currentElement.getAttribute("data-ProgressID"));
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
        newProgressText = "cps " + currentCrime.cpsRate.toFixed(3).replace(/\.?0*$/, "");
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
      if (newProgress > 1) {
        crimeCompleted(index);
      }
      // console.log(newProgress);
      if (index == 2) {
        // console.log(newProgress);
        // console.log(dayjs(durationStartToFinish).format("DD/MM/YY HH:mm:ss"));
      }
    }
  }
}

function initCrime(index) {
  let currentCrime = crimeArray[index];
  currentCrime.progress = 0;
  currentCrime.timeCrimeStarted = dayjs();
  setCrimeCompletionTime(index);
  // console.log("start time "+dayjs(currentCrime.timeCrimeStarted).format("mm:ss:sss")+" finish "+dayjs(currentCrime.timeCrimeWillEnd).format("mm:ss:sss"))
}

// this calculates time from now until crime complete
// based on how many people working on it
// and progress
function calcTimeToComplete(index) {
  let currentCrime = crimeArray[index];
  let currentProgress = currentCrime.progress;
  // console.log(currentProgress)
  if (currentCrime.numOfCriminals == 0) {
    return null;
  }
  let msLeft = ((1 - currentProgress) * crimesConst[index].ttc) / currentCrime.numOfCriminals;
  // if (msLeft < 250) {
  //   msLeft = 250;
  // }
  if (crimesConst[index].ttc / currentCrime.numOfCriminals < 1000) {
    currentCrime.state = 3; // go into cps mode
  } else {
    currentCrime.state = 1;
  }

  return msLeft;
}

function setCrimeCompletionTime(index) {
  let msLeft = calcTimeToComplete(index);
  // console.log(msLeft)
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
    currentCrime.timeCrimeWillEnd = dayjs().add(dayjs(50000, "millisecond"));
  }
  // console.log(timeLeft);

  return formatTime(timeLeft);
  return dayjs(timeLeft).format("mm:ss");
}

function crimeCompleted(index) {
  crimeArray[index].timesDone++;
  updateTimesDoneText(index);
  totalCrimesCommitted++;
  updateMainCrimeNumbers();
  // console.log("crime committed " + crimeArray[index].timesDone);
  initCrime(index);
}

function updateTimesDoneText(index) {
  crimeArray[index].timesDoneElement.innerHTML = "<bs>times done: " + crimeArray[index].timesDone.toFixed(0);
}

function updateCriminalNumbers(index) {
  for (let index = 0; index < crimeArray.length; index++) {
    crimeArray[index].numCrimElement.innerHTML = "<br>" + " active criminals: <br> " + crimeArray[index].numOfCriminals;
  }
}

function cpsMode(index) {
  let refreshRateInverse = 1000 / refreshRate;
  let currentCrime = crimeArray[index];
  let cpsRate = 1000 / (crimesConst[index].ttc / currentCrime.numOfCriminals);
  currentCrime.cpsRate = cpsRate;
  currentCrime.timesDone = currentCrime.timesDone + cpsRate / refreshRateInverse;
  totalCrimesCommitted = totalCrimesCommitted + cpsRate / refreshRateInverse;
  updateTimesDoneText(index);
}

function calculateVisibility() {
  crimeArray.forEach((element) => {
    if (element.visible == true) {
      return;
    }
    let buildingPrereqs = element.buildingPrereqs;
    let researchPrereqs = element.researchPrereqs;
    let buildingOK = false;
    let researchOK = false;

    if (buildingPrereqs.length == 0) {
      buildingOK = true;
    } else {
      buildingPrereqs.forEach((bPreReqs) => {
        if (bPreReqs.done == false) {
          buildingOK = false;
          return;
        }
        elseif(bPreReqs == true);
        {
          buildingOK = true;
        }
      });
    }

    if ((researchPrereqs.length = 0)) {
      researchOK = true;
      return;
    } else {
      researchPrereqs.forEach((rPreReqs) => {
        if (rPreReqs.done == flase) {
          researchOK = false;
          return;
        }
        elseif(rPreReqs == true);
        {
          buildingOK = true;
        }
      });
    }
    if (buildingOK == true && researchOK == true) {
      element.visible = true;
    }
  });
}

let lastTotalCrimesCommitted = 0;
let cpsAverage = Array(cpsAverageNumber).fill(0);

let rollingAve = 0;
let rollingAveTotal = 0;

function updateMainCrimeNumbers() {
  let cps = totalCrimesCommitted - lastTotalCrimesCommitted;

  cpsAverage[0] = cps;
  rollingAveTotal = 0;
  cpsAverage.forEach((index) => {
    rollingAveTotal += index;
  });
  rollingAve = (rollingAveTotal / cpsAverage.length) * 20;
  shiftcpsAverage();
  let newHTML =
    "crime committer " +
    ccVersion +
    "<br>" +
    ccCodeName +
    "<br><br>you got $" +
    money +
    "<br>" +
    "total crimes committed:" +
    totalCrimesCommitted.toFixed(0) +
    "<br>cps: " +
    rollingAve.toPrecision(globalPrecision);
  document.getElementById("titleAndVersionID").innerHTML = newHTML;
  lastTotalCrimesCommitted = totalCrimesCommitted;
}

function shiftcpsAverage() {
  for (let index = cpsAverageNumber; index > 0; index--) {
    cpsAverage[index] = cpsAverage[index - 1];
    // console.log(cpsAverage[index]);
  }
}

// initialisations before main loop

// this seems ridic and it is

setColorStyle(0);
setGamePalette(0);

updateMainCrimeNumbers();
updateCriminalNumbers();
updateCrimeProgressDiv();

//mainloop
function gameLoop() {
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

setInterval(() => gameLoop(), refreshRate);
setInterval(() => updateMainCrimeNumbers(), mainCrimeNumbersRefreshRate);
