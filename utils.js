const datasetInput = document.getElementById('file-input');
const modelParams = document.getElementById('model-params');
const log = document.getElementById('log');

export const convertCsvToJson = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsText(file, 'UTF-8');
        reader.onload = () => {
            const xValues = [];
            const yValues = [];
            const data = reader.result.split('\n');

            for (let i = 1; i < data.length; i++) {
                const row = data[i].split(',');
                xValues.push(parseFloat(row[0]));
                yValues.push(parseFloat(row[1]));
            }

            resolve({ xValues, yValues });
        };

        reader.onerror = () => {
            reject('Error reading file');
        };
    });
};


export const convertCsvToTreeJson = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsText(file, 'UTF-8');
        reader.onload = () => {
            const params = [];
            const data = reader.result.split('\n');

            for (let i = 0; i < data.length; i++) {
                const row = data[i].split(',');
                const paramsRow = [];
                for (let j = 0; j < row.length; j++) {
                    paramsRow.push(row[j]?.trim());
                }
                params.push(paramsRow);
            }

            resolve({ params });
        };

        reader.onerror = () => {
            reject('Error reading file');
        };
    });
}

const drawTrendChart = (trendData, slope) => {
    const data = new google.visualization.DataTable();
    data.addColumn('number', 'X');
    data.addColumn('number', 'Y');
    data.addRows(trendData);

    const options = {
        title: 'Data Trend',
        hAxis: { title: 'X' },
        vAxis: { title: 'Y' },
        legend: 'none',
        trendlines: { 0: { type: 'linear', lineWidth: 2, opacity: 0.7 } }
    };

    const chart = new google.visualization.ScatterChart(document.getElementById('chart'));
    chart.draw(data, options);
};

export const displayTrend = (xValues, yValues) => {
    if (xValues.length > 1 && yValues.length > 1) {
        const trendData = [];
        const slope = (yValues[yValues.length - 1] - yValues[0]) / (xValues[xValues.length - 1] - xValues[0]);
        const trendMessage = slope > 0
            ? `The trend is upward with a slope of ${slope.toFixed(2)}.`
            : `The trend is downward with a slope of ${slope.toFixed(2)}.`;

        log.innerHTML = `<div class="alert alert-success" role="alert">${trendMessage}</div>`;

        for (let i = 0; i < xValues.length; i++) {
            trendData.push([xValues[i], yValues[i]]);
        }

        google.charts.setOnLoadCallback(() => drawTrendChart(trendData, slope));
    }
};

const drawDifferenceChartWithLines = (xValues, yValues, predictions) => {
    const data = new google.visualization.DataTable();
    data.addColumn('number', 'X');
    data.addColumn('number', 'Real Value');
    data.addColumn('number', 'Prediction');

    const differenceData = [];
    for (let i = 0; i < xValues.length; i++) {
        data.addRow([xValues[i], yValues[i], predictions[i]]);

        differenceData.push([{ v: xValues[i], f: null }, yValues[i], null]);
        differenceData.push([{ v: xValues[i], f: null }, null, predictions[i]]);
    }


    const options = {
        title: 'Prediction vs Actual Values with Differences',
        hAxis: { title: 'X' },
        vAxis: { title: 'Value' },
        legend: 'none',
        series: {
            0: { color: 'black', pointSize: 5 },
            1: { color: 'red', lineWidth: 2 },
            2: { color: 'blue', lineWidth: 1, lineDashStyle: [4, 4] }
        }
    };


    const differenceDataTable = new google.visualization.DataTable();
    differenceDataTable.addColumn('number', 'X');
    differenceDataTable.addColumn('number', 'Real Value');
    differenceDataTable.addColumn('number', 'Prediction');
    differenceDataTable.addRows(differenceData);

    const chart = new google.visualization.ComboChart(document.getElementById('chart'));
    chart.draw(differenceDataTable, options);
};

export const displayPatterns = async (predictions) => {
    const { xValues, yValues } = await convertCsvToJson(datasetInput.files[0]);
    if (xValues.length > 1 && yValues.length > 1) {
        google.charts.load('current', { packages: ['corechart'] });
        google.charts.setOnLoadCallback(() => drawDifferenceChartWithLines(xValues, yValues, predictions));
    }
};


export const getModelParams = () => {
    const value = modelParams.value;
    console.log(value);

    const params = value.split(';');

    const result = {};

    params.forEach(param => {
        const [key, value] = param.split('=');
        result[key?.trim()] = value?.trim();
    });

    return result;
}
