function validarInformacoes(nome, idade, salario, sexo, estadoCivil) {
    if (nome.length <= 3) {
        return "O nome deve ter mais de 3 caracteres.";
    }
    if (idade < 0 || idade > 150) {
        return "A idade deve estar entre 0 e 150.";
    }
    if (salario <= 0) {
        return "O salário deve ser maior que zero.";
    }
    if (sexo !== 'f' && sexo !== 'm') {
        return "O sexo deve ser 'f' ou 'm'.";
    }
    if (estadoCivil !== 's' && estadoCivil !== 'c' && estadoCivil !== 'v' && estadoCivil !== 'd') {
        return "O estado civil deve ser 's', 'c', 'v' ou 'd'.";
    }
    return "Informações validadas com sucesso!";
}

console.log(validarInformacoes("João", 25, 3000, 'm', 's'));
console.log(validarInformacoes("Ana", 151, 5000, 'f', 'c'));