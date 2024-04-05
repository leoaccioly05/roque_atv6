let nota = prompt("Por favor, insira uma nota entre 0 e 10:");

while(nota < 0 || nota > 10) {
    alert("Valor inválido! Por favor, insira uma nota entre 0 e 10.");
    nota = prompt("Por favor, insira uma nota entre 0 e 10:");
}

alert("Nota válida: " + nota);