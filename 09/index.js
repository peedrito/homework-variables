const numeroLados = 6; // Você pode alterar o número de lados conforme necessário

// Fórmula para calcular a soma dos ângulos internos (S)
const somaAngulos = (numeroLados - 2) * 180;

// Fórmula para calcular o valor de cada ângulo (a)
const valorAngulo = somaAngulos / numeroLados;

// Exibir os resultados no console
console.log(`Considerando um polígono com ${numeroLados} lados:`);
console.log(`Soma dos ângulos internos (S) = ${somaAngulos} graus`);
console.log(`Valor de cada ângulo (a) ≅ ${valorAngulo.toFixed(2)} graus`);
