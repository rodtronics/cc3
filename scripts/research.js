function researchCreateElement(index) {
  let researchIndexID = "researchIndexID_" + index;

  let newResearchElement = document.createElement("div");
  newResearchElement.classList.add("gizmoBase", "researchGizmo");
  newResearchElement.setAttribute("data-gizmoID", researchIndexID);
  researchArray[index].baseElement = newResearchElement;

  let newResearchElementTitle = document.createElement("div");
  newResearchElementTitle.innerHTML = researchArray[index].name;
  newResearchElementTitle.classList.add("gizmoTitle");
  newResearchElement.appendChild(newResearchElementTitle);

  let newResearchElementStatus = document.createElement("div");
  newResearchElementStatus.innerHTML = "<br><br>0%";
  newResearchElementStatus.classList.add("researchStatusClass");
  newResearchElement.appendChild(newResearchElementStatus);

  return newResearchElement;
}

for (let index = 0; index < researchArray.length; index++) {
  researchArray[index].element = researchCreateElement(index);
}

function updateResearchProgress(index) {
  let progressElement = researchArray[index].progressElement;
}

function updateCrimeProgressProgressBar2(index) {
  let divElement = crimeArray[index].progressElement;
  // construct the moving progress bar
  let currentProgress = crimeArray[index].progress * 100;

  //  background: linear-gradient(0deg, #845ec2 0%, #d65db1 20%, #ff6f91 40%, #ff9671 60%, #ffc75f 80%, #f9f871 100%);
  let newBackground = "";
  let newDeg = 70;
  newBackground = "linear-gradient(" + newDeg + "deg, white 0%, white ";
  newBackground += currentProgress + "%, var(--palette-4) " + currentProgress + "%, var(--palette-4) 100%";

  divElement.style.background = newBackground;
}
