import { performLinearRegression } from './linear.js'
import { performRegresionPolynomial } from './poli.js';
import { performTree } from './tree.js';
google.charts.load('current', { packages: ['corechart'] });

const modelSelect = document.getElementById('model-select');
const trainButton = document.getElementById('train-button');
const predictButton = document.getElementById('predict-button');
const showGraphButton = document.getElementById('show-graph-button');
const patternsButton = document.getElementById('patterns-button');
const datasetInput = document.getElementById('file-input');

const executeModel = (modelName, action) => {
    console.log({ modelName, action })
    if (!datasetInput.files.length) return alert('Please select a dataset file');


    switch (modelName) {
        case 'linear-regression':
            performLinearRegression(action);
            break;
        case 'polynomial-regression':
            performRegresionPolynomial(action);
            break;
        case 'decision-tree':
            performTree(action);
            break;
        default:
            console.log('Invalid model name');
            break;
    }
};

trainButton.addEventListener('click', () => {
    const modelName = modelSelect.value;
    executeModel(modelName, 'train');
});

predictButton.addEventListener('click', () => {
    const modelName = modelSelect.value;
    executeModel(modelName, 'predict');
});

showGraphButton.addEventListener('click', () => {
    const modelName = modelSelect.value;
    executeModel(modelName, 'show');
});

patternsButton.addEventListener('click', () => {
    const modelName = modelSelect.value;
    executeModel(modelName, 'patterns');
});
