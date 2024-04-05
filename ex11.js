let num1 = 8;
let num2 = 20;
let soma = 0;

for(let i = num1 + 1; i < num2; i++) {
    console.log(i);
    soma += i;
}

console.log("A soma dos números no intervalo é: " + soma);
