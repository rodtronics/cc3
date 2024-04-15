// these are functions that don't belong anywhere else

/*















*/

// and these are functions which can probably be deleted
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
    "crime committer " + ccVersion + "<br>" + ccCodeName + "<br><br>you got $" + money + "<br>" + "total crimes committed:" + totalCrimesCommitted.toFixed(0);
  // "<br>cps: " +
  // rollingAve.toPrecision(globalPrecision);
  document.getElementById("titleAndVersionID").innerHTML = newHTML;
  lastTotalCrimesCommitted = totalCrimesCommitted;
}

function shiftcpsAverage() {
  for (let index = cpsAverageNumber; index > 0; index--) {
    cpsAverage[index] = cpsAverage[index - 1];
    // console.log(cpsAverage[index]);
  }
}

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

// for (let index = 0; index < researchArray.length; index++) {
//   researchCreateElement(index);
// }

class researchObjectClass {
  constructor(index) {
    this.name = researchConst[index].name;
    this.researchIndex = index;
    this.researchIndexID = "researchIndexID_" + index;
    this.visible = true;
    this.done = false;
    this.level = 1;
    // state 0 is unstarted, 1 is running, 2 is paused
    this.state = 0;
    this.timeStarted = 0;
    this.timeWillEnd = 0;
    this.baseElement = null;
    this.statusElement = null;
  }
}
