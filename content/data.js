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

// ttc: time to complete (in ms)
// mpc: money earned per crime
const crimesConst = [
  {
    crime: "Stealing Candy from a Baby",
    description: "It's just another reminder that even the smallest opponents can leave you feeling like a total loser",
    ttc: 20000,
    mpc: 1,
  },
  {
    crime: "Staying up past bedtime",
    description:
      "everyone else is snoozing away, dreaming of success and babes, while you're just scrolling through memes and regretting every life choice that brought you to this moment",
    ttc: 200000,
    mpc: 0,
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
  { name: "Parent's basement", description: "Often used for illegal activities such as drug dealing, money laundering, or hosting illegal gambling." },
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
