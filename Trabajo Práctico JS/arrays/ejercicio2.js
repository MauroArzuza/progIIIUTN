let pares = [];

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    pares.push(i);
  }
  if (pares.length === 10) break;
}

console.log(pares);
