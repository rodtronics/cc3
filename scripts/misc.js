// these are functions that don't belong anywhere else
function msLeftf(index, format) {
  // gets ms left to complete crime. if format = true then returns formatted text
  let msLeft = (crimesConst[index].baseTimeToCompleteMS - crimeArray[index].data.progress) / crimeArray[index].data.numOfCriminals;
  if (format == true) {
    return formatTime(msLeft);
  }
  return msLeft;
}
function formatTime(timeInMS) {
  if (timeInMS == false) {
    return "";
  }
  let formattedTime = "";
  let timeUntilComplete = 0;
  timeUntilComplete = dayjs.duration(dayjs(timeInMS), "millisecond");
  timeUntilComplete.years = timeUntilComplete.format("YY");

  timeUntilComplete.months = timeUntilComplete.format("M");
  timeUntilComplete.days = timeUntilComplete.format("D");
  timeUntilComplete.hours = timeUntilComplete.format("H");
  timeUntilComplete.minutes = timeUntilComplete.format("mm");
  timeUntilComplete.seconds = timeUntilComplete.format("ss");
  timeUntilComplete.milliseconds = timeUntilComplete.format("SSS");

  if (timeUntilComplete.years > 0) {
    formattedTime += timeUntilComplete.years + "y " + timeUntilComplete.months + "mo ";
  }

  if (timeUntilComplete.months > 0) {
    formattedTime += timeUntilComplete.months + "mo ";
  }

  if (timeUntilComplete.days > 0) {
    formattedTime += timeUntilComplete.days + "d " + timeUntilComplete.hours + "h " + timeUntilComplete.minutes + "m ";
  } else if (timeUntilComplete.hours > 0) {
    formattedTime += timeUntilComplete.hours + "h " + timeUntilComplete.minutes + "m ";
  } else if (timeUntilComplete.minutes > 0) {
    formattedTime += timeUntilComplete.minutes + "m ";
  }
  formattedTime += timeUntilComplete.seconds + "s";
  if (timeInMS < 10000) {
    formattedTime += " " + timeUntilComplete.milliseconds + "ms";
  }
  return formattedTime;
}
/*















*/

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

// and these are functions which can probably be deleted

// commented out to see if they matter
// function updateMainCrimeNumbers() {
//   let cps = totalCrimesCommitted - lastTotalCrimesCommitted;

//   cpsAverage[0] = cps;
//   rollingAveTotal = 0;
//   cpsAverage.forEach((index) => {
//     rollingAveTotal += index;
//   });
//   rollingAve = (rollingAveTotal / cpsAverage.length) * 20;
//   shiftcpsAverage();
//   let newHTML =
//     "crime committer " + ccVersion + "<br>" + ccCodeName + "<br><br>you got $" + money + "<br>" + "total crimes committed:" + totalCrimesCommitted.toFixed(0);
//   // "<br>cps: " +
//   // rollingAve.toPrecision(globalPrecision);
//   document.getElementById("titleAndVersionID").innerHTML = newHTML;
//   lastTotalCrimesCommitted = totalCrimesCommitted;
// }

// function shiftcpsAverage() {
//   for (let index = cpsAverageNumber; index > 0; index--) {
//     cpsAverage[index] = cpsAverage[index - 1];
//     // console.log(cpsAverage[index]);
//   }
// }

// function researchCreateElement(index) {
//   let researchIndexID = "researchIndexID_" + index;

//   // base of the gizmo
//   let newResearchElement = document.createElement("div");
//   newResearchElement.classList.add("gizmoBase", "researchGizmo");
//   newResearchElement.setAttribute("data-gizmoID", researchIndexID);
//   // researchArray[index].baseElement = newResearchElement;
//   researchElementArray[index].baseElement = newResearchElement;

//   // title of gizmo
//   let newResearchElementTitle = document.createElement("div");
//   newResearchElementTitle.innerHTML = researchArray[index].name;
//   newResearchElementTitle.classList.add("gizmoTitle", "researchTitleClass");
//   newResearchElement.appendChild(newResearchElementTitle);

//   // progress container
//   let newResearchElementStatusContainer = document.createElement("div");
//   newResearchElementStatusContainer.classList.add("researchProgressClass");
//   newResearchElement.appendChild(newResearchElementStatusContainer);
//   // researchArray[index].progressContainerElement = newResearchElementStatusContainer;
//   researchElementArray[index].progressContainerElement = newResearchElementStatusContainer;

//   // progress text
//   let newResearchProgressString = document.createElement("div");
//   newResearchProgressString.innerHTML = "0%";
//   newResearchProgressString.classList.add("researchProgressTextClass");
//   newResearchElement.appendChild(newResearchProgressString);
//   // researchArray[index].progressTextElement = newResearchProgressString;
//   researchElementArray[index].progressTextElement = newResearchProgressString;

