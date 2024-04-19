/* this is a bit of a new approach
going to perhaps try and make these as independend of any other functions 
I've already made.

the overall idea is to have some kind of widget builder and two kinds of data
one kind of data is structure. this is where I define the different "types" of widgets
eg crime vs research vs resource
the other is content data, this will first off state type of widget, and then the content

a longer term question is whether or not I will let myself determine functionality from the content data
eg.. a crime, but it needs a minimum number of people to run. 
I'd like to this by having optional properties

and what this should potentially mean is extending the generic class with mixins
for different functionality

going to try and do JSDoc as much as I can
stay consistent with namings
*/

//
// used to drive the creation of each widget

const modularContentData = [
  {
    // this one is a bit of a prototype, showing all properties even if not used in this one
    type: "basic crime",
    displayName: "stealing candy from a baby",
    moduleID: "crime_stealcandy",
    description: "it's just another reminder that even the smallest opponents can leave you feeling like a total loser",
    durationMS: 30000,
    yield: [
      { type: "candy", quantity: [0, 2] }, // if the quantity is an array, it means a range
      { type: "sadness", quantity: 1 },
      { type: "money", quantity: 0 },
    ],
    cost: 0,
    requirements: undefined,
    committersRequired: 1, // if this is 0 or undefined, it'll just be one
    coolDownMS: 0,
  },
];
//
// this is an object with methods that construct the overall widget

const modularBuilder = {
  buildWidget(widgetObject) {},
  // this function takes the data from a key/data pair,
  // and returns it as an array regardless of if it is
  // or not
  normaliseData(data) {
    return Array.isArray(data) ? data : [data];
  },
};
//
// this is the generic object that all widgets will have
// this may be extended by mixins
class modularGenericWidget {
  // this constructor should call the modular builder on itself
  // actually perhaps that is bad, because I will want to assign element references
  // into the new object, and am unsure how to do that without turning this
  // constructor into a large builder function
  // what I should do is pass the widget object to the builder
  constructor(index) {
    this.index = index;
    this.numCommitters = 0;
    state = 0; // 0 is never been done, 1 is going, 2 is paused, 3 is complete
  }
}
//
//
// init the array of widgets
let widgetArray = [];
// fill the array
for (let index = 0; index < modularContentData.length; index++) {
  // make a new object and assign into the array
  widgetArray[index] = new modularGenericWidget(index);
  // pass object into the builder
  modularBuilder.buildWidget(widgetArray[index]);
}
/**
 * this holds the data about inventory
 * @type this is the only essential key
 * @displayName will default to whatever type is if undefined
 * @description
 * @value if non zero then means it can be sold
 * @saleRisk if non zero then means chance of losing it without making money
 */

const inventoryData = [{ type: "candy", description: "a sad little confection, it tastes like regret", value: 0 }];

class playerDataClass {
  constructor() {
    this.money = 0;
    this.moneyCumulative = 0;
    this.dateTimeStarted = dayjs();
    // player inventory
    this.inventory = [];

    for (let index = 0; index < array.length; index++) {
      this.inventory[index] = {};
      this.inventory[index].type = inventoryData[index].type;
      this.inventory[index].quantity = 0;
      this.inventory[index].quantityCumulative = 0;
    }
  }
  /**
   * passed an array, it looks for the property "type", and tries to find
   * the index of it, or returns null
   * @param {array} is the passed array
   * @param {searchType} is the value in the "type":"value" pair
   * @returns the index of the item in the array
   * ot null if none (rather than -1)
   */
  getIndexInArrayFromType(array, searchType) {
    let index = array.findIndex((obj) => obj.type === searchType);
    index = index == -1 ? null : index;
  }
  addInventory(type, quantity) {}
}
