// Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

// - nome;
// - nota da primeira prova;
// - nota da segunda prova.

// - [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
// - [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

function average(firstNote, secondNote) {
  return ((firstNote + secondNote) / 2);
}

let students = [{
  name: 'Cristiane',
  firstNote: 9,
  secondNote: 8
},
{
  name: 'Bruno',
  firstNote: 7,
  secondNote: 8
},
{
  name: 'Arnaldo',
  firstNote: 6,
  secondNote: 4
},
{
  name: 'Maria',
  firstNote: 5,
  secondNote: 6
}
];

console.log(students)

function message(name, avg) {
  if (avg >= 7) {
    return `Parabéns, ${name}! Você foi aprovado(a) no concurso!`
  }
  else
    return `Não foi desa vez, ${name}! Tente novamente!`
}

for (let student of students) {
  let avg = Math.ceil(average(student.firstNote, student.secondNote));
  let str = 'teste';

  alert(`A média do(a) aluno(a) ${student.name} é: ${avg}
  ${message(student.name, avg)}`);

}
