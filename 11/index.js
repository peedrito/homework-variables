// Diâmetro da esfera (altere conforme necessário)
const diametro = 6;

// Constante para o valor de pi
const pi = Math.PI;

// Fórmula para calcular o raio da esfera
const raio = diametro / 2;

// Fórmula para calcular o volume da esfera
const volume = (4 / 3) * pi * Math.pow(raio, 3);

// Exibir o resultado no console
console.log(`O volume de uma esfera de raio ${raio} é ${volume.toFixed(2)} PI`);
