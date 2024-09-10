function convertirCelsiusAFahrenheit(celcius) {
  return celcius * 1.8 + 32;
}
const celcius = 33;
console.log(
  `${celcius}°C son equivalentes a ${convertirCelsiusAFahrenheit(celcius)}°F.`
);
