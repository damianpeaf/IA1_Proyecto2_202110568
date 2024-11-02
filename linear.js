import { convertCsvToJson, displayPatterns, displayTrend } from './utils.js';

const datasetInput = document.getElementById('file-input');
const results = document.getElementById('results');


export const performLinearRegression = async (action) => {
    const { xValues, yValues } = await convertCsvToJson(datasetInput.files[0]);
    const linearModel = new LinearRegression();
    linearModel.fit(xValues, yValues);
    const predictions = linearModel.predict(xValues);

    const options = {
        title: 'Linear Regression Model',
        seriesType: 'scatter',
        series: { 1: { type: 'line' } },
        hAxis: { title: 'X' },
        vAxis: { title: 'Y' }
    };

    if (action === 'train') {
        results.innerHTML = '';
        const linearResult = document.createElement('div');
        linearResult.innerHTML = `Intercepto: ${linearModel.b} Pendiente:${linearModel.m}`;
        results.appendChild(linearResult);
        alert('Model trained');
    }

    if (action === 'predict') {
        const dataArray = [['X', 'Actual Y', 'Prediction']];
        xValues.forEach((x, i) => dataArray.push([x, yValues[i], predictions[i]]));

        const dataTable = google.visualization.arrayToDataTable(dataArray);
        const chart = new google.visualization.ComboChart(document.getElementById('chart'));
        chart.draw(dataTable, options);
    }

    if (action === 'show') {
        displayTrend(xValues, yValues);
    }

    if (action === 'patterns') {
        displayPatterns(predictions);
    }
};