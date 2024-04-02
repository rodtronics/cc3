class criminalsClass {
  constructor() {
    this.thugsTotal = 1;
    this.thugsFree = 1;
    this.associatesTotal = 0;
    this.associatesFree = 0;
    this.figuresTotal = 0;
    this.figuresFree;
    this.bossesTotal = 0;
    this.bossesFree = 0;
    this.transnationalsTotal = 0;
    this.transnationalsFree = 0;
  }
}

let criminals = new criminalsClass();
// crime data

const crimesConst = [
  {
    crime: "Stealing Candy from a Baby",
    description: "It's just another reminder that even the smallest opponents can leave you feeling like a total loser.",
    ttc: 20000,
  },
  {
    crime: "Staying up past bedtime",
    description:
      "everyone else is snoozing away, dreaming of success and babes, while you're just scrolling through memes and regretting every life choice that brought you to this moment",
    ttc: 200000,
  },
];
// define the class
// none of this should duplicate what is in the crimes const
class crimeObjectClass {
  constructor(index) {
    this.crimeIndex = index;
    this.crimeIndexID = "crimeIndexID_" + this.crimeIndex;
    this.visible = true;
    this.running = false;
    this.numOfCriminals = 0;
    this.multiplier = 0; // this is ADDED onto 1
    this.category = null;
    this.timeCrimeStarted = 0;
    this.timeCrimeWillEnd = 0;
    this.state = 2; // 0 means paused & 1 is running. 3 means not ever started
    // 4 means now in crimes per second mode
    this.auto = 1;
    this.progress = 0.0;
    this.progressElement = null;
    this.containerElement = null;
    this.recruitmentAddElement = null;
    this.recruitmentSubElement = null;
    this.numCrimElement = null;
    this.timesDoneElement = null;
    this.timesDone = 0;
    this.cpsRate = 0.0;
    this.buildingPrereqs = [];
    this.researchPrereqs = [];
  }
}
// generate array of crimes
// this holds some static info
// and dynamic info about the crime
// is set up so the index is the same as the number in CrimeID
// so that one can be used to get the other
let crimeArray = [];
for (let index = 0; index < crimesConst.length; index++) {
  crimeArray[index] = new crimeObjectClass(index);
}

const facilityConst = [
  { name: "Nightclubs", description: "Often used for illegal activities such as drug dealing, money laundering, or hosting illegal gambling." },
  { name: "Warehouses", description: "Criminals might use warehouses for storing illegal goods such as stolen merchandise, counterfeit products, or drugs." },
  { name: "Strip Clubs", description: "These establishments may be fronts for illegal activities such as human trafficking or prostitution." },
  { name: "Abandoned Buildings", description: "Criminals might take over abandoned buildings to conduct various illegal activities away from public view." },
  {
    name: "Hotels/Motels",
    description:
      "These establishments can be used for illegal activities such as drug dealing, prostitution, or human trafficking due to the transient nature of their clientele.",
  },
  { name: "Vacation Rentals", description: "Similar to hotels, vacation rentals can be used for illegal activities due to the lack of strict oversight." },
  { name: "Bars", description: "Some bars may serve as fronts for illegal activities such as drug dealing or illegal gambling." },
  {
    name: "Construction Sites",
    description: "Criminals might use construction sites to store illegal goods or equipment or to conduct illegal activities such as theft.",
  },
  { name: "Car Washes", description: "Car wash businesses can be used for money laundering or as fronts for drug distribution." },
  { name: "Storage Units", description: "Criminals might rent storage units to store illegal goods or equipment." },
  {
    name: "Gas Stations",
    description: "Gas stations can be used for illegal activities such as selling stolen goods, drug dealing, or as a meeting point for criminal activities.",
  },
  { name: "Factories", description: "Some factories might be used for illegal manufacturing operations such as producing counterfeit goods or illegal drugs." },
  {
    name: "Apartment Buildings",
    description: "Criminals might own or rent apartments within buildings to conduct illegal activities such as drug dealing or as hideouts for fugitives.",
  },
  {
    name: "Pawn Shops",
    description: "While legitimate pawn shops exist, some might engage in illegal activities such as fencing stolen goods or money laundering.",
  },
  {
    name: "Warehouses",
    description:
      "Often located in industrial areas, warehouses can be used for various illegal activities including storing stolen goods, counterfeit products, or illegal drugs.",
  },
  {
    name: "Cannabis Grow Houses",
    description:
      "In regions where cannabis cultivation is illegal, criminals might set up grow houses in residential or industrial areas to cultivate and distribute marijuana illegally.",
  },
  {
    name: "Internet Cafes/Gaming Arcades",
    description: "These establishments might be used for illegal online activities such as cybercrime or online gambling.",
  },
  {
    name: "Churches or Religious Buildings",
    description:
      "While uncommon, some criminals might use religious buildings as fronts for illegal activities or as meeting places due to their perceived sanctity.",
  },
  {
    name: "Vacant Lots",
    description: "Criminals might use vacant lots for illegal activities such as dumping toxic waste or conducting illegal transactions away from public view.",
  },
  {
    name: "Mobile Homes/Trailers",
    description:
      "Criminals might use mobile homes or trailers as temporary bases of operations for illegal activities such as drug manufacturing or human trafficking.",
  },
];

class facilityObjectClass {
  constructor(index) {
    this.name = facilityConst[index].name;
    this.facilityIndex = index;
    this.facilityIndexID = "facilityIndexID_" + index;
    this.visible = true;
    this.done = false;
    this.level = 1;
    this.element = null;
    this.buildingPrereqs = [];
    this.researchPrereqs = [];
  }
}

// generate array of facilities
let facilityArray = [];
for (let index = 0; index < facilityConst.length; index++) {
  facilityArray[index] = new facilityObjectClass(index);
}

const researchConst = [
  {
    name: "r/crimes",
    description: "you can learn about crimes here on reddit, the front page of the internet",
    buildingPrereqs: [],
    researchPrereqs: [],
    baseTimeToCompleteMS: 600000,
  },
];

class researchObjectClass {
  constructor(index) {
    this.name = researchConst[index].name;
    this.researchIndex = index;
    this.researchIndexID = "researchIndexID_" + index;
    this.visible = true;
    this.done = false;
    this.level = 1;
    this.buildingPrereqs = [];
    this.researchPrereqs = [];
  }
}

// generate array of researches
let researchArray = [];
for (let index = 0; index < researchConst.length; index++) {
  researchArray[index] = new researchObjectClass(index);
}
