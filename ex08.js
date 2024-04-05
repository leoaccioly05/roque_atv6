let numeros = [2, 9, 4, 7, 8];
let soma = 0;
let media = 0;

for(let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

media = soma / numeros.length;

console.log("A soma dos números é: " + soma);
console.log("A média dos números é: " + media);