const libro = {
  title: "1984",
  author: "George Orwell",
  year: 1949,

  isAntique: function () {
    const actualYear = new Date().getFullYear();
    return actualYear - this.year > 10;
  },
};

console.log(`El libro ${libro.title} es antiguo: ${libro.isAntique()}`);
