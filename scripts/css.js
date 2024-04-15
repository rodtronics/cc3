let cssBuilder = {
  // one big object with a bunch of css returning methods
  stripedLinearGradient(angle, colorSet) {
    colorSet = colorSet == undefined ? 0 : colorSet;
    let localColors = colors[0];
    angle = angle == undefined ? 0 : angle;
    let colourString = "";
    let spacingNum = 100 / (localColors.length - 1);

    for (let index = 0; index < localColors.length - 1; index++) {
      let firstColour = localColors[index];
      let secondColour = localColors[index + 1];
      let firstPercent = index * spacingNum;
      let secondPercent = Math.floor((index + 1) * spacingNum);
      let stringSection = `${firstColour} ${firstPercent}%, ${firstColour} ${secondPercent}%, ${secondColour} ${secondPercent}%, ${secondColour} ${secondPercent}%`;
      if (index !== localColors.length - 2) {
        stringSection += ", ";
      }
      colourString += stringSection;
    }
    return `linear-gradient(${angle}deg, ${colourString})`;
  },

  stripedProgressBar(progressPercentage) {
    localColors = colors[0];
    let numColors = localColors.length;
    let colourString = "";
    let segmentPercentage = 100 / numColors;

    for (let index = 0; index < numColors - 1; index++) {
      let firstColour = localColors[index];
      let secondColour = localColors[index + 1];
      let segmentStart = Math.floor(index * segmentPercentage);
      let segmentEnd = Math.floor((index + 1) * segmentPercentage);

      // Adjust percentages based on progressPercentage
      segmentStart = Math.min(segmentStart, progressPercentage);
      segmentEnd = Math.min(segmentEnd, progressPercentage);

      let stringSection = `  ${firstColour} ${segmentStart}%, ${firstColour} ${segmentEnd}%, ${secondColour} ${segmentEnd}%, ${secondColour} ${segmentEnd}%, `;

      // Append black if last stop
      if (index == numColors - 2) {
        //   stringSection += ", ";
        stringSection += ` #000000 ${segmentEnd}%, #000000 100%`;
      }

      colourString += stringSection;
    }

    return `linear-gradient(61.8deg, ${colourString})`;
  },

  plainProgressBar(progressPercentage, blankColor, fillColor, angle) {
    blankColor = blankColor || "black";
    fillColor = fillColor || "var(--palette-5)";
    angle = angle || 70;

    let stringSection = `${fillColor} 0%, ${fillColor} ${progressPercentage}%, ${blankColor} ${progressPercentage}%, ${blankColor} 100%`;
    return `linear-gradient(${angle}deg, ${stringSection})`;
  },

  repeatingGrid(thickness, spacing, lineColor, angle, units) {
    angle = angle || 0;
    units = units || "px";
    lineColor = lineColor || "rgba(71, 46, 109,1)";
    fillColor = "rgba(0,0,0,0)";
    let colorString = `${lineColor} 0px, ${lineColor} ${thickness}${units}, ${fillColor} ${thickness}${units}, ${fillColor} ${spacing + units}`;

    let partA = `repeating-linear-gradient(${angle}deg , ${colorString}), `;
    let partB = `repeating-linear-gradient(${angle + 90}deg , ${colorString})`;
    newString = partA + partB;
    return newString;
  },
};
document.getElementById("gizmoContainer_ID").style.background = cssBuilder.repeatingGrid(3, 25, "#520075", 0);
