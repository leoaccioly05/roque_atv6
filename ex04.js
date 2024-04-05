function calcularAnos(populacaoA, taxaCrescimentoA, populacaoB, taxaCrescimentoB) {
    let anos = 0;

    while (populacaoA < populacaoB) {
        populacaoA += populacaoA * (taxaCrescimentoA / 100);
        populacaoB += populacaoB * (taxaCrescimentoB / 100);
        anos++;
    }

    return anos;
}

let anosNecessarios = calcularAnos(80000, 3, 200000, 1.5);
console.log(`Serão necessários ${anosNecessarios} anos para que a população do país A ultrapasse ou iguale a população do país B.`);
