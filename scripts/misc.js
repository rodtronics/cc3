// these are functions that don't belong anywhere else

function defineGrid(thickness, spacing) {
  let newRLG_string_0 = "";
  let newRLG_string_90 = "";
  let newRLG_string_end = "";
  newRLG_string_0 = "repeating-linear-gradient(0deg, ";
  newRLG_string_90 = "repeating-linear-gradient(90deg, ";

  let RLG_units = "em";
  let RLG_colorA = "rgba(71, 46, 109,1)";
  let RLG_colorB = "rgba(0,0,0,0)";

  newRLG_string_end = RLG_colorA + " 0" + RLG_units + ", " + RLG_colorA + " " + thickness + RLG_units + ", ";
  newRLG_string_end += RLG_colorB + " " + thickness + RLG_units + ", " + RLG_colorB + " " + spacing + RLG_units + ")";

  let newString = newRLG_string_0 + newRLG_string_end + "," + newRLG_string_90 + newRLG_string_end;

  return newString;
}

document.getElementById("gizmoContainer_ID").style.background = defineGrid(0.2, 4);

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
