/// some init
let modalContainerElement = document.getElementById("modal_CrimeInfo_Container");
let modalContentElement = document.getElementById("modal_CrimeInfo_Inner");
let modalInfoTitle = document.getElementById("modal_CrimeInfo_Title");
let crimeModalUpdateIntervalID = null;
// add listener for model to close by clicking
// might need to change this if ever make it so can edit things on modal
modalContainerElement.addEventListener("click", () => closeModal());

function showModal(infoType, index) {
  let newHTML = "";
  switch (infoType) {
    case "crime":
      // set info in modal
      modalTextBuilder.initAll(index);
      // set up interval update so modal updates while on screen
      crimeModalUpdateIntervalID = setInterval(() => modalTextBuilder.update(index), global.refreshRate);
      break;
    case "facility":
      newHTML = createFacilityModalText(index);
      break;
    case "research":
      newHTML = createResearchModalText(index);
      break;
    default:
      return;
      break;
  }
  // once set text, display modal
  modalContainerElement.style.display = "block";
}

function closeModal() {
  modalContainerElement.style.display = "none";
  clearInterval(crimeModalUpdateIntervalID);
  crimeModalUpdateIntervalID = null;
}

function createFacilityModalText(index) {
  let newHTML = "";
  newHTML += "<h1>" + facilityConst[index].name + "</h1><br>";
  newHTML += facilityConst[index].description;

  return newHTML;
}

function endTime(index) {
  msLeft = msLeftf(index);
  let timeCrimeWillEnd = dayjs().add(dayjs(msLeft, "millsecond"));
  let day = dayjs(timeCrimeWillEnd, "millsecond").format("D");
  let ordinal = getOrdinal(day);

  finishTime = dayjs(timeCrimeWillEnd, "millisecond").format("h:mma on dddd [the] D") + ordinal + dayjs(timeCrimeWillEnd, "millisecond").format(" MMM YYYY");

  return finishTime;
}

function updateCrimeModal(index) {
  let newHTML = createCrimeModalText(index);
  // modalContentElement.innerHTML = newHTML;
}

function createResearchModalText(index) {
  let newHTML = "";
  newHTML += "<h1>" + researchConst[index].name + "</h1><br>";
  newHTML += researchConst[index].description;
  return newHTML;
}

const modalElementConst = [
  { id: "descriptionID", gridArea: "" },
  { id: "timesDoneID", gridArea: "" },
  { id: "progressID", gridArea: "" },
  { id: "baseTimeToCompleteMSID", gridArea: "" },
  { id: "newTimeID", gridArea: "" },
  { id: "timeLeftID", gridArea: "" },
  { id: "costID", gridArea: "" },
  { id: "lootID", gridArea: "" },
  { id: "resourcesNeededID", gridArea: "" },
  { id: "endTimeID", gridArea: "" },
  { id: "stateID", gridArea: "" },
];

let modalElementArray = [];

let modalElementBuilder = {
  createSimpleDiv() {
    let newDiv = document.createElement("div");
    return newDiv;
  },
  setModalID(element, ID) {
    element.id = ID;
    element.classList.add("modalSection");
  },

  newElement(index) {
    let newElement = this.createSimpleDiv();
    this.setModalID(newElement, modalElementConst[index].id);
    newElement.style.setProperty("grid-area", modalElementConst[index].gridArea);
    return newElement;
  },
  createAllFromConst() {
    for (let index = 0; index < modalElementConst.length; index++) {
      modalElementArray[index] = this.newElement(index);
      document.getElementById("modal_CrimeInfo_Inner").appendChild(modalElementArray[index]);
    }
  },
};

modalElementBuilder.createAllFromConst();

