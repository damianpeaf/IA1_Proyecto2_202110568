import { convertCsvToTreeJson } from "./utils.js";
import { getModelParams } from './utils.js'
const datasetInput = document.getElementById('file-input');

const showDecisionTreeGraph = (dotStr) => {
    const chart = document.getElementById("chart");

    const parsDot = vis.network.convertDot(dotStr);
    const data = {
        nodes: parsDot.nodes,
        edges: parsDot.edges
    };

    const options = {
        layout: {
            hierarchical: {
                levelSeparation: 100,
                nodeSpacing: 100,
                parentCentralization: true,
                direction: 'UD',
                sortMethod: 'directed',
            },
        },
    };

    const network = new vis.Network(chart, data, options);
}

export const performTree = async (action) => {

    console.log({ action })
    // Age,Race,Marital Status,T Stage ,N Stage,6th Stage,differentiate,Grade,A Stage,Tumor Size,Estrogen Status,Progesterone Status,Regional Node Examined,Reginol Node Positive,Survival Months,Status

    const { params } = await convertCsvToTreeJson(datasetInput.files[0]);

    const { train = 0.8 } = getModelParams();

    const headers = params[0];

    const trainData = params.slice(0, Math.floor(params.length * train));

    const predictionData = [
        [...headers.slice(0, headers.length - 1)],
        ...params.slice(Math.floor(params.length * train)).map(row => {
            const rowCopy = [...row];
            rowCopy.pop(); // remove the last element
            return rowCopy;
        })
    ]

    console.log({ trainData, predictionData })

    const decisionTree = new DecisionTreeID3(trainData);

    const root = decisionTree.train(decisionTree.dataset);

    if (action === 'train') return alert('Training completed successfully!');

    if (action === 'predict') {
        decisionTree.predict(predictionData, root)
        const dot = decisionTree.generateDotString(root);
        console.log({ dot })
        showDecisionTreeGraph(dot);
    }



}