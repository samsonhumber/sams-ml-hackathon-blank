import {sampleDataArray, trueClassification, xRange, yRange} from './neuralNetwork.js';


// -------------------------------------------------------------------------------------------------------


function TrainNeuralNetwork() {
    // PUT YOUR NEURAL NETWORK CODE HERE
    // You may want to make more functions to train the neural network
    return {weights: [[]], biases: []}
};

// ------------------------------------------------------------------------------------------------------

// These functions are used 

function ClassifyMesh(trainedWeights, trainedBiases, meshResolution) {
    // This function creates a fine grid to use to determine a decision boundary

    const xMeshSpacing = (xRange[1]-xRange[0])/meshResolution;
    const yMeshSpacing = (yRange[1]-yRange[0])/meshResolution;

    let meshGrid = [];
    let decisionLinePoints = [];

    for (let i=0; i<meshResolution; i++) {
        meshGrid.push([]);

        for (let j=0; j<resolution; j++) {
            const thisPoint = [[xRange[0] + j * xMeshSpacing, xRange[0] + i * yMeshSpacing]];

            // CHANGE THIS CODE SO YOUR NETWORK CLASSIFIES thisPoint
            // ======================================================================

            const expectedOutput = [];

            // =====================================================================

            meshGrid[i].push(expectedOutput[0]);

            if ((j-1 >= 0 && meshGrid[i][j-1] !== meshGrid[i][j]) || (i-1 >= 0 && meshGrid[i-1][j] !== meshGrid[i][j])) {
                decisionLinePoints.push(thisPoint[0]);
            }
        }
    }

    // A suitable line is generated when plotted in order - may need to change this for discontinuous lines
    decisionLinePoints.sort((a, b) => {return (a[0] - b[0])});
    return decisionLinePoints
}

export function LoadTrainedNetwork() {
    // Use this function to train and store the neural network on your device
    // If it is already stored on your device, the neural network will be loaded into the program instead

    let trainedData;

    const weightsStorage = localStorage.getItem("ML-task0-data")
    ? JSON.parse(localStorage.getItem("ML-task0-data"))
    : undefined;

    if(!weightsStorage) {
        trainedData = TrainNeuralNetwork(sampleDataArray, trueClassification);
        //localStorage.setItem("ML-task0-data", JSON.stringify(trainData));
    } else {
        trainedData = {
            weights: weightsStorage.weights,
            biases: weightsStorage.biases,
        };
    }

    trainedData.decisionBoundary = ClassifyMesh(trainedData.weights, trainedData.biases, 500);
    return trainedData
}

export function DeleteNetworkData() {
    // Use this function to delete the locally stored learning data

    let weightsStorage = localStorage.getItem("ML-task0-data")
    ? JSON.parse(localStorage.getItem("ML-task0-data"))
    : undefined;
    if (!weightsStorage) {
        console.log('No network data to delete, or it is stored under another name');
    } else {
        localStorage.removeItem("ML-task0-data");
    }
}