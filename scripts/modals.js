let modalContainerElement = document.getElementById("modal_CrimeInfo_Container");
let modalContentElement = document.getElementById("modal_CrimeInfo_Inner");
let crimeModalUpdateIntervalID;

function showModal(infoType, index) {
  let newHTML = "";
  switch (infoType) {
    case "crime":
      newHTML = createCrimeModalTextNew(index);
      crimeModalUpdateIntervalID = setInterval(() => updateModalText(index), 100);
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
  // modalContentElement.innerHTML = newHTML;
  modalContainerElement.style.display = "block";
}

modalContainerElement.addEventListener("click", () => closeModal());

function closeModal() {
  modalContainerElement.style.display = "none";
  clearInterval(crimeModalUpdateIntervalID);
}

function createFacilityModalText(index) {
  let newHTML = "";
  newHTML += "<h1>" + facilityConst[index].name + "</h1><br>";
  newHTML += facilityConst[index].description;

  return newHTML;
}

let modalInfoTitle = document.getElementById("modal_CrimeInfo_Title");

function createCrimeModalText(index) {
  let formattedTime = formatTime(crimesConst[index].baseTimeToCompleteMS);

  // let timeToCompleteText = crimesConst[index].baseTimeToCompleteMS;
  let numCrims = crimeArray[index].data.numOfCriminals;

  let newHTML = "";
  modalInfoTitle.innerHTML = crimesConst[index].crime;
  let title = crimesConst[index].description;

  let baseTime = "base duration: " + formattedTime;
  let crimsOnJob = "";
  if (crimeArray[index].data.state != 0) {
    crimsOnJob = "criminals: " + numCrims + "<br>";
  }

  let timesCommitted = "";
  if (crimeArray[index].data.timesDone == 0 || crimeArray[index].data.timesDone == undefined) {
    timesCommitted = "you have not committed this crime yet.. wtf";
  } else {
    let timesDone = "";
    switch (crimeArray[index].data.timesDone) {
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
        timesDone = Math.floor(crimeArray[index].data.timesDone) + " times";
        break;
    }

    timesCommitted = "committed " + timesDone;
  }
  timesCommitted += "<br><br>";
  let currentProgress = "";

  if (crimeArray[index].data.state != 0) {
    currentProgress = "current progress: " + crimeArray[index].progressAsPercent() + "%<br>";
  }
  let newCompletionTime = "";
  switch (crimeArray[index].data.state) {
    case 0: // no crims
      newCompletionTime = "<br><br>committing crime paused";
      break;
    case 1: // running
      if (numCrims == 1) {
        newCompletionTime = "<br>no modifiers";
      } else {
        newCompletionTime =
          "<br>modifiers: multiple criminals" +
          "<br>current duration: " +
          formatTime(crimesConst[index].baseTimeToCompleteMS / crimeArray[index].data.numOfCriminals);
        // newCompletionTime =
        //   "<br>with " + numCrims + " on the job, the new completion time: " + formatTime(crimesConst[index].baseTimeToCompleteMS / crimeArray[index].data.numOfCriminals);
      }
      break;
    case 2: // never ran
      break;
    case 3: //cps mode
      newCompletionTime = "<br>modifiers: fuckloads of criminals<br>crimes committed per second: " + crimeArray[index].cpsRate.toPrecision(globalPrecision);
      currentProgress = "";
      break;
  }

  let moneyPerCrime = "";
  if (crimesConst[index].mpc > 0) {
    moneyPerCrime = "money per crime: " + crimesConst[index].mpc;
  }
  let msLeft = (crimesConst[index].baseTimeToCompleteMS - crimeArray[index].data.progress) / crimeArray[index].data.numOfCriminals;

  let timeLeft = "";
  if (crimeArray[index].data.state == 1) {
    timeLeft = "time left: " + formatTime(msLeft) + "<br>";
  }

  let finishTime = "";
  // let durationNowToFinish = dayjs(crimeArray[index].timeCrimeWillEnd).diff(dayjs());

  if (msLeft > 86400000 && crimeArray[index].data.state == 1) {
    // if more than a day, give the actual date/time the crime will end

    // this gets the ordinal eg "the first"

    let msLeft = (crimesConst[index].baseTimeToCompleteMS - crimeArray[index].data.progress) / crimeArray[index].data.numOfCriminals;

    let timeCrimeWillEnd = dayjs().add(dayjs(msLeft, "millsecond"));

    let day = dayjs(timeCrimeWillEnd, "millsecond").format("D");
    let ordinal = getOrdinal(day);

    finishTime = dayjs(timeCrimeWillEnd, "millisecond").format("h:mma on dddd [the] D") + ordinal + dayjs(timeCrimeWillEnd, "millisecond").format(" MMM YYYY");

    //   let newCompletionTime = dayjs().add(dayjs(msLeft, "millisecond"));

    finishTime = "crime will complete at:<br>" + finishTime;
  }

  newHTML = title + "<br><br>" + timesCommitted + crimsOnJob + "<br>" + baseTime + newCompletionTime + "<br><br>";
  newHTML += currentProgress + timeLeft;
  newHTML += "<br><br>" + finishTime;

  return newHTML;
}

function msLeftf(index, format) {
  let msLeft = (crimesConst[index].baseTimeToCompleteMS - crimeArray[index].data.progress) / crimeArray[index].data.numOfCriminals;
  if (format == true) {
    return formatTime(msLeft);
  }
  return msLeft;
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
  { id: "moneyGainedID", gridArea: "" },
  { id: "resourcesNeededID", gridArea: "" },
  { id: "resourcesGainedID", gridArea: "" },
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

function createCrimeModalTextNew(index) {
  localCrimeConst = crimesConst[index];
  localCrimeArray = crimeArray[index];
  document.getElementById("descriptionID").innerHTML = localCrimeConst.description || "";
  document.getElementById("timesDoneID").innerHTML = localCrimeArray.data.timesDone || "";
  document.getElementById("progressID").innerHTML = localCrimeArray.progressAsPercent() || "";

  let baseTimeToCompleteFormmatted = formatTime(localCrimeConst.baseTimeToCompleteMS);
  document.getElementById("baseTimeToCompleteMSID").innerHTML = baseTimeToCompleteFormmatted;
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
  document.getElementById("timeLeftID").innerHTML = formatTime(msLeftf(index)) || "";

  let newCost = "cost: ";
  newCost += localCrimeConst.cost == 0 || localCrimeConst.cost == undefined ? "it's free baby" : "$" + localCrimeConst.cost;
  document.getElementById("costID").innerHTML = newCost || "";
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
      console.log(localCrimeConst.loot.length);
      newText += localCrimeConst.loot[index][0];
      newGain.push(newText);
    }
  }
  let newGainString = "";
  for (let index = 0; index < newGain.length; index++) {
    newGainString += newGain[index] + "<br>";
  }
  document.getElementById("moneyGainedID").innerHTML = newGainString || "";
  // document.getElementById("resourcesNeededID").innerHTML = localCrimeConst.description || "";

  let newEndTime = endTime(index);
  document.getElementById("endTimeID").innerHTML = newEndTime;
  // document.getElementById("stateID").innerHTML = localCrimeConst.description || "";
}

function updateModalText(index) {
  localCrimeConst = crimesConst[index];
  localCrimeArray = crimeArray[index];
  document.getElementById("timesDoneID").innerHTML = localCrimeArray.data.timesDone || "";
  document.getElementById("progressID").innerHTML = localCrimeArray.progressAsPercent() || "";
  let newEndTime = endTime(index);
  document.getElementById("endTimeID").innerHTML = newEndTime;
  document.getElementById("timeLeftID").innerHTML = formatTime(msLeftf(index)) || "";
}
