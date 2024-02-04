// Dados da dívida & Juros
const capital = 3000;
const mesesAcumulados = 10;
const taxaJuros = 13;

// Sistema para calcular montante
const porcentagemJuros = taxaJuros / 100;
const montante = capital * (1 + porcentagemJuros) ** mesesAcumulados;

// Iprime no console
console.log(`Marcia está com uma dívida sem juros de ${capital}, ela está devendo durante ${mesesAcumulados}, o juros da loja de roupas que ela devendo é de ${taxaJuros}% por mês. O valor total da dívida de Marcia com juros é de R$${montante.toFixed(2)}.`);