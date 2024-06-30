function converter() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const conversionType = document.getElementById('conversionType').value;
    let result;
    console.log("teste")

    if (isNaN(inputValue)) {
        const errorMessage = 'Por favor, insira um valor válido.';
        document.getElementById('result').innerText = 'Resultado: ' + errorMessage;
        console.log(errorMessage);
        return;
    }

    switch(conversionType) {
        case 'kmToM':
            result = inputValue * 1000;
            break;
        case 'kmhToMs':
            result = inputValue / 3.6;
            break;
        case 'cToF':
            result = (inputValue * 9/5) + 32;
            break;
        case 'kgToG':
            result = inputValue * 1000;
            break;
        case 'lToMl':
            result = inputValue * 1000;
            break;
        case 'paToAtm':
            result = inputValue / 101325;
            break;
        case 'm2ToCm2':
            result = inputValue * 10000;
            break;
        case 'hToMin':
            result = inputValue * 60;
            break;
        case 'miToKm':
            result = inputValue * 1.60934;
            break;
        case 'gbToMb':
            result = inputValue * 1024;
            break;
        default:
            result = 'Tipo de conversão inválido';
    }

    document.getElementById('result').innerText = `Resultado: ${result}`;
    console.log(result);
}

document.getElementById('convert').onclick=convert();