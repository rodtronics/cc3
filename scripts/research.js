let researchElementBuilder = {
  baseElement(index) {
    let researchIndexID = "researchIndexID_" + index;
    let newResearchElement = document.createElement("div");
    newResearchElement.classList.add("gizmoBase", "researchGizmo");
    newResearchElement.setAttribute("data-gizmoID", researchIndexID);
    return newResearchElement;
  },

  titleElement(index) {
    let newResearchElementTitle = document.createElement("div");
    newResearchElementTitle.innerHTML = researchArray[index].name;
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
};

function researchCreateElement(index) {
  let researchIndexID = "researchIndexID_" + index;

  // base of the gizmo
  let newResearchElement = document.createElement("div");
  newResearchElement.classList.add("gizmoBase", "researchGizmo");
  newResearchElement.setAttribute("data-gizmoID", researchIndexID);
  // researchArray[index].baseElement = newResearchElement;
  researchElementArray[index].baseElement = newResearchElement;

  // title of gizmo
  let newResearchElementTitle = document.createElement("div");
  newResearchElementTitle.innerHTML = researchArray[index].name;
  newResearchElementTitle.classList.add("gizmoTitle", "researchTitleClass");
  newResearchElement.appendChild(newResearchElementTitle);

  // progress container
  let newResearchElementStatusContainer = document.createElement("div");
  newResearchElementStatusContainer.classList.add("researchProgressClass");
  newResearchElement.appendChild(newResearchElementStatusContainer);
  // researchArray[index].progressContainerElement = newResearchElementStatusContainer;
  researchElementArray[index].progressContainerElement = newResearchElementStatusContainer;

  // progress text
  let newResearchProgressString = document.createElement("div");
  newResearchProgressString.innerHTML = "0%";
  newResearchProgressString.classList.add("researchProgressTextClass");
  newResearchElement.appendChild(newResearchProgressString);
  // researchArray[index].progressTextElement = newResearchProgressString;
  researchElementArray[index].progressTextElement = newResearchProgressString;

  // progress button
  let newResearchButtonElement = document.createElement("div");
  newResearchButtonElement.innerHTML = "go";
  newResearchButtonElement.classList.add("researchButtonClass");
  newResearchElement.appendChild(newResearchButtonElement);
  // researchArray[index].buttonElement = newResearchButtonElement;
  researchElementArray[index].buttonElement = newResearchButtonElement;
}

for (let index = 0; index < researchArray.length; index++) {
  researchCreateElement(index);
}

function updateResearchProgressBar(index) {
  let progressElement = researchArray[index].progressContainerElement;
  let newBackground = "";
  let newDeg = 70;
  newBackground = "linear-gradient(" + newDeg + "deg, white 0%, white ";
  newBackground += currentProgress + "%, var(--palette-4) " + currentProgress + "%, var(--palette-4) 100%";

  divElement.style.background = newBackground;
}

function updateResearchProgressBar22(index) {
  let divElement = crimeArray[index].progressContainerElement;
  // construct the moving progress bar
  let currentProgress = crimeArray[index].progress * 100;

  let newBackground = "";
  let newDeg = 70;
  newBackground = "linear-gradient(" + newDeg + "deg, white 0%, white ";
  newBackground += currentProgress + "%, var(--palette-4) " + currentProgress + "%, var(--palette-4) 100%";

  divElement.style.background = newBackground;
}

function getLinearGradientCSS(progress) {
  let currentProgress = progress * 100;
  let newBackground = "";
  let newDeg = 70;
  newBackground = "linear-gradient(" + newDeg + "deg, white 0%, white ";
  newBackground += currentProgress + "%, var(--palette-4) " + currentProgress + "%, var(--palette-4) 100%";
  return newBackground;
}

function researchGoButtonClicked(index) {
  let researchState = researchArray[index].state;
}

let researchMultiplier = 1;

class researchClass {
  constructor(index) {
    this.index = index;
    this.indexID = "researchIndexID_" + index;
    this.data = {};
    this.data.visible = true;
    this.data.state = 0; // 0 is unstarted, 1 is running, 2 is paused, 3 is completed
    this.data.timeStarted = null;
    this.data.timeWillEnd = null;
    this.data.progress = 0;
    this.elements = {};
    this.elements.baseElement = null;
    this.elements.progressBarElement = null;
    this.elements.progressTextElement = null;
    this.elements.buttonElement = null;
    this.timerFunction = null;
    this.timerRefresh = 100; // ms
  }

  startResearch() {
    if (!this.timerFunction) {
      switch (this.data.state) {
        case 1:
        case 3:
          break;
        case 0:
        case 2:
          this.timerFunction = setInterval(this.running(100), 100);
          break;
      }
    }
  }

  running(interval) {
    this.data.progress += interval * researchMultiplier;
    if (this.data.progress > researchConst[this.index].baseTimeToCompleteMS) {
      this.data.state = 3;
      clearInterval(this.timerFunction);
    }
  }

  updateProgressBar() {}
}
