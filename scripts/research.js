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

function researchGoButtonClicked(index) {
  let researchState = researchArray[index].state;
}
