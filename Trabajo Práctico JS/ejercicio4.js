let number = prompt("Ingresa un número y te diremos si es par o impar: ");

number = Number(number);

console.log(
  "El número que ingresaste es " + (number % 2 === 0 ? "par." : "impar.")
);
