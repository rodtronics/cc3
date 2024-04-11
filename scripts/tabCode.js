// moved all the tab code into this file

//creates an array with the tab elements
function setTabElements() {
  for (let index = 0; index < 5; index++) {
    let constructedID = "tab" + letterArray[index] + "_ID";
    tabElement[index] = document.getElementById(constructedID);
  }
}

// this is for secondary tabs in crime
let secondaryCrimeTabContainer = createCrimeSectionTabs();

// callback function to deal with what to do when a tab is clicked
function tabClicked(elementClicked) {
  let tabClickedID = elementClicked.target.id;
  switch (tabClickedID) {
    case "tabA_ID":
      setActiveTab(0);
      break;
    case "tabB_ID":
      setActiveTab(1);
      break;
    case "tabC_ID":
      setActiveTab(2);
      break;
    case "tabD_ID":
      setActiveTab(3);
      break;
    case "tabE_ID":
      setActiveTab(4);
      break;
  }
}

// sets one tab as active and the rest as inactive
// also then switches and appends elements depending on tab
function setActiveTab(tabNumber) {
  // clear all tabs to inactive
  for (let index = 0; index < tabElement.length; index++) {
    tabElement[index].setAttribute("data-tabState", "inactive");
  }
  // now set which one active
  tabElement[tabNumber].setAttribute("data-tabState", "active");
  // now switch background colour to reflect active tab
  document.getElementById("gizmoContainer_ID").setAttribute("data-backgroundColor", tabNumber);
  clearGizmoElements();
  redrawElements(tabNumber);
}

function redrawElements(tabNumber) {
  switch (tabNumber) {
    case 0:
      gizmoContainerElement.appendChild(secondaryCrimeTabContainer);

      for (let index = 0; index < secondaryCrimeTabsArray.length; index++) {
        if (secondaryCrimeTabsArray[index].visible == true) {
          secondaryCrimeTabContainer.appendChild(secondaryCrimeTabsArray[index].element);
        }
      }

      for (let index = 0; index < crimeArray.length; index++) {
        if (crimeArray[index].visible == true) {
          gizmoContainerElement.appendChild(crimeArray[index].containerElement);
        }
      }
      break;
    case 1:
      for (let index = 0; index < facilityArray.length; index++) {
        if (facilityArray[index].visible == true) {
          gizmoContainerElement.appendChild(facilityArray[index].element);
        }
      }
      break;
    case 2:
      for (let index = 0; index < researchArray.length; index++) {
        if (researchArray[index].visible == true) {
          gizmoContainerElement.appendChild(researchElementArray[index].baseElement);
        }
      }
      break;
    case 3:
      break;
  }
}
// removes all the elements from the main game box
function clearGizmoElements() {
  while (gizmoContainerElement.firstChild) {
    gizmoContainerElement.removeChild(gizmoContainerElement.lastChild);
  }
  while (gizmoContainerElement.firstChild) {
    gizmoContainerElement.removeChild(gizmoContainerElement.lastChild);
  }
}
