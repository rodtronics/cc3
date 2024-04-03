function facilityCreateElement(index) {
  let facilityIndexID = "facilityIndexID_" + index;

  let newFacilityElement = document.createElement("div");
  newFacilityElement.classList.add("gizmoBase", "facilityGizmo");
  newFacilityElement.setAttribute("data-facilityGizmoID", facilityIndexID);

  let newFacilityElementTitle = document.createElement("div");
  newFacilityElementTitle.innerHTML = facilityArray[index].name;
  newFacilityElementTitle.classList;
  newFacilityElement.appendChild(newFacilityElementTitle);

  return newFacilityElement;
}

for (let index = 0; index < facilityArray.length; index++) {
  facilityArray[index].element = facilityCreateElement(index);
}
