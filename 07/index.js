// Informações pandemicas
const infectados = 80;
const suspeitos = 70;
const tempoexposto = 7;

// Sistema de para saber o total de infectados
const infectadosGeral = infectados * (Math.pow(suspeitos, tempoexposto/7));

// Imprime no console
console.log(`Atualmente descobrimos o total de ${infectados}, os mesmos informaram que tiveram contato com ${suspeitos} suspeitos, nossos especialistam inforam que provavelmente o total de casos será ${infectadosGeral}.`)