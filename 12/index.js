// Valores do exemplo (altere conforme necessário)
const montantePago = 90000;
const capitalInicial = 60000;
const numeroMeses = 24;

// Fórmula para calcular a taxa de juros
const taxaJuros = Math.pow(montantePago / capitalInicial, 1 / numeroMeses) - 1;

// Formatar a taxa de juros como porcentagem
const taxaJurosPorcentagem = (taxaJuros * 100).toFixed(3);

// Exibir o resultado no console
console.log(`O seu financiamento de ${capitalInicial} reais teve uma taxa de juros de ${taxaJurosPorcentagem}%, pois após ${numeroMeses} meses você teve que pagar ${montantePago} reais.`);
