const entrada = require('prompt-sync')({sigint: true});

usuario = entrada("Digite o valor a ser sacado: ")
let valor = parseInt(usuario);

const notas = [100, 50, 10, 5, 1];

console.log(valor);

for (let nota of notas){
    let qtdNotas = parseInt(valor / nota)
    console.log(`${qtdNotas} nota(s) de R$ ${nota},00`);
    valor = valor % nota;
}