const conversorFormulas = {
    "Nanometro": {
      "Micrometro": 0.001,
      "Milimetro": 1e-6,
      "Centimetro": 1e-7,
      "Metro": 1e-9,
      "Quilometro": 1e-12,
      "Milha": 6.2137e-13,
      "Pe": 3.2808e-9,
      "Polegada": 3.937e-8,
      "Jarda": 1.0936e-9
    },
    "Micrometro":
    {
      "Nanometro": 1000,
      "Milimetro": 0.001,
      "Centimetro": 1e-4,
      "Metro": 1e-6,
      "Quilometro": 1e-9,
      "Milha": 6.2137e-10,
      "Pe": 3.2808e-6,
      "Polegada": 3.937e-5,
      "Jarda": 1.0936e-6
    }
    ,
    "Milimetro":
    {
      "Nanometro": 1e+6,
      "Micrometro": 1000,
      "Centimetro": 0.1,
      "Metro": 0.001,
      "Quilometro": 1e-6,
      "Milha": 6.2137e-7,
      "Pe": 0.00328084,
      "Polegada": 0.0393701,
      "Jarda": 0.00109361
    }
    ,
    "Centimetro":
    {
      "Nanometro": 1e+7,
      "Micrometro": 10000,
      "Milimetro": 10,
      "Metro": 0.01,
      "Quilometro": 1e-5,
      "Milha": 6.2137e-6,
      "Pe": 0.0328084,
      "Polegada": 0.393701,
      "Jarda": 0.0109361
    }
    ,
    "Metro":
    {
      "Nanometro": 1e+9,
      "Micrometro": 1e+6,
      "Milimetro": 1000,
      "Centimetro": 100,
      "Quilometro": 0.001,
      "Milha": 0.000621371,
      "Pe": 3.28084,
      "Polegada": 39.3701,
      "Jarda": 1.09361
    }
    ,
    "Quilometro":
    {
      "Nanometro": 1e+12,
      "Micrometro": 1e+9,
      "Milimetro": 1000000,
      "Centimetro": 100000,
      "Metro": 1000,
      "Milha": 0.621371,
      "Pe": 3280.84,
      "Polegada": 39370.1,
      "Jarda": 1093.612959
    }
    ,
    "Milha":
    {
      "Nanometro": 1.609e+12,
      "Micrometro": 1.609e+9,
      "Milimetro": 1.609e+6,
      "Centimetro": 160934,
      "Metro": 1609.34,
      "Quilometro": 1.60934,
      "Pe": 5280,
      "Polegada": 63360,
      "Jarda": 1760
    }
    ,
    "Pe":
    {
      "Nanometro": 3.048e+8,
      "Micrometro": 304800,
      "Milimetro": 304.8,
      "Centimetro": 30.48,
      "Metro": 0.3048,
      "Quilometro": 0.0003048,
      "Milha": 0.000189394,
      "Polegada": 12,
      "Jarda": 0.333333
    }
  };
function converter() {
    limpar();
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
    
    if (conversionIn === conversionOut) {
    const errorMessage = 'Selecione uma opção válida para conversão.';
    document.getElementById('result').innerText = 'Resultado: ' + errorMessage;
    console.log(errorMessage);
    return;
    }

    else{
        result = conversorFormulas[conversionIn][conversionOut]*inputValue

        document.getElementById('result').innerText = `Resultado: ${result}`;
        console.log(result);
    };
};

function limpar(){
    document.getElementById('result').innerText = " ";
};
