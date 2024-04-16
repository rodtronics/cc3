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
    this.multiplier = 0; // this is ADDED onto 1
    this.category = null;
    this.timeCrimeStarted = 0;
    this.timeCrimeWillEnd = 0;
    this.state = 0; // 0 means unstarted. 1 is running. 2 is paused. 3 is complete
    this.auto = 1;
    this.progress = 0.0; // deprecated
    this.data = {};
    this.data.numOfCriminals = 0;

    this.data.state = 0; // 0 means unstarted. 1 is running. 2 is paused. 3 is complete
    this.data.progress = 0;
    this.progressElement = null;
    this.containerElement = null;
    this.recruitmentAddElement = null;
    this.recruitmentSubElement = null;
    this.numCrimElement = null;
    this.timesDoneElement = null;
    this.data.timesDone = 0;
    this.cpsRate = 0.0;
    this.elements = {};
    this.elements.baseElement = null;
    this.elements.titleElement = null;
    this.elements.progressBarElement = null;
    this.elements.progressTextElement = null;
    this.elements.buttonElement = null;
    this.elements.numCrimElement = null;
    this.timerFunction = null;
    // this.updateCriminalNumber();
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
    let cost = crimesConst[this.index].cost || 0;

    if (this.data.state != 1) {
      // only check for money first time
      if (cost > 0 && global.money >= cost) {
        // if can afford, take off money
        global.money -= cost;
        global.updateMoney();
      } else if (cost > 0) {
        //must not be able to afford
        this.elements.progressBarElement.innerHTML = "cannot afford";
        return;
      }
    }
    this.data.numOfCriminals += 1;

    if (!this.timerFunction) {
      this.data.state = 1;
      this.timerFunction = setInterval(() => this.running(), global.refreshRate);
    }

    this.updateCriminalNumber();
    this.recruitmentSubElement.setAttribute("data-buttonState", "active");
    //
  }

  removeRecruit() {
    if (this.data.numOfCriminals == 0) {
      return;
    }
    this.data.numOfCriminals -= 1;
    this.data.numOfCriminals = Math.max(0, this.data.numOfCriminals);
    if (this.data.numOfCriminals < 1) {
      this.recruitmentSubElement.setAttribute("data-buttonState", "inactive");

      this.data.state = 2;
      this.pause();
    }
    this.updateCriminalNumber();
  }

  progressAsPercent() {
    return ((this.data.progress / crimesConst[this.index].baseTimeToCompleteMS) * 100).toPrecision(globalPrecision);
  }

  pause() {
    clearInterval(this.timerFunction);
    this.elements.progressBarElement.innerHTML = "halted<br>" + this.progressAsPercent() + "% complete";
    this.timerFunction = null;
  }

  running() {
    this.data.progress += global.refreshRate * this.data.numOfCriminals;
    if (this.data.progress > crimesConst[this.index].baseTimeToCompleteMS) {
      this.crimeCompleted();
    }
    this.updateProgressBar();
  }
  updateProgressBar() {
    let progress = this.data.progress / crimesConst[this.index].baseTimeToCompleteMS;
    let css = getLinearGradientCSS(progress, "white", "var(--palette-4)");
    // this.elements.progressBarElement.style.background = css;
    this.elements.progressBarElement.style.background = cssBuilder.plainProgressBar(
      this.progressAsPercent(progress),
      "var(--palette-4)",
      "var(--palette-4bright)"
    );

    let msLeft = (crimesConst[this.index].baseTimeToCompleteMS - this.data.progress) / this.data.numOfCriminals;
    let newProgressText = formatTime(msLeft);
    this.elements.progressBarElement.innerHTML = newProgressText;
  }

  crimeCompleted() {
    this.data.timesDone += 1;
    this.data.progress = 0;
    global.money += crimesConst[this.index].money == undefined ? 0 : crimesConst[this.index].money;
    global.updateMoney();
  }

  updateCriminalNumber() {
    this.elements.numCrimElement.innerHTML = this.data.numOfCriminals;
  }
}
// generate array of crimes
// this holds some static info
// and dynamic info about the crime
// is set up so the index is the same as the number in CrimeID
// so that one can be used to get the other

function crimeGizmoBuilder(index) {
  let crimeIndex = index;
  let crimeIndexID = "crimeIndexID_" + crimeIndex;

  // create the base of the gizmo
  // and give it the class gizmobase
  // meaning it holds the ID of the whole gizmo
  let newGizmo = document.createElement("div");
  newGizmo.classList.add("gizmoBase", "crimeGizmo");
  newGizmo.setAttribute("data-gizmoID", crimeIndexID);
  crimeArray[index].containerElement = newGizmo;
  // gizmoContainerElement.appendChild(newGizmo);

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
  crimeArray[index].elements.progressBarElement = newGizmoCrimeProgress;

  // the subtract button
  let newGizmoRecruitSub = document.createElement("div");
  newGizmoRecruitSub.classList.add("gizmoRecruitButton");
  newGizmoRecruitSub.innerHTML = "-";
  newGizmoRecruitSub.setAttribute("data-buttonState", "inactive");
  newGizmoRecruitSub.setAttribute("data-polarity", "sub");
  newGizmo.appendChild(newGizmoRecruitSub);
  crimeArray[index].recruitmentSubElement = newGizmoRecruitSub;

  // the add button
  let newGizmoRecruitAdd = document.createElement("div");
  newGizmoRecruitAdd.classList.add("gizmoRecruitButton");
  newGizmoRecruitAdd.innerHTML = "+";
  newGizmoRecruitAdd.setAttribute("data-buttonState", "active");
  newGizmoRecruitAdd.setAttribute("data-polarity", "add");
  newGizmo.appendChild(newGizmoRecruitAdd);
  crimeArray[index].recruitmentAddElement = newGizmoRecruitAdd;

  // crimepeople
  let newGizmoActiveCriminals = document.createElement("div");
  newGizmo.appendChild(newGizmoActiveCriminals);
  newGizmoActiveCriminals.classList.add("criminalText");
  crimeArray[index].elements.numCrimElement = newGizmoActiveCriminals;
}
// create some gizmos

// init crime array, create the objects, then create the elements
let crimeArray = [];
for (let index = 0; index < crimesConst.length; index++) {
  crimeArray[index] = new crimeObjectClass(index);
  crimeGizmoBuilder(index);
  crimeArray[index].updateCriminalNumber();
}