let modalTextBuilder = {
  setTitle(index) {
    localCrimeConst = crimesConst[index];
    localCrimeArray = crimeArray[index];
    let titleElement = document.getElementById("modal_CrimeInfo_Title");
    let newTitle = `<modalh1>${localCrimeConst.crime}</modalh1><br>`;
    newTitle += localCrimeConst.description;
    console.log(newTitle);
    titleElement.innerHTML = newTitle;
  },

  setDescription(index) {
    localCrimeConst = crimesConst[index];
    localCrimeArray = crimeArray[index];
    document.getElementById("descriptionID").innerHTML = localCrimeConst.description || "";
  },
  setTimesDone(index) {
    localCrimeConst = crimesConst[index];
    localCrimeArray = crimeArray[index];
    document.getElementById("timesDoneID").innerHTML = localCrimeArray.data.timesDone || "";
  },
  setProgress(index) {
    localCrimeConst = crimesConst[index];
    localCrimeArray = crimeArray[index];
    document.getElementById("progressID").innerHTML = localCrimeArray.progressAsPercent() || "";
  },
  setTimeToCompleteBase(index) {
    localCrimeConst = crimesConst[index];
    localCrimeArray = crimeArray[index];
    let baseTimeToCompleteFormmatted = formatTime(localCrimeConst.baseTimeToCompleteMS);
    document.getElementById("baseTimeToCompleteMSID").innerHTML = baseTimeToCompleteFormmatted;
  },
  setTimeToCompleteMod(index) {
    localCrimeConst = crimesConst[index];
    localCrimeArray = crimeArray[index];
    let newTime = "";
    switch (localCrimeArray.data.state) {
      case 1:
        newTime = msLeftf(index, true);
        break;
      case 2:
        newTime = "∞";
        break;
    }
    formatTime(msLeftf(index));
    document.getElementById("newTimeID").innerHTML = newTime || "";
  },
  setTimeLeft(index) {
    localCrimeConst = crimesConst[index];
    localCrimeArray = crimeArray[index];

    document.getElementById("timeLeftID").innerHTML = formatTime(msLeftf(index)) || "";
  },
  setCost(index) {
    localCrimeConst = crimesConst[index];
    localCrimeArray = crimeArray[index];
    let newCost = "cost: ";
    newCost += localCrimeConst.cost == 0 || localCrimeConst.cost == undefined ? "it's free baby" : "$" + localCrimeConst.cost;
    document.getElementById("costID").innerHTML = newCost || "";
  },
  setLoot(index) {
    localCrimeConst = crimesConst[index];
    localCrimeArray = crimeArray[index];
    let newGain = [];
    newGain[0] = "you will gain: ";
    newGain[1] = localCrimeConst.money > 0 ? "$" + localCrimeConst.money : "nothing";
    // test to see if loot exists and if so list it
    if (localCrimeConst.loot) {
      // cycle through loots
      for (let index = 0; index < localCrimeConst.loot.length; index++) {
        let newText = "";
        // tests to see if loot number is a range
        if (localCrimeConst.loot[index][1][1]) {
          newText += localCrimeConst.loot[index][1][0] + " to " + localCrimeConst.loot[index][1][1] + " ";
        } else if (localCrimeConst.loot[index][1][0]) {
          // else use the one number
          newText += localCrimeConst.loot[index][1][0];
        } else {
          // or just 1
          newText += "1 ";
        }
        // newText += localCrimeConst.loot[index][1] ? localCrimeConst.loot[index][1] + " " : "1 ";
        newText += localCrimeConst.loot[index][0];
        newGain.push(newText);
      }
    }
    let newGainString = "";
    for (let index = 0; index < newGain.length; index++) {
      newGainString += newGain[index] + "<br>";
    }
    document.getElementById("lootID").innerHTML = newGainString || "";
  },
  setDateTimeWillEnd(index) {
    localCrimeConst = crimesConst[index];
    localCrimeArray = crimeArray[index];
    // document.getElementById("resourcesNeededID").innerHTML = localCrimeConst.description || "";

    let newEndTime = endTime(index);
    document.getElementById("endTimeID").innerHTML = newEndTime;
    // document.getElementById("stateID").innerHTML = localCrimeConst.description || "";
  },
  initAll(index) {
    this.setTitle(index);
    // this.setDescription(index);
    this.setTimesDone(index);
    this.setProgress(index);
    this.setTimeToCompleteBase(index);
    this.setTimeToCompleteMod(index);
    this.setTimeLeft(index);
    this.setCost(index);
    this.setLoot(index);
    this.setDateTimeWillEnd(index);
  },
  update(index) {
    this.setTimesDone(index);
    this.setProgress(index);
    this.setTimeToCompleteMod(index);
    this.setTimeLeft(index);
    this.setDateTimeWillEnd(index);
  },
};

function updateModalText(index) {
  localCrimeConst = crimesConst[index];
  localCrimeArray = crimeArray[index];
  document.getElementById("timesDoneID").innerHTML = localCrimeArray.data.timesDone || "";
  document.getElementById("progressID").innerHTML = localCrimeArray.progressAsPercent() || "";
  let newEndTime = endTime(index);
  document.getElementById("endTimeID").innerHTML = newEndTime;
  document.getElementById("timeLeftID").innerHTML = formatTime(msLeftf(index)) || "";
}
