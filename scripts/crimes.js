// this is to make the second set of tabs that go under crimes

const secondaryCrimeTabsConst = ["primordial crimes", "minor crimes", "white collar crimes", "international crimes"];

class secondaryCrimeTabClass {
  constructor(index) {
    this.element = null;
    this.visible = true;
  }
}

let secondaryCrimeTabsArray = [];
for (let index = 0; index < secondaryCrimeTabsConst.length; index++) {
  secondaryCrimeTabsArray[index] = new secondaryCrimeTabClass(index);
}

// make the tab container element, returning the element
function createCrimeSectionTabs() {
  let crimeSectionTabContainer = document.createElement("div");
  crimeSectionTabContainer.classList.add("secondaryTabContainer_Class");

  // make the tabs themselves and add to array
  for (let index = 0; index < secondaryCrimeTabsConst.length; index++) {
    let newCrimeSectionSecondaryTab = document.createElement("div");
    newCrimeSectionSecondaryTab.classList.add("secondaryTabElement_Class");
    let newCrimeTabID = "crimeTabIndexID_" + index;
    newCrimeSectionSecondaryTab.setAttribute("crimeTabID", newCrimeTabID);
    newCrimeSectionSecondaryTab.innerHTML = secondaryCrimeTabsConst[index];
    secondaryCrimeTabsArray[index].element = newCrimeSectionSecondaryTab;
  }
  return crimeSectionTabContainer;
}
