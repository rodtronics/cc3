// these are functions that don't belong anywhere else

function defineGrid(thickness, spacing) {
  let newRLG_string_0 = "";
  let newRLG_string_90 = "";
  let newRLG_string_end = "";
  newRLG_string_0 = "repeating-linear-gradient(0deg, ";
  newRLG_string_90 = "repeating-linear-gradient(90deg, ";

  let RLG_units = "px";
  let RLG_colorA = "rgba(71, 46, 109,1)";
  let RLG_colorB = "rgba(0,0,0,0)";

  newRLG_string_end = RLG_colorA + " 0" + RLG_units + ", "; //color at 0%
  newRLG_string_end += RLG_colorA + " " + thickness + RLG_units + ", "; // color ending at thickness %
  newRLG_string_end += RLG_colorB + " " + thickness + RLG_units + ", "; //  color starting at thick%
  newRLG_string_end += RLG_colorB + " " + spacing + RLG_units + ")"; // fill color to end of repeat

  let newString = newRLG_string_0 + newRLG_string_end + "," + newRLG_string_90 + newRLG_string_end;

  return newString;
}

document.getElementById("gizmoContainer_ID").style.background = defineGrid(3, 25);

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
