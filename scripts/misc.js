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

// ok so a bit of a new idea. try and think of a way to make unique boxes with unique functions
// reuse classes as much as possible
// don't be afraid to use event handlers, rather than trying to use only one and derive data
// ok so a generic element builder. already made a couple but try and make this much more generic
// it can make a base, and title, buttons, progress, info

let genericElementBuilder = {
  createBaseElement(gridRows, gridColumns) {
    const newBaseElement = document.createElement("div");
    newBaseElement.classList.add("genericBase");
    return newBaseElement;
  },
};
