const raio = 1; // Você pode alterar o valor do raio conforme necessário

// Constante para o valor de pi
const pi = Math.PI;

// Fórmula para calcular o comprimento do círculo (C)
const comprimento = 2 * pi * raio;

// Fórmula para calcular a área do círculo (A)
const area = pi * Math.pow(raio, 2);

// Exibir os resultados no console
console.log(`Para um círculo com raio R = ${raio}:`);
console.log(`Comprimento (C) ≅ ${comprimento.toFixed(2)}`);
console.log(`Área (A) ≅ ${area.toFixed(2)}`);
