const prompt = require('prompt-sync')();

function convertirTemperatura() {
    let temperaturaCelsius;

    while (true) {
        temperaturaCelsius = prompt("Ingresa la temperatura en grados Celsius: ");

        temperaturaCelsius = Number(temperaturaCelsius);

        if (!isNaN(temperaturaCelsius)) {
            break; 
        }

        console.log("Error: Por favor, ingresa un número válido.");
    }

    const temperaturaFahrenheit = (temperaturaCelsius * 9 / 5) + 32;
    const temperaturaKelvin = temperaturaCelsius + 273.15;

    console.log(`Grados Kelvin: ${temperaturaKelvin.toFixed(2)}`);
    console.log(`Grados Fahrenheit: ${temperaturaFahrenheit.toFixed(2)}`);
}

convertirTemperatura();