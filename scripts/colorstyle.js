const root = document.documentElement;

let colors = [
  ["#B91C00", "#FF6100", "#FFD700", "#00BC3E", "#006CFF", "#4FBAF5", "#F50133"],
  ["#006CFF", "#00BC3E", "#FFD700", "#FF6100", "#B91C00", "#4FBAF5", "#F50133"],

  ["#21e5b7", "#2e8ae6", "#e6962e", "#e51e5e", "#e6962e", "#7A00F4"],
  ["#00B1DB", "#1CDC6B", "#DCDA00", "#DB4B1A", "#e6962e", "#7A00F4"],
  ["#196CDB", "#1AB7DC", "#17DBB3", "#1BDB69", "#e6962e", "#7A00F4"],
  ["#FF0061", "#00E1FF", "#E15901", "#00DB3E", "#e6962e", "#7A00F4"],
];

// go to
// https://www.npmjs.com/package/color-math?activeTab=readme
// on how to use colormath library

function setColorStyle(version) {
  let colorsLength = colors[version].length;

  version = version % colors[version].length;
  for (let index = 0; index < tabElement.length; index++) {
    let activeColor = colors[version][index % colorsLength];
    // this takes the active color and <<< makes darker and << reduces saturation
    let inactiveColor = ColorMath.evaluate(colors[version][index % colorsLength] + " <<<10% <<30%").result.hex();
    let activeTabName = "--tab" + (index + 1) + "-Active";
    let inactiveTabName = "--tab" + (index + 1) + "-Inactive";

    // console.log(activeColor);
    // console.log(inactiveColor);
    root.style.setProperty(activeTabName, activeColor);
    root.style.setProperty(inactiveTabName, inactiveColor);
  }
}

// this newer function is designed to define the palette for the whole game

function setGamePalette(version) {
  version = version % colors.length;
  let colorsLength = colors[version].length;
  for (let index = 0; index < colorsLength; index++) {
    let currentColor = colors[version][index % colorsLength];
    if (currentColor == null) {
      currentColor = "1AB7DC";
    }
    let dimmedColor = ColorMath.evaluate(currentColor + " <<<10% <<30%").result.hex();
    let vdimmedColor = ColorMath.evaluate(currentColor + " <<<50% <<50%").result.hex();
    let brightColor = ColorMath.evaluate(currentColor + " >>>50% >>50%").result.hex();

    let currentColorName = "--palette-" + (index + 1);
    let dimmedColorName = "--palette-" + (index + 1) + "dim";
    let vdimmedColorName = "--palette-" + (index + 1) + "vdim";

    let brightColorName = "--palette-" + (index + 1) + "bright";

    root.style.setProperty(currentColorName, currentColor);
    root.style.setProperty(dimmedColorName, dimmedColor);
    root.style.setProperty(vdimmedColorName, vdimmedColor);

    root.style.setProperty(brightColorName, brightColor);
  }
}
