import { conversorFormulas } from "./conversor.js";

function conv() {
    console.log("teste");
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const conversionIn = document.getElementById('conversionIn').value;
    const conversionOut = document.getElementById('conversionOut').value;

    let result;

    if (isNaN(inputValue)) {
        const errorMessage = 'Por favor, insira um valor válido.';
        document.getElementById('result').innerText = 'Resultado: ' + errorMessage;
        console.log(errorMessage);
        return;
    }

    if (conversorFormulas[conversionIn] && conversorFormulas[conversionIn][conversionOut]) {
        result = conversorFormulas[conversionIn][conversionOut] * inputValue;
        console.log(result);
    } else {
        const errorMessage = 'Conversão não disponível.';
        document.getElementById('result').innerText = 'Resultado: ' + errorMessage;
        console.log(errorMessage);
        return;
    }

    document.getElementById('result').innerText = `Resultado: ${result}`;
    console.log(result);
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('converter').addEventListener('click', conv);
});
