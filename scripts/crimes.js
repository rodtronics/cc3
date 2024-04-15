// this is to make the second set of tabs that go under crimes

const secondaryCrimeTabsConst = ["primordial crimes", "minor crimes", "white collar crimes", "international crimes"];

class secondaryCrimeTabClass {
  constructor(index) {
    this.element = null;
    this.visible = true;
  }
}

let secondaryCrimeTabsArray = [];
for (let index = 0; index < secondaryCrimeTabsConst.length; index++) {
  secondaryCrimeTabsArray[index] = new secondaryCrimeTabClass(index);
}

// make the tab container element, returning the element
function createCrimeSectionTabs() {
  let crimeSectionTabContainer = document.createElement("div");
  crimeSectionTabContainer.classList.add("secondaryTabContainer_Class");

  // make the tabs themselves and add to array
  for (let index = 0; index < secondaryCrimeTabsConst.length; index++) {
    let newCrimeSectionSecondaryTab = document.createElement("div");
    newCrimeSectionSecondaryTab.classList.add("secondaryTabElement_Class");
    let newCrimeTabID = "crimeTabIndexID_" + index;
    newCrimeSectionSecondaryTab.setAttribute("crimeTabID", newCrimeTabID);
    newCrimeSectionSecondaryTab.innerHTML = secondaryCrimeTabsConst[index];
    secondaryCrimeTabsArray[index].element = newCrimeSectionSecondaryTab;
  }
  return crimeSectionTabContainer;
}

// define the class
// none of this should duplicate what is in the crimes const
class crimeObjectClass {
  constructor(index) {
    this.crimeIndex = index;
    this.index = index;
    this.crimeIndexID = "crimeIndexID_" + this.crimeIndex;
    this.visible = true;
    // this.running = false;
    this.numOfCriminals = 0;
    this.multiplier = 0; // this is ADDED onto 1
    this.category = null;
    this.timeCrimeStarted = 0;
    this.timeCrimeWillEnd = 0;
    this.state = 2; // 0 means paused & 1 is running. 2 means not ever started
    // 4 means now in crimes per second mode
    this.auto = 1;
    this.progress = 0.0;
    this.data = {};
    this.data.progress = 0;
    this.progressElement = null;
    this.containerElement = null;
    this.recruitmentAddElement = null;
    this.recruitmentSubElement = null;
    this.numCrimElement = null;
    this.timesDoneElement = null;
    this.timesDone = 0;
    this.cpsRate = 0.0;
    this.elements = {};
    this.elements.baseElement = null;
    this.elements.titleElement = null;
    this.elements.progressBarElement = null;
    this.elements.progressTextElement = null;
    this.elements.buttonElement = null;
    this.timer = null;
  }

  recruitClicked(polarity) {
    switch (polarity) {
      case "add":
        this.addRecruit();
        break;
      case "sub":
        this.removeRecruit();
        break;
    }
  }

  addRecruit() {
    this.numOfCriminals += 1;
    if (!this.timer) {
      this.state = 1;
      setInterval(() => this.running(mainCrimeNumbersRefreshRate), mainCrimeNumbersRefreshRate);
    }
  }

  removeRecruit() {
    this.numOfCriminals -= 1;
    if (this.numOfCriminals < 1) {
      this.state = 0;
      this.pause();
    }
  }

  pause() {
    clearInterval(this.timer);
    this.elements.progressBarElement.innerHTML = "∞";

    this.timer = null;
  }

  running(interval) {
    this.data.progress += interval * this.numOfCriminals;
    if (this.data.progress > crimesConst[this.index].baseTimeToCompleteMS) {
      this.crimeCompleted();
    }
    this.updateProgressBar();
  }
  updateProgressBar() {
    let progress = this.data.progress / crimesConst[this.index].baseTimeToCompleteMS;
    let css = getLinearGradientCSS(progress, "white", "var(--palette-4)");
    this.elements.progressBarElement.style.background = css;
    let msLeft = (crimesConst[this.index].baseTimeToCompleteMS - this.data.progress) / this.numOfCriminals;
    let newProgressText = formatTime(msLeft);
    this.elements.progressBarElement.innerHTML = newProgressText;
  }

  crimeCompleted() {
    this.timesDone += 1;
    this.data.progress = 0;
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

/*

let crimeElementBuilder = {
  baseElement(index) {
    let researchIndexID = "researchIndexID_" + index;
    let newResearchElement = document.createElement("div");
    newResearchElement.classList.add("gizmoBase", "researchGizmo");
    newResearchElement.setAttribute("data-gizmoID", researchIndexID);
    return newResearchElement;
  },

  titleElement(index) {
    let newResearchElementTitle = document.createElement("div");
    newResearchElementTitle.innerHTML = researchConst[index].name;
    newResearchElementTitle.classList.add("gizmoTitle", "researchTitleClass");
    return newResearchElementTitle;
  },
  progressBar() {
    let newResearchElementStatusContainer = document.createElement("div");
    newResearchElementStatusContainer.classList.add("researchProgressClass");
    return newResearchElementStatusContainer;
  },
  progressText() {
    let newResearchProgressString = document.createElement("div");
    newResearchProgressString.innerHTML = "0%";
    newResearchProgressString.classList.add("researchProgressTextClass");
    return newResearchProgressString;
  },
  buttonElement() {
    let newResearchButtonElement = document.createElement("div");
    newResearchButtonElement.innerHTML = "go";
    newResearchButtonElement.classList.add("researchButtonClass");
    return newResearchButtonElement;
  },
};





// make a crime gizmo
let crimeElementBuilder =
{
  baseElement(index){ 
  let crimeIndexID = "crimeIndexID_" + index;
  let newGizmo = document.createElement("div");
  newGizmo.classList.add("gizmoBase", "crimeGizmo");
    newGizmo.setAttribute("data-gizmoID", crimeIndexID);
    return newGizmo;
  },

  titleElement(index) {
    // put the title element in the gizmo
    let newGizmoTitle = document.createElement("div");
    newGizmoTitle.classList.add("gizmoTitle");
    newGizmoTitle.innerHTML = crimesConst[index].crime;
    return newGizmoTitle;
  
  },

  progressBar(index) {

    // progress bar - also info about click to committ etc
    let newGizmoCrimeProgress = document.createElement("div");
    newGizmoCrimeProgress.setAttribute("data-progressID", crimeIndexID);
    newGizmoCrimeProgress.classList.add("gizmoProgress");
    newGizmoCrimeProgress.innerHTML = "not committing";
    return newGizmoCrimeProgress;
  }

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


*/
