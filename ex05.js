const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularAnos(populacaoA, taxaCrescimentoA, populacaoB, taxaCrescimentoB) {
    let anos = 0;

    while (populacaoA < populacaoB) {
        populacaoA += populacaoA * (taxaCrescimentoA / 100);
        populacaoB += populacaoB * (taxaCrescimentoB / 100);
        anos++;
    }

    return anos;
}

function iniciarPrograma() {
    readline.question('Informe a população do país A: ', popA => {
        readline.question('Informe a taxa de crescimento do país A: ', taxaA => {
            readline.question('Informe a população do país B: ', popB => {
                readline.question('Informe a taxa de crescimento do país B: ', taxaB => {
                    let anosNecessarios = calcularAnos(Number(popA), Number(taxaA), Number(popB), Number(taxaB));
                    console.log(`Serão necessários ${anosNecessarios} anos para que a população do país A ultrapasse ou iguale a população do país B.`);
                    readline.question('Deseja repetir a operação? (s/n) ', resposta => {
                        if (resposta.toLowerCase() === 's') {
                            iniciarPrograma();
                        } else {
                            readline.close();
                        }
                    });
                });
            });
        });
    });
}

iniciarPrograma();