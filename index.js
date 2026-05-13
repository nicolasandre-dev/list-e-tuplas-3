let frutas = ['Maçã', 'Banana', 'Laranja', 'Morango', 'Uva'];
console.log(frutas);
console.log(frutas[0]);
console.log(frutas[frutas.length - 1]);

let numeros = [104, 200, 479, 40, 50, 400];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}
console.log("A soma total é: " + soma);

let listaNumeros = [5, 12, 739, 25, 3, 45, 1, 500, 22, 10];
let maior = listaNumeros[0];

for (let i = 1; i < listaNumeros.length; i++) {
    if (listaNumeros[i] > maior) {
        maior = listaNumeros[i];
    }
}
console.log("O maior valor encontrado é: " + maior);

let aluno = ["Carlos Silva", 17, "3º Ano A"];
console.log(`Nome: ${aluno[0]} | Idade: ${aluno[1]} | Turma: ${aluno[2]}`);

let produto = ["Caderno", 15.90, 50];
// .toFixed(2) força o número a mostrar duas casas decimais (R$15.90 em vez de R$15.9)
console.log(`O produto ${produto[0]} custa R$${produto[1].toFixed(2)} e temos ${produto[2]} em estoque.`);

let filmes = [
    ["Interestelar", 2014, "Ficção"],
    ["O Rei Leão", 1994, "Animação"],
    ["Matrix", 1999, "Ação"]
];

for (let i = 0; i < filmes.length; i++) {
    console.log(`Filme: ${filmes[i][0]} | Ano: ${filmes[i][1]} | Gênero: ${filmes[i][2]}`);
}
