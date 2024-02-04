// Carteira & valor do produto
const saldo = 80;
const valorDoTenis = 129.99;

// Sistema para descobrir desconto
const quantoFalta = valorDoTenis - saldo;
const descobrirDesconto = (quantoFalta / valorDoTenis) * 100;

// Imprime no console
console.log(`Seu saldo disponível é de R$${saldo}, o valor do produto é ${valorDoTenis}. O desconto necessário é de ${descobrirDesconto.toFixed()}%.`)
