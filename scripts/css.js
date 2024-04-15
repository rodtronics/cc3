let cssBuilder = {
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
                stringSection += ', ';
            }
            colourString += stringSection;
        }
        return `linear-gradient(${angle}deg, ${colourString})`;
    },

    stripedProgressBar(progressPercentage) {
        localColors = colors[2]
        let colourString = "";
        let numColors = localColors.length;
        let segmentPercentage = 100 / numColors;

        for (let index = 0; index < numColors - 1; index++) {
            let firstColour = localColors[index];
            let secondColour = localColors[index + 1];
            let segmentStart = Math.floor(index * segmentPercentage);
            let segmentEnd = Math.floor((index + 1) * segmentPercentage);

            // Adjust percentages based on progressPercentage
            segmentStart = Math.min(segmentStart, progressPercentage);
            segmentEnd = Math.min(segmentEnd, progressPercentage);

            let stringSection = `${firstColour} ${segmentStart}%, ${firstColour} ${segmentEnd}%, ${secondColour} ${segmentEnd}%, ${secondColour} ${segmentEnd}% `;

            // Append comma if it's not the last color stop
            if (index !== numColors - 2) {
                stringSection += ', ';
            }

            colourString += stringSection;
            // colourString += ` #000000 ${segmentEnd}%, #000000 100%`;
        }

        return `linear-gradient(61.8deg, ${colourString})`;
    }
};

