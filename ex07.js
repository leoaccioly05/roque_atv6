const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let numeros = [];

function lerNumero(i) {
    readline.question(`Informe o número ${i + 1}: `, numero => {
        numeros.push(Number(numero));
        if (i < 4) {
            lerNumero(i + 1);
        } else {
            let maiorNumero = Math.max(...numeros);
            console.log(`O maior número é ${maiorNumero}.`);
            readline.close();
        }
    });
}

lerNumero(0);