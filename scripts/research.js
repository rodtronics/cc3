function elementBuilder(object) {}

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

function getLinearGradientCSS(progress, endColorArg, startColorArg) {
  let currentProgress = progress * 100;
  let endColor = endColorArg == null ? "var(--palette-5)" : endColorArg;
  let startColor = startColorArg == null ? "black" : startColorArg;
  let newBackground = "";
  let newDeg = 70;
  newBackground = "linear-gradient(" + newDeg + "deg, " + endColor + " 0%, " + endColor + " ";
  newBackground += currentProgress + "%, " + startColor + " " + currentProgress + "%, " + startColor + " 100%";
  return newBackground;
}

function researchGoButtonClicked(index) {
  let researchState = researchArray[index].data.state;

  switch (researchState) {
    case 0:
    case 2:
      researchArray[index].startResearch();
      break;
    case 1:
      researchArray[index].pauseResearch();
      break;
  }
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
    this.elements.titleElement = null;
    this.elements.progressBarElement = null;
    this.elements.progressTextElement = null;
    this.elements.buttonElement = null;
    this.timerFunction = null;
    this.timerRefresh = 100; // ms
  }

  pauseResearch() {
    if (this.timerFunction) {
      this.elements.buttonElement.innerHTML = "paused";
      clearInterval(this.timerFunction);
      this.timerFunction = null;
      this.data.state = 2;
    }
  }

  startResearch() {
    if (!this.timerFunction) {
      this.data.state = 1;
      this.elements.buttonElement.innerHTML = "pause";
      this.timerFunction = setInterval(() => this.running(), global.refreshRate);
    }
  }

  running(interval) {
    this.updateProgressBar();
    this.data.progress += interval * researchMultiplier;
    if (this.data.progress > researchConst[this.index].baseTimeToCompleteMS) {
      this.completed();
    }
  }

  completed() {
    this.data.state = 3;
    clearInterval(this.timerFunction);
    this.elements.progressTextElement.innerHTML = "completed";
  }

  updateProgressBar() {
    let progress = this.data.progress / researchConst[this.index].baseTimeToCompleteMS;
    let css = getLinearGradientCSS(progress);
    this.elements.progressBarElement.style.background = css;
    let msLeft = (researchConst[this.index].baseTimeToCompleteMS - this.data.progress) / researchMultiplier;
    let newProgressText = formatTime(msLeft);
    this.elements.progressTextElement.innerHTML = newProgressText;
  }
}

let researchArray = [];
for (let index = 0; index < researchConst.length; index++) {
  // new object
  researchArray[index] = new researchClass(index);
  // build elements in array
  thisResearch = researchArray[index];
  thisResearch.elements.baseElement = researchElementBuilder.baseElement(index);
  thisResearch.elements.titleElement = researchElementBuilder.titleElement(index);
  thisResearch.elements.progressBarElement = researchElementBuilder.progressBar(index);
  thisResearch.elements.progressTextElement = researchElementBuilder.progressText(index);
  thisResearch.elements.buttonElement = researchElementBuilder.buttonElement(index);
  // append elements
  thisResearch.elements.baseElement.appendChild(thisResearch.elements.titleElement);
  thisResearch.elements.baseElement.appendChild(thisResearch.elements.progressBarElement);
  thisResearch.elements.baseElement.appendChild(thisResearch.elements.progressTextElement);
  thisResearch.elements.baseElement.appendChild(thisResearch.elements.buttonElement);
}

// function updateResearchProgressBar(index) {
//   let progressElement = researchArray[index].progressContainerElement;
//   let newBackground = "";
//   let newDeg = 70;
//   newBackground = "linear-gradient(" + newDeg + "deg, white 0%, white ";
//   newBackground += currentProgress + "%, var(--palette-4) " + currentProgress + "%, var(--palette-4) 100%";

//   divElement.style.background = newBackground;
// }

// function updateResearchProgressBar22(index) {
//   let divElement = crimeArray[index].progressContainerElement;
//   // construct the moving progress bar
//   let currentProgress = crimeArray[index].progress * 100;

//   let newBackground = "";
//   let newDeg = 70;
//   newBackground = "linear-gradient(" + newDeg + "deg, white 0%, white ";
//   newBackground += currentProgress + "%, var(--palette-4) " + currentProgress + "%, var(--palette-4) 100%";

//   divElement.style.background = newBackground;
// }
