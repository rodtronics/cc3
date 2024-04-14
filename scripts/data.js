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

// baseTimeToCompleteMS: time to complete (in ms)
// mpc: money earned per crime
const crimesConst = [
  {
    crime: "Stealing Candy from a Baby",
    description: "It's just another reminder that even the smallest opponents can leave you feeling like a total loser",
    baseTimeToCompleteMS: 20000,
    mpc: 1,
  },
  {
    crime: "Staying up past bedtime",
    description:
      "everyone else is snoozing away, dreaming of success and babes, while you're just scrolling through memes and regretting every life choice that brought you to this moment",
    baseTimeToCompleteMS: 200000,
    mpc: 0,
  },
  { crime: "long crime", baseTimeToCompleteMS: 7000000000, description: "takes fuckin forvere man" },
  { crime: "day crime", baseTimeToCompleteMS: 86410000 },
  { crime: "long term crime", baseTimeToCompleteMS: 31556952000, description: "what the fuck" },
];

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
    baseTimeToCompleteMS: 65000,
  },
  {
    name: "school library",
    description:
      "the school library is my refuge, where dusty tomes offer solace from judgmental eyes. I lose myself in ancient crime novels, their pages holding secrets of intrigue and mystery. Here, in this forgotten corner, I find comfort in the world of deception and cunning, but also a reminder of my perpetual solitude.",
    buildingPrereqs: [],
    researchPrereqs: [],
    baseTimeToCompleteMS: 65000,
  },
];
// remember don't duplicate data here that can just be access from the const

// // generate array of researches
// let researchArray = [];
// for (let index = 0; index < researchConst.length; index++) {
//   researchArray[index] = new researchObjectClass(index);
// }

// let researchElementArray = [];
// for (let index = 0; index < researchConst.length; index++) {
//   researchElementArray[index] = new researchElementObjectClass(index);
// }
