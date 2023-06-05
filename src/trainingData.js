// My sample data set. Use this one, your own or change some values if you like, as long as the points are not too easily separated

const sampleXArray = [1, 2, 3, 4, 5, 1.5, 1, 2, 4, 1, 3, 1, 2, 4, 2.5, 3];
const sampleYArray = [1, 1, 1, 1, 1, 1.5, 2, 2, 2, 3, 3, 4, 4, 4, 1.5, 2];

const sampleDataArray = sampleXArray.map((xValue, index) => {
    return [xValue, sampleYArray[index]]
});

const xRange = [0, 5];
const yRange = [0, 5];

const trueClassification = [[1, 0], [1, 0], [1, 0], [0, 1], [0, 1], [1, 0], [1, 0], [1, 0], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [1, 0], [1, 0]];

export {sampleDataArray, trueClassification, xRange, yRange}