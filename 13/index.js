// Valores do exemplo (altere conforme necessário)
const raioBase = 3;
const alturaCilindro = 1;

// Constante para o valor de pi
const pi = Math.PI;

// Fórmula para calcular a área total do cilindro
const areaTotal = 2 * pi * raioBase * (raioBase + alturaCilindro);

// Exibir o resultado no console
console.log(`Para um cilindro com raio R = ${raioBase} e altura H = ${alturaCilindro}:`);
console.log(`A área total é ≅ ${areaTotal.toFixed(2)} pi`);
