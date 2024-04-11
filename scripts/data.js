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
  { crime: "long crime", ttc: 7000000000, description: "takes fuckin forvere man" },
  { crime: "day crime", ttc: 86410000 },
  { crime: "long term crime", ttc: 31556952000, description: "what the fuck" },
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
    this.state = 2; // 0 means paused & 1 is running. 2 means not ever started
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
  {
    name: "Parent's basement",
    description:
      " dimly lit basement, cluttered with an assortment of mismatched furniture and storage boxes stacked haphazardly against the walls. the air is thick with the scent of mustiness, a lingering reminder of neglect and despair.",
  },
];

// remember don't duplicate data here that can just be access from the const
class facilityObjectClass {
  constructor(index) {
    this.name = facilityConst[index].name;
    this.facilityIndex = index;
    this.facilityIndexID = "facilityIndexID_" + index;
    this.visible = true;
    this.built = false;
    this.level = 1;
    this.baseElement = null;
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
    description:
      "Hunched over my computer screen, drowning in the glow of a thousand subreddits, I stumbled upon r/crimes. Maybe this would fill the hole in my life. With trembling fingers, I delved into stories of heists and capers, losing myself deeper and deeper. Hours turned to days, but as dawn approached, I realized the void remained. Maybe it was time to step away, or perhaps... just one more post.",
    buildingPrereqs: [],
    researchPrereqs: [],
    baseTimeToCompleteMS: 600000,
  },
];
// remember don't duplicate data here that can just be access from the const
class researchObjectClass {
  constructor(index) {
    this.name = researchConst[index].name;
    this.researchIndex = index;
    this.researchIndexID = "researchIndexID_" + index;
    this.visible = true;
    this.done = false;
    this.level = 1;
    // state 0 is unstarted, 1 is running, 0 is paused
    this.state = 0;
    this.timeStarted = 0;
    this.timeWillEnd = 0;
    this.baseElement = null;
    this.statusElement = null;
  }
}

class researchElementObjectClass {
  constructor() {
    this.baseElement = null;
  }
}

// generate array of researches
let researchArray = [];
for (let index = 0; index < researchConst.length; index++) {
  researchArray[index] = new researchObjectClass(index);
}

let researchElementArray = [];
for (let index = 0; index < researchConst.length; index++) {
  researchElementArray[index] = new researchElementObjectClass(index);
}
