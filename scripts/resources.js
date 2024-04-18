const resourcesConst = [
  {
    name: "candy",
    description: "you know what candy is",
  },
  {
    name: "sadness",
    description: " some crimes make you feel sad that you had to commit them",
  },
  { name: "hooch", description: "" },
  { name: "car stereos", description: "" },
  { name: "c4", description: "" },
  { name: "lockpick", description: "" },
  { name: "battering ram", description: "" },
  { name: "magnetic drill", description: "" },
  { name: "grappling hook", description: "" },
  { name: "cigarettes", description: "" },
  { name: "methamphetamine", description: "" },
  { name: "crusty towel", description: "" },
];

// avoid duplicating info in const
class resourcesClass {
  constructor(index) {
    this.index = index;
    this.currentTotal = 0;
    this.totalEver = 0;
    this.elements = {};
    this.elements.name = null;
    this.elements.quantity = null;
    this.elements.base = null;
  }
}
let resourceArray = [];
for (let index = 0; index < resourcesConst.length; index++) {
  resourceArray[index] = new resourcesClass(index);
}

function reapRewards(index) {
  const localCrimesConst = crimesConst[index];
  const localLoot = localCrimesConst.loot;

  //localLoot is the loot Object

  //if no loot at all, just return
  if (localLoot == false) {
    return;
  }
  // cycle through the loots
  for (let index = 0; index < localLoot.length; index++) {
    localLootItem = localLoot[index];

    let localLootItemName = localLootItem[0];

    // console.log(localLootItem.length);

    // this returns the index of the loot item in the resource const and will use it to update value in array
    let resourceArrayIndex = resourcesConst.findIndex((lootObject) => lootObject.name == localLootItemName);
    let lootQuantityToBeApplied = 0;

    // makes sure it could be found
    if (resourceArrayIndex != -1) {
      //now find out if a single loot or range of loot
      const lootQuantity = localLootItem[1];
      if (lootQuantity.length == 2) {
        let min = Math.floor(lootQuantity[0]);
        let max = Math.ceil(lootQuantity[1]);
        let difference = Math.abs(max - min);
        let randomFloat = Math.random();
        let preQuantity = Math.round(difference * randomFloat);
        let postQuantity = preQuantity + min;
        lootQuantityToBeApplied = postQuantity;
      } else {
        lootQuantityToBeApplied = lootQuantity;
      }
    } else {
      console.log("reward from crime not found in resource data");
      return;
    }
    let redraw = false;
    // this just redraws the tab if it went from 0 to something while youre on resrouces
    if (resourceArray[resourceArrayIndex].totalEver == 0 && global.activeTab == 3) {
      redraw = true;
    }
    resourceArray[resourceArrayIndex].currentTotal += lootQuantityToBeApplied;
    resourceArray[resourceArrayIndex].totalEver += lootQuantityToBeApplied;
    let totalToDisplay = resourceArray[resourceArrayIndex].currentTotal;
    totalToDisplay = totalToDisplay < 1 ? "all out" : totalToDisplay;
    resourceArray[resourceArrayIndex].elements.quantity.innerText = totalToDisplay;
    if (redraw == true) {
      setActiveTab(3);
    }
  }
}

let resourceGizmoBuilder = {
  createBaseElement() {
    newBaseElement = document.createElement("div");
    newBaseElement.classList.add("resourceGizmoBase");
    return newBaseElement;
  },
  createNameElement(index) {
    newNameElement = document.createElement("div");
    newNameElement.classList.add("resourceGizmoName");
    newNameElement.innerText = resourcesConst[index].name;
    return newNameElement;
  },
  createQuantityElement() {
    newQuantityElement = document.createElement("div");
    newQuantityElement.classList.add("resourceGizmoQuantity");
    return newQuantityElement;
  },
  buildTotalGizmo(index) {
    resourceArray[index].elements.base = this.createBaseElement();
    resourceArray[index].elements.name = this.createNameElement(index);
    resourceArray[index].elements.quantity = this.createQuantityElement();
    resourceArray[index].elements.base.appendChild(resourceArray[index].elements.name);
    resourceArray[index].elements.base.appendChild(resourceArray[index].elements.quantity);
  },
};

for (let index = 0; index < resourcesConst.length; index++) {
  resourceGizmoBuilder.buildTotalGizmo(index);
}
