const person = {
  name: "Juan",
  age: 30,
  city: "Buenos Aires",

  changeCity: function (newCity) {
    this.city = newCity;
  },
};

console.log(
  `Nombre: ${person.name}, Edad: ${person.age}, Ciudad: ${person.city}.`
);
// cambio de ciudad
person.changeCity("Mendoza");
console.log(
  `Nombre: ${person.name}, Edad: ${person.age}, Ciudad: ${person.city}.`
);
