"use strict";

// this relies on a handful of scripts for different functions and data

// this is the code for the all new crime committer

// init some variables needed before functions
const ccVersion = 3.3;
const ccCodeName = "shallow alpha";
let totalCrimesCommitted = 0;
let moneyElement = document.getElementById("moneyID");
let refreshRate = 61.8 / 2; //ms between frames - genius to use phi so numbers dont have static numbers
let globalPrecision = 4; // precision of display of floating points
let cpsAveragedOnThisTime = 5000;
let mainCrimeNumbersRefreshRate = 61.8; // how often to refresh main crime numbers
let cpsAverageNumber = cpsAveragedOnThisTime / mainCrimeNumbersRefreshRate; // how many refreshes to maintain average

let global = {
  money: 10,
  updateMoney() {
    moneyElement.innerHTML = `$${this.money}`;
  },
  refreshRate: 61.8,
  precision: 4,
  activeTab: 0,
  basicThugs: 1,
};
global.updateMoney();

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

// for (let index = 0; index < researchArray.length; index++) {
//   researchArray[index].element = researchCreateElement(index);
// }

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

      crimeArray[crimeIDNumberofClickedGizmo].recruitClicked(polarity);

      // recruitClicked(crimeIDNumberofClickedGizmo, polarity);
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
  //
  let researchIDNumber = getNumberFromID(researchID);
  if (researchIDNumber == null) {
    return;
  }

  // I wanted to do a bunch of switches here but no luck lmao
  if (elementClickedTarget.classList.contains("researchTitleClass")) {
    showModal("research", researchIDNumber);
  } else if (elementClickedTarget.classList.contains("researchButtonClass")) {
    researchGoButtonClicked(researchIDNumber);
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
        newProgressText = "halted";
        break;
      case 1: // running
        newProgressText = "" + getCrimeTimeLeft(index);
        updateCrimeProgressProgressBar(index);
        break;
      case 2: // never done
        newProgressText = "uncommitted";
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

function updateCrimeProgressProgressBar(index) {
  let divElement = crimeArray[index].progressElement;
  // construct the moving progress bar
  let currentProgress = crimeArray[index].progress * 100;

  //  background: linear-gradient(0deg, #845ec2 0%, #d65db1 20%, #ff6f91 40%, #ff9671 60%, #ffc75f 80%, #f9f871 100%);
  let newBackground = "";
  let newDeg = 70;
  newBackground = "linear-gradient(" + newDeg + "deg, white 0%, white ";
  newBackground += currentProgress + "%, var(--palette-4) " + currentProgress + "%, var(--palette-4) 100%";

  divElement.style.background = newBackground;
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
  let msLeft = ((1 - currentProgress) * crimesConst[index].baseTimeToCompleteMS) / currentCrime.numOfCriminals;
  // if (msLeft < 250) {
  //   msLeft = 250;
  // }
  if (crimesConst[index].baseTimeToCompleteMS / currentCrime.numOfCriminals < 1000) {
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

  let msLeft = (crimesConst[index].baseTimeToCompleteMS - crimeArray[index].data.progress) / crimeArray[index].data.numOfCriminals;

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
  // updateMainCrimeNumbers();
  // console.log("crime committed " + crimeArray[index].timesDone);
  initCrime(index);

  writeSingleCrimeCookie(index);
}

function updateTimesDoneText(index) {
  // crimeArray[index].timesDoneElement.innerHTML = "<bs>times done: " + crimeArray[index].timesDone.toFixed(0);
}

function updateCriminalNumbers(index) {
  for (let index = 0; index < crimeArray.length; index++) {
    crimeArray[index].numCrimElement.innerHTML = "<br>" + " active criminals: <br> " + crimeArray[index].numOfCriminals;
  }
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

setColorStyle(0);
setGamePalette(0);

// this will read all the cookies, and if there will overright what is there
readCrimeCookies();

setInterval(() => WriteAllCrimeCookies(), 60000); // save game to cookies every minute
