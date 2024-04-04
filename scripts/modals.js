let modalContainerElement = document.getElementById("infoModalContainerID");
let modalContentElement = document.getElementById("infoModalContentID");
let crimeModalUpdateIntervalID;
function showModal(infoType, index) {
  let newHTML = "";
  switch (infoType) {
    case "crime":
      newHTML = createCrimeModalText(index);
      crimeModalUpdateIntervalID = setInterval(updateCrimeModal, 1000);
      console.log(crimeModalUpdateIntervalID);
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
  modalContentElement.innerHTML = newHTML;
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

function createCrimeModalText(index) {
  let formattedTime = formatTime(crimesConst[index].ttc);

  // let timeToCompleteText = crimesConst[index].ttc;
  let numCrims = crimeArray[index].numOfCriminals;

  let newHTML = "<h1>" + crimesConst[index].crime + "</h1><br>" + crimesConst[index].description;
  newHTML += "<br><br>base time to complete: " + formattedTime + "<br><br>criminals on the job: " + numCrims + "<br>";
  if (crimeArray[index].state != 2) {
    console.log(crimeArray[index].state);
    newHTML += "Current Progress: " + Math.floor(crimeArray[index].progress * 100) + "%<br>";
  }
  let newCompletionTime = "";
  switch (crimeArray[index].state) {
    case 0: // no crims
      break;
    case 1: // running
      if (numCrims > 1) {
        newCompletionTime = "new completion time: " + formatTime(crimesConst[index].ttc / crimeArray[index].numOfCriminals);
      }
      break;
    case 2: // never ran
      break;
    case 3: //cps mode
      newCompletionTime = "committed per second: " + crimeArray[index].cpsRate.toFixed(3).replace(/\.?0*$/, "");

      break;
  }
  newHTML += newCompletionTime;

  if (crimesConst[index].mpc > 0) {
    newHTML += "<br>money per crime: " + crimesConst[index].mpc;
  }
  let finishTime = "";
  if (crimeArray[index].timeCrimeWillEnd > 0) {
    let durationNowToFinish = dayjs(crimeArray[index].timeCrimeWillEnd).diff(dayjs());
    if (durationNowToFinish < 432000000) {
      // if less than 5 days
      finishTime = dayjs(crimeArray[index].timeCrimeWillEnd, "millisecond").format("h:mma on dddd");
    } else {
      let day = dayjs(crimeArray[index].timeCrimeWillEnd, "millsecond").format("D");
      let ordinal = getOrdinal(day);

      finishTime =
        dayjs(crimeArray[index].timeCrimeWillEnd, "millisecond").format("h:mma D") +
        ordinal +
        dayjs(crimeArray[index].timeCrimeWillEnd, "millisecond").format(" MMM YYYY");
    }
    let day = dayjs(crimeArray[index].timeCrimeWillEnd, "millsecond").format("D");
    let ordinal = getOrdinal(day);
    finishTime =
      dayjs(crimeArray[index].timeCrimeWillEnd, "millisecond").format("h:mma on dddd [the] D") +
      ordinal +
      dayjs(crimeArray[index].timeCrimeWillEnd, "millisecond").format(" MMM YYYY");

    newHTML += "<br><br>crime will complete at:<br>" + finishTime;
  }
  return newHTML;
}

function updateCrimeModal(index) {
  let newHTML = createCrimeModalText(index);
  modalContentElement.innerHTML = newHTML;
  console.log(newHTML);

}

function createResearchModalText(index) {
  let newHTML = "";
  newHTML += "<h1>" + researchConst[index].name + "</h1><br>";
  newHTML += researchConst[index].description;
  return newHTML;
}
