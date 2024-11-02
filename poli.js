import { convertCsvToJson, displayPatterns, displayTrend, getModelParams } from './utils.js';

const datasetInput = document.getElementById('file-input');
const results = document.getElementById('results');


export const performRegresionPolynomial = async (action) => {
    const { xValues, yValues } = await convertCsvToJson(datasetInput.files[0]);

    const polynomialModel = new PolynomialRegression();

    const { degree = 2 } = getModelParams();

    console.log({ action, xValues, yValues, degree });

    polynomialModel.fit(xValues, yValues, degree);
    const predictions = polynomialModel.predict(xValues);


    if (action === 'train') {
        const resultadoPolinomial = document.createElement('resultadoPolinomial');
        results.innerHTML = '';

        console.log(polynomialModel);

        resultadoPolinomial.innerHTML = `
            <div class="">
            Degree: ${degree} <br>
            Soluciones: ${JSON.stringify(polynomialModel.solutions.join(', '))}
            Error: ${polynomialModel.error}
            </div>
            `;

        results.appendChild(resultadoPolinomial);

        alert('Modelo entrenado');

        return;
    }

    if (action === 'predict') {

        const options = {
            title: 'Regresión Polinomial',
            seriesType: 'scatter',
            series: { 1: { type: 'line' } },
            hAxis: { title: 'X' },
            vAxis: { title: 'Y' }
        };

        const dataArray = [['X', 'Y real', 'Predicción']];
        xValues.forEach((x, i) => {
            dataArray.push([x, yValues[i], predictions[i]]);
        });

        const dataTable = google.visualization.arrayToDataTable(dataArray);

        const chart = new google.visualization.ComboChart(document.getElementById('chart'));
        chart.draw(dataTable, options);

        return;
    }

    if (action === 'show') {
        displayTrend(xValues, yValues);
    }

    if (action === 'patterns') {
        displayPatterns(predictions);
    }
}