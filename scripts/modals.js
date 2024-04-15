let modalContainerElement = document.getElementById("modal_CrimeInfo_Container");
let modalContentElement = document.getElementById("modal_CrimeInfo_Inner");
let crimeModalUpdateIntervalID;

function showModal(infoType, index) {
  let newHTML = "";
  switch (infoType) {
    case "crime":
      newHTML = createCrimeModalText(index);
      crimeModalUpdateIntervalID = setInterval(() => updateCrimeModal(index), 100);
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
  let formattedTime = formatTime(crimesConst[index].baseTimeToCompleteMS);
  let carriageReturn = "<br>";

  // let timeToCompleteText = crimesConst[index].baseTimeToCompleteMS;
  let numCrims = crimeArray[index].data.numOfCriminals;

  let newHTML = "";

  let title = "<h1>" + crimesConst[index].crime + "</h1>" + crimesConst[index].description;

  let baseTime = "base duration: " + formattedTime;
  let crimsOnJob = "";
  if (crimeArray[index].data.state != 0) {
    crimsOnJob = "criminals: " + numCrims + "<br>";
  }

  let timesCommitted = "";
  if (crimeArray[index].timesDone == 0 || crimeArray[index].timesDone == undefined) {
    timesCommitted = "you have not committed this crime yet.. wtf";
  } else {
    let timesDone = "";
    switch (crimeArray[index].timesDone) {
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
        timesDone = Math.floor(crimeArray[index].timesDone) + " times";
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
  let durationNowToFinish = dayjs(crimeArray[index].timeCrimeWillEnd).diff(dayjs());

  if (msLeft > 86400000) {
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

function updateCrimeModal(index) {
  let newHTML = createCrimeModalText(index);
  modalContentElement.innerHTML = newHTML;
}

function createResearchModalText(index) {
  let newHTML = "";
  newHTML += "<h1>" + researchConst[index].name + "</h1><br>";
  newHTML += researchConst[index].description;
  return newHTML;
}
