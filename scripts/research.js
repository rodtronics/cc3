function researchCreateElement(index) {
  let researchIndexID = "researchIndexID_" + index;

  let newResearchElement = document.createElement("div");
  newResearchElement.classList.add("gizmoBase", "researchGizmo");
  newResearchElement.setAttribute("data-gizmoID", researchIndexID);

  let newResearchElementTitle = document.createElement("div");
  newResearchElementTitle.innerHTML = researchArray[index].name;
  newResearchElementTitle.classList.add("gizmoTitle");
  newResearchElement.appendChild(newResearchElementTitle);

  let newResearchElementButton = document.createElement("div");
  newResearchElementButton.innerHTML = "BEGIu";
  newResearchElement.appendChild(newResearchElementButton);

  return newResearchElement;
}

for (let index = 0; index < researchArray.length; index++) {
  researchArray[index].element = researchCreateElement(index);
}
