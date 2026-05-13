// Criando o array (Referência: Slide 9)
let frutas = ['Maçã', 'Banana', 'Laranja', 'Morango', 'Uva'];

// Mostra a lista completa (Referência: Slide 13)
console.log(frutas);

// Mostra a primeira fruta (Índice 0 - Referência: Slide 10)
console.log(frutas[0]);

// Mostra a última fruta (Usando length - Referência: Slide 10)
console.log(frutas[frutas.length - 1]);

let numeros = [10, 20, 30, 40, 50, 60];
let soma = 0;

// Percorrendo a lista (Erro 'inde' removido aqui)
for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

console.log("A soma total é: " + soma);

let listaNumeros = [5, 12, 8, 25, 3, 45, 1, 18, 22, 10];
let maior = listaNumeros[0];

for (let i = 1; i < listaNumeros.length; i++) {
    if (listaNumeros[i] > maior) {
        maior = listaNumeros[i];
    }
}

console.log("O maior valor encontrado é: " + maior);

let aluno = ["Carlos Silva", 17, "3º Ano A"];
console.log("Nome: " + aluno[0] + ", Idade: " + aluno[1] + ", Turma: " + aluno[2]);

let produto = ["Caderno", 15.90, 50];
console.log("O produto " + produto[0] + " custa R$" + produto[1] + " e temos " + produto[2] + " em estoque.");

let filmes = [
    ["Interestelar", 2014, "Ficção"],
    ["O Rei Leão", 1994, "Animação"],
    ["Matrix", 1999, "Ação"]
];

// Percorrendo e mostrando os dados
for (let i = 0; i < filmes.length; i++) {
    console.log("Filme: " + filmes[i][0] + " | Ano: " + filmes[i][1] + " | Gênero: " + filmes[i][2]);
}