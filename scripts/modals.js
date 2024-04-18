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
  if (crimeArray[index].data.state != 1) {
    return null;
  }
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
  { id: "timesDoneID", gridArea: "1 / 2 / 2 / 3", gridAreaTitle: "1 / 1 / 2 / 2" },
  { id: "progressID", gridArea: "2 / 2 / 3 / 3", gridAreaTitle: "2 / 1 / 3 / 2" },
  { id: "baseTimeToCompleteMSID", gridArea: "3 / 2 / 4 / 3", gridAreaTitle: "3 / 1 / 4 / 2" },
  { id: "newTimeID", gridArea: "4 / 2 / 5 / 3", gridAreaTitle: "4 / 1 / 5 / 2" },
  { id: "timeLeftID", gridArea: "5 / 2 / 6 / 3", gridAreaTitle: "5 / 1 /6 / 2" },
  { id: "costID", gridArea: "6 / 2 / 7 / 3", gridAreaTitle: "6 / 1 / 7 / 2" },
  { id: "lootID", gridArea: "7 / 2 / 8 / 3", gridAreaTitle: "7 / 1 / 8 / 2" },
  { id: "endTimeID", gridArea: "9 / 2 / 10 / 3", gridAreaTitle: "9 / 1 / 10 / 2" },
];

let modalElementArray = [];
let modalElementArrayTitles = [];

let modalElementBuilder = {
  createSimpleDiv() {
    let newDiv = document.createElement("div");
    return newDiv;
  },
  setModalID(element, ID, title) {
    element.id = ID;
    element.classList.add("modalSection");
    if (title == true) {
      element.classList.add("modalSectionTitle");
    }
  },

  newElement(index, title) {
    let newElement = this.createSimpleDiv();
    let titleText = title == true ? "_title" : "";
    this.setModalID(newElement, modalElementConst[index].id + titleText, title);
    let gridArea = title == true ? modalElementConst[index].gridAreaTitle : modalElementConst[index].gridArea;
    newElement.style.setProperty("grid-area", gridArea);
    return newElement;
  },
  createAllFromConst() {
    for (let index = 0; index < modalElementConst.length; index++) {
      modalElementArray[index] = this.newElement(index);
      modalElementArrayTitles[index] = this.newElement(index, true);
      document.getElementById("modal_CrimeInfo_Inner").appendChild(modalElementArray[index]);
      document.getElementById("modal_CrimeInfo_Inner").appendChild(modalElementArrayTitles[index]);
    }
  },
  setAllTitles() {
    document.getElementById("timesDoneID_title").innerText = "you've done this";
    document.getElementById("progressID_title").innerText = "current progress";
    document.getElementById("baseTimeToCompleteMSID_title").innerText = "base time to complete";
    document.getElementById("newTimeID_title").innerText = "after modifers";
    document.getElementById("timeLeftID_title").innerText = "time left to complete";
    document.getElementById("costID_title").innerText = "will cost you";
    document.getElementById("lootID_title").innerText = "you will gain";
    document.getElementById("endTimeID_title").innerText = "will finish at";
  },
};

modalElementBuilder.createAllFromConst();
modalElementBuilder.setAllTitles();

let modalTextBuilder = {
  setTitle(index) {
    localCrimeConst = crimesConst[index];
    localCrimeArray = crimeArray[index];
    let titleElement = document.getElementById("modal_CrimeInfo_Title");
    let newTitle = `<modalh1>${localCrimeConst.crime}</modalh1><br>`;
    newTitle += localCrimeConst.description;
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
    let timesDone = localCrimeArray.data.timesDone || "";
    // timesDone = timesDone ? timesDone : "none times";
    switch (localCrimeArray.data.timesDone) {
      case 0:
        timesDone = "none times";
        break;
      case 1:
        timesDone = "once";
        break;
      case 2:
        timesDone = "twice";
        break;
      case 3:
        timesDone = "thrice";
        break;
      default:
        timesDone = localCrimeArray.data.timesDone + " times";
        break;
    }
    document.getElementById("timesDoneID").innerHTML = timesDone;
  },
  setProgress(index) {
    localCrimeConst = crimesConst[index];
    localCrimeArray = crimeArray[index];
    let progressText = localCrimeArray.progressAsPercent() == 0 ? "none" : localCrimeArray.progressAsPercent() + "%";
    document.getElementById("progressID").innerHTML = progressText;
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
    let newTime = localCrimeArray.data.numOfCriminals <= 1 ? "no mods" : formatTime(localCrimeConst.baseTimeToCompleteMS / localCrimeArray.data.numOfCriminals);
    document.getElementById("newTimeID").innerHTML = newTime;
  },
  setTimeLeft(index) {
    localCrimeConst = crimesConst[index];
    localCrimeArray = crimeArray[index];
    let newTime = "";
    switch (localCrimeArray.data.state) {
      case 0:
        newTime = "haven't even started";
        break;
      case 1:
        newTime = msLeftf(index, true);
        break;
      case 2:
        newTime = "halted";
        break;
    }

    document.getElementById("timeLeftID").innerHTML = newTime;
  },
  setCost(index) {
    localCrimeConst = crimesConst[index];
    localCrimeArray = crimeArray[index];
    let newCost = "";
    newCost += localCrimeConst.cost == 0 || localCrimeConst.cost == undefined ? "it's free baby" : "$" + localCrimeConst.cost;
    document.getElementById("costID").innerHTML = newCost || "";
  },
  setLoot(index) {
    localCrimeConst = crimesConst[index];
    localCrimeArray = crimeArray[index];
    if (localCrimeConst.money == undefined && localCrimeConst.loot == undefined) {
      document.getElementById("lootID").innerHTML = "nothing";
      return;
    }
    let newGain = [];
    if (localCrimeConst.money > 0) {
      newGain[0] = "$" + localCrimeConst.money;
    }
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
    newEndTime = newEndTime ? newEndTime : "it won't if you're not doing it";
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