//   // progress button
//   let newResearchButtonElement = document.createElement("div");
//   newResearchButtonElement.innerHTML = "go";
//   newResearchButtonElement.classList.add("researchButtonClass");
//   newResearchElement.appendChild(newResearchButtonElement);
//   // researchArray[index].buttonElement = newResearchButtonElement;
//   researchElementArray[index].buttonElement = newResearchButtonElement;
// }

// // for (let index = 0; index < researchArray.length; index++) {
// //   researchCreateElement(index);
// // }

// class researchObjectClass {
//   constructor(index) {
//     this.name = researchConst[index].name;
//     this.researchIndex = index;
//     this.researchIndexID = "researchIndexID_" + index;
//     this.visible = true;
//     this.done = false;
//     this.level = 1;
//     // state 0 is unstarted, 1 is running, 2 is paused
//     this.state = 0;
//     this.timeStarted = 0;
//     this.timeWillEnd = 0;
//     this.baseElement = null;
//     this.statusElement = null;
//   }
// }

// function cpsMode(index) {
//   let refreshRateInverse = 1000 / refreshRate;
//   let currentCrime = crimeArray[index];
//   let cpsRate = 1000 / (crimesConst[index].baseTimeToCompleteMS / currentCrime.numOfCriminals);
//   currentCrime.cpsRate = cpsRate;
//   currentCrime.timesDone = currentCrime.timesDone + cpsRate / refreshRateInverse;
//   totalCrimesCommitted = totalCrimesCommitted + cpsRate / refreshRateInverse;
//   updateTimesDoneText(index);
// }
// //mainloop
// function gameLoop() {
//   updateCriminalNumbers();
//   updateCrimeProgressDiv();
//   updateCrimeProgressValue();
// }

// let lastTotalCrimesCommitted = 0;
// // let cpsAverage = Array(cpsAverageNumber).fill(0);

// let rollingAve = 0;
// let rollingAveTotal = 0;

// function createCrimeModalTextNew(index) {
//   localCrimeConst = crimesConst[index];
//   localCrimeArray = crimeArray[index];
//   document.getElementById("descriptionID").innerHTML = localCrimeConst.description || "";
//   document.getElementById("timesDoneID").innerHTML = localCrimeArray.data.timesDone || "";
//   document.getElementById("progressID").innerHTML = localCrimeArray.progressAsPercent() || "";

//   let baseTimeToCompleteFormmatted = formatTime(localCrimeConst.baseTimeToCompleteMS);
//   document.getElementById("baseTimeToCompleteMSID").innerHTML = baseTimeToCompleteFormmatted;
//   let newTime = "";
//   switch (localCrimeArray.data.state) {
//     case 1:
//       newTime = msLeftf(index, true);
//       break;
//     case 2:
//       newTime = "∞";
//       break;
//   }
//   formatTime(msLeftf(index));
//   document.getElementById("newTimeID").innerHTML = newTime || "";
//   document.getElementById("timeLeftID").innerHTML = formatTime(msLeftf(index)) || "";

//   let newCost = "cost: ";
//   newCost += localCrimeConst.cost == 0 || localCrimeConst.cost == undefined ? "it's free baby" : "$" + localCrimeConst.cost;
//   document.getElementById("costID").innerHTML = newCost || "";
//   let newGain = [];
//   newGain[0] = "you will gain: ";
//   newGain[1] = localCrimeConst.money > 0 ? "$" + localCrimeConst.money : "nothing";
//   // test to see if loot exists and if so list it
//   if (localCrimeConst.loot) {
//     // cycle through loots
//     for (let index = 0; index < localCrimeConst.loot.length; index++) {
//       let newText = "";
//       // tests to see if loot number is a range
//       if (localCrimeConst.loot[index][1][1]) {
//         newText += localCrimeConst.loot[index][1][0] + " to " + localCrimeConst.loot[index][1][1] + " ";
//       } else if (localCrimeConst.loot[index][1][0]) {
//         // else use the one number
//         newText += localCrimeConst.loot[index][1][0];
//       } else {
//         // or just 1
//         newText += "1 ";
//       }
//       // newText += localCrimeConst.loot[index][1] ? localCrimeConst.loot[index][1] + " " : "1 ";
//       console.log(localCrimeConst.loot.length);
//       newText += localCrimeConst.loot[index][0];
//       newGain.push(newText);
//     }
//   }
//   let newGainString = "";
//   for (let index = 0; index < newGain.length; index++) {
//     newGainString += newGain[index] + "<br>";
//   }
//   document.getElementById("moneyGainedID").innerHTML = newGainString || "";
//   // document.getElementById("resourcesNeededID").innerHTML = localCrimeConst.description || "";

//   let newEndTime = endTime(index);
//   document.getElementById("endTimeID").innerHTML = newEndTime;
//   // document.getElementById("stateID").innerHTML = localCrimeConst.description || "";
// }
