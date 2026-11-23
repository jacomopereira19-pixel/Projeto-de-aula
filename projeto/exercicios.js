let alunos = [
    { nome: "Ana", nota: 15 },
    { nome: "Pedro", nota: 8 },
    { nome: "Maria", nota: 18 },
    { nome: "João", nota: 12 },
    { nome: "Carlos", nota: 9 },
    { nome: "Luiza", nota: 16 }
];

// Ordenar alunos pela nota
alunos.sort((a, b) => b.nota - a.nota);

// Mostrar classificacao
console.log("CLASSIFICACAO DOS ALUNOS:");

alunos.forEach((aluno, indice) => {
    console.log(`${indice + 1}º - ${aluno.nome}: ${aluno.nota}`);
});

// Maior nota
console.log("Maior nota:", alunos[0]);

// Menor nota
console.log("Menor nota:", alunos[alunos.length - 1]);

// Calcular media
let soma = alunos.reduce((total, aluno) => total + aluno.nota, 0);
let media = soma / alunos.length;

console.log("Media da turma:", media);

// Alunos aprovados
let aprovados = alunos.filter(aluno => aluno.nota >= 10);

console.log("Alunos aprovados:", aprovados);