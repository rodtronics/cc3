const root = document.documentElement;

let colors = [
  ["#21e5b7", "#2e8ae6", "#e6962e", "#e51e5e"],
  ["#00B1DB", "#1CDC6B", "#DCDA00", "#DB4B1A"],
  ["#196CDB", "#1AB7DC", "#17DBB3", "#1BDB69"],
  ["#FF0061", "#00E1FF", "#E15901", "#00DB3E"],
];

// go to
// https://www.npmjs.com/package/color-math?activeTab=readme
// on how to use colormath library

function setColorStyle(version) {
  version = version % colors.length;
  for (let index = 0; index < tabTotalNumber; index++) {
    let activeColor = colors[version][index];
    // this takes the active color and <<< makes darker and << reduces saturation
    let inactiveColor = ColorMath.evaluate(colors[version][index] + " <<<10% <<30%").result.hex();
    let activeTabName = "--tab" + (index + 1) + "-Active";
    let inactiveTabName = "--tab" + (index + 1) + "-Inactive";

    console.log(activeColor);
    console.log(inactiveColor);
    root.style.setProperty(activeTabName, activeColor);
    root.style.setProperty(inactiveTabName, inactiveColor);
  }
}
