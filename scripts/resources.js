const resourcesConst = [
  {
    name: "candy",
    description: "you know what candy is",
  },
];

// avoid duplicating info in const
class resourcesClass {
  constructor(index) {
    this.index = index;
    this.currentTotal = 0;
    this.totalEver = 0;
  }
}
