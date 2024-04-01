"use strict";

// this is the code for the all new crime committer

// init some variables needed before functions
const ccVersion = 3.1;
const ccCodeName = "deep alpha";
let totalCrimesCommitted = 0;
let money = 0;
let refreshRate = 50; //ms between frames

class criminalsClass {
  constructor() {
    this.thugsTotal = 1;
    this.thugsFree = 1;
    this.associatesTotal = 0;
    this.associatesFree = 0;
    this.figuresTotal = 0;
    this.figuresFree;
    this.bossesTotal = 0;
    this.bossesFree = 0;
    this.transnationalsTotal = 0;
    this.transnationalsFree = 0;
  }
}

let criminals = new criminalsClass();
// crime data
const crimesConst = [
  { crime: "Petty Theft", description: "The act of stealing small items or goods of low value." },
  { crime: "Vandalism", description: "Willful destruction or damage to property that belongs to someone else." },
  { crime: "Trespassing", description: "Entering someone's property without permission." },
  { crime: "Disorderly Conduct", description: "Engaging in behavior that disturbs the peace in public places." },
  { crime: "Noise Violation", description: "Creating excessive noise that disturbs others." },
  { crime: "Loitering", description: "Remaining in a public place without a specific purpose or reason." },
  { crime: "Jaywalking", description: "Crossing a street unlawfully or outside of designated crosswalks." },
  { crime: "Graffiti", description: "Writing or drawing on public or private property without permission." },
  { crime: "Minor in Possession of Alcohol", description: "Underage individuals possessing or consuming alcoholic beverages." },
  { crime: "Public Intoxication", description: "Being visibly intoxicated in a public place." },
  { crime: "Reckless Driving", description: "Operating a vehicle in a manner that poses a risk to others' safety." },
  { crime: "Fraudulent Use of a Credit Card", description: "Illegally using someone else's credit card or credit card information." },
  { crime: "Forgery", description: "Falsifying or altering documents, signatures, or other items for fraudulent purposes." },
  { crime: "Identity Theft", description: "Using someone else's personal information without their consent for fraudulent purposes." },
  { crime: "Embezzlement", description: "Theft or misappropriation of funds or assets entrusted to one's care, typically by an employer." },
  { crime: "Money Laundering", description: "Concealing the origins of illegally obtained money by processing it through legitimate channels." },
  { crime: "Tax Evasion", description: "Illegally avoiding paying taxes owed to the government." },
  { crime: "Insider Trading", description: "Trading stocks or securities based on non-public, material information about a company." },
  { crime: "Intellectual Property Theft", description: "Unauthorized use or theft of copyrighted material, patents, or trade secrets." },
  { crime: "Cybercrime", description: "Criminal activities carried out using computers or the internet, such as hacking or phishing." },
  { crime: "Perjury", description: "Knowingly making false statements under oath during a legal proceeding." },
  { crime: "Contempt of Court", description: "Disobeying or disrespecting the authority of a court or its officers." },
  { crime: "Conspiracy", description: "Planning or agreeing with others to commit a crime or unlawful act." },
  { crime: "Extortion", description: "Coercing or blackmailing someone into providing money, services, or other valuables through threats or intimidation." },
  { crime: "Bribery", description: "Offering, giving, receiving, or soliciting something of value in exchange for influence or action in one's favor." },
  { crime: "Arson", description: "Intentionally setting fire to property or structures." },
  { crime: "Burglary", description: "Illegally entering a building or structure with the intent to commit theft, vandalism, or other crimes." },
  { crime: "Robbery", description: "Taking or attempting to take something of value from another person by force, threat, or intimidation." },
  { crime: "Kidnapping", description: "Unlawfully seizing, confining, abducting, or carrying away another person by force or threat." },
  { crime: "Homicide", description: "The unlawful killing of another person, whether intentional, accidental, or due to negligence." },
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
    this.containerElement = null;
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

const facilityConst = [
  { name: "Nightclubs", description: "Often used for illegal activities such as drug dealing, money laundering, or hosting illegal gambling." },
  { name: "Warehouses", description: "Criminals might use warehouses for storing illegal goods such as stolen merchandise, counterfeit products, or drugs." },
  { name: "Strip Clubs", description: "These establishments may be fronts for illegal activities such as human trafficking or prostitution." },
  { name: "Abandoned Buildings", description: "Criminals might take over abandoned buildings to conduct various illegal activities away from public view." },
  {
    name: "Hotels/Motels",
    description:
      "These establishments can be used for illegal activities such as drug dealing, prostitution, or human trafficking due to the transient nature of their clientele.",
  },
  { name: "Vacation Rentals", description: "Similar to hotels, vacation rentals can be used for illegal activities due to the lack of strict oversight." },
  { name: "Bars", description: "Some bars may serve as fronts for illegal activities such as drug dealing or illegal gambling." },
  {
    name: "Construction Sites",
    description: "Criminals might use construction sites to store illegal goods or equipment or to conduct illegal activities such as theft.",
  },
  { name: "Car Washes", description: "Car wash businesses can be used for money laundering or as fronts for drug distribution." },
  { name: "Storage Units", description: "Criminals might rent storage units to store illegal goods or equipment." },
  {
    name: "Gas Stations",
    description: "Gas stations can be used for illegal activities such as selling stolen goods, drug dealing, or as a meeting point for criminal activities.",
  },
  { name: "Factories", description: "Some factories might be used for illegal manufacturing operations such as producing counterfeit goods or illegal drugs." },
  {
    name: "Apartment Buildings",
    description: "Criminals might own or rent apartments within buildings to conduct illegal activities such as drug dealing or as hideouts for fugitives.",
  },
  {
    name: "Pawn Shops",
    description: "While legitimate pawn shops exist, some might engage in illegal activities such as fencing stolen goods or money laundering.",
  },
  {
    name: "Warehouses",
    description:
      "Often located in industrial areas, warehouses can be used for various illegal activities including storing stolen goods, counterfeit products, or illegal drugs.",
  },
  {
    name: "Cannabis Grow Houses",
    description:
      "In regions where cannabis cultivation is illegal, criminals might set up grow houses in residential or industrial areas to cultivate and distribute marijuana illegally.",
  },
  {
    name: "Internet Cafes/Gaming Arcades",
    description: "These establishments might be used for illegal online activities such as cybercrime or online gambling.",
  },
  {
    name: "Churches or Religious Buildings",
    description:
      "While uncommon, some criminals might use religious buildings as fronts for illegal activities or as meeting places due to their perceived sanctity.",
  },
  {
    name: "Vacant Lots",
    description: "Criminals might use vacant lots for illegal activities such as dumping toxic waste or conducting illegal transactions away from public view.",
  },
  {
    name: "Mobile Homes/Trailers",
    description:
      "Criminals might use mobile homes or trailers as temporary bases of operations for illegal activities such as drug manufacturing or human trafficking.",
  },
];
class facilityObjectClass {
  constructor(index) {
    this.name = facilityConst[index].name;
    this.facilityIndex = index;
    this.facilityIndexID = "facilityIndexID_" + index;
    this.visible = true;
    this.built = false;
    this.level = 1;
    this.element = null;
    this.buildingPrereqs = [];
    this.researchPrereqs = [];
  }
}

// generate array of facilities
let facilityArray = [];
for (let index = 0; index < facilityConst.length; index++) {
  facilityArray[index] = new facilityObjectClass(index);
}

const researchConst = [
  {
    name: "r/crimes",
    description: "you can learn about crimes here on reddit, the front page of the internet",
    buildingPrereqs: [],
    researchPrereqs: [],
    baseTimeToCompleteMS: 600000,
  },
];

class researchObjectClass {
  constructor(index) {
    this.name = researchConst[index].name;
    this.researchIndex = index;
    this.researchIndexID = "researchIndexID_" + index;
    this.visible = true;
    this.level = 1;
    this.buildingPrereqs = [];
    this.researchPrereqs = [];
  }
}

let researchArray = [];
for (let index = 0; index < researchConst.length; index++) {
  researchArray[index] = new researchObjectClass(index);
}

// extracts the integer number from the ID word
function getNumberFromCrimeID(crimeID) {
  // console.log(crimeCompleted);
  try {
    return parseInt(crimeID.slice(13));
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
function getCrimeIDofGizmo(elementClickedPointerEvent) {
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

function facilityCreateElement(index) {
  let newFacilityElement = document.createElement("div");
  newFacilityElement.innerHTML = facilityArray[index].name;
  newFacilityElement.classList.add("gizmoBase");
  return newFacilityElement;
}

for (let index = 0; index < facilityArray.length; index++) {
  facilityArray[index].element = facilityCreateElement(index);
}

function researchCreateElement(index) {
  let newResearchElement = document.createElement("div");
  newResearchElement.innerHTML = researchArray[index].name;
  newResearchElement.classList.add("gizmoBase");
  return newResearchElement;
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

//creates an array with the tab elements
function setTabElements() {
  for (let index = 0; index < 5; index++) {
    let constructedID = "tab" + letterArray[index] + "_ID";
    tabElement[index] = document.getElementById(constructedID);
  }
}

// callback function to deal with what to do when a tab is clicked
function tabClicked(elementClicked) {
  let tabClickedID = elementClicked.target.id;
  switch (tabClickedID) {
    case "tabA_ID":
      setActiveTab(0);
      break;
    case "tabB_ID":
      setActiveTab(1);
      break;
    case "tabC_ID":
      setActiveTab(2);
      break;
    case "tabD_ID":
      setActiveTab(3);
      break;
    case "tabE_ID":
      setActiveTab(4);
      break;
  }
}

// sets one tab as active and the rest as inactive
// also then switches and appends elements depending on tab
function setActiveTab(tabNumber) {
  // clear all tabs to inactive
  for (let index = 0; index < tabTotalNumber; index++) {
    tabElement[index].setAttribute("data-tabState", "inactive");
  }
  // now set which one active
  tabElement[tabNumber].setAttribute("data-tabState", "active");
  // now switch background colour to reflect active tab
  document.getElementById("gizmoContainer_ID").setAttribute("data-backgroundColor", tabNumber);
  clearGizmoElements();
  switch (tabNumber) {
    case 0:
      for (let index = 0; index < crimeArray.length; index++) {
        if (crimeArray[index].visible == true) {
          gizmoContainerElement.appendChild(crimeArray[index].containerElement);
        }
      }
      break;
    case 1:
      for (let index = 0; index < facilityArray.length; index++) {
        if (facilityArray[index].visible == true) {
          gizmoContainerElement.appendChild(facilityArray[index].element);
        }
      }
      break;
    case 2:
      for (let index = 0; index < researchArray.length; index++) {
        if (researchArray[index].visible == true) {
          gizmoContainerElement.appendChild(researchArray[index].element);
        }
      }
      break;
    case 3:
      break;
  }
}
// removes all the elements from the main game box
function clearGizmoElements() {
  while (gizmoContainerElement.firstChild) {
    gizmoContainerElement.removeChild(gizmoContainerElement.lastChild);
  }
}
let letterArray = ["A", "B", "C", "D", "E"];
let tabElement = [];

setTabElements();

let tabTotalNumber = tabElement.length;

setActiveTab(0);

//called upon to switch tabs (display of tabs only)

function showModal(infoType, index) {
  switch (infoType) {
    case "crime":
      document.getElementById("infoModalContentID").innerText = crimeArray[index].description;
      break;
  }
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
  if (elementClickedTarget.classList.contains("gizmoRecruitButton")) {
    let crimeIDofClickedGizmo = getCrimeIDofGizmo(elementClickedPointerEvent);

    let crimeIDNumberofClickedGizmo = getNumberFromCrimeID(crimeIDofClickedGizmo);
    if (crimeIDofClickedGizmo == null) {
      return;
    }

    let polarity = elementClickedPointerEvent.target.getAttribute("data-polarity");
    let target = elementClickedPointerEvent.target;

    let gizmoClass = elementClickedPointerEvent.target.getAttribute("class");
    switch (gizmoClass) {
      case "gizmoRecruitButton":
        recruitClicked(crimeIDNumberofClickedGizmo, polarity);
        break;
      case "gizmoTitle":
        showModal("crime", crimeIDNumberofClickedGizmo);

      default:
        break;
        console.log("recruit button");
    }
  }
}

function gizmoClicked_Facility(elementClickedPointerEvent) {}
function gizmoClicked_Research(elementClickedPointerEvent) {}

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
  let msLeft = ((1 - currentProgress) * currentCrime.baseTimeToCompleteMS) / currentCrime.numOfCriminals;
  // if (msLeft < 250) {
  //   msLeft = 250;
  // }
  if (currentCrime.baseTimeToCompleteMS / currentCrime.numOfCriminals < 1000) {
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
    crimeArray[index].numCrimElement.innerHTML = "<br>" + " active criminals: <br> " + crimeArray[index].numOfCriminals;
  }
}

function cpsMode(index) {
  let refreshRateInverse = 1000 / refreshRate;
  let currentCrime = crimeArray[index];
  let cpsRate = 1000 / (currentCrime.baseTimeToCompleteMS / currentCrime.numOfCriminals);
  currentCrime.cpsRate = cpsRate;
  currentCrime.timesDone = currentCrime.timesDone + cpsRate / refreshRateInverse;
  totalCrimesCommitted = totalCrimesCommitted + cpsRate / refreshRateInverse;
  updateTimesDoneText(index);
}

// initialisations before main loop

// this seems ridic and it is

let colorStyle = 4;
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

setInterval(gameLoop, refreshRate);
