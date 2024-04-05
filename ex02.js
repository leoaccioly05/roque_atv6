let username = prompt("Por favor, insira o seu nome de usuário:");
let password = prompt("Por favor, insira a sua senha:");

while(username === password) {
    alert("Erro: A senha não pode ser igual ao nome do usuário. Por favor, tente novamente.");
    username = prompt("Por favor, insira o seu nome de usuário:");
    password = prompt("Por favor, insira a sua senha:");
}

alert("Nome de usuário e senha válidos!");
