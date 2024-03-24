// this part of the script cycles the logo colors when its clicked on
// variables related to cycling the logo colors
var logoColorIndex = 0;
var logoColorLength = 6;
var logoElement = document.getElementById("titleID");
// a series of colors to cycle through
var logoColorArray = ["#CA2C92", "#008080", "#FF7F11", "#50C878", "#EE4B2B", "#01baef", ];
// set up event listener for clicking on logo
logoElement.addEventListener("click", () => cycleLogoColor());
// function that cycles logo colors;
function cycleLogoColor() {
    logoColorIndex++;
    logoColorIndex = logoColorIndex % logoColorLength
    logoElement.style.color = logoColorArray[logoColorIndex];
}