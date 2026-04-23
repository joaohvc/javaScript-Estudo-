//Lista
const lista = ["João Henrique", "Viana do carmo", 30];
const lista2 = ["João Henrique1", "Viana do carmo1", 301];

lista.pop(); //remove o ultimo lista da lista
lista.push(20); //adiciona um item na lista, ele indo para o ultimo lugar
lista.shift(); //remove o primeiro item da lista
lista.unshift(); //adiciona um item em primeiro lugar na lista
delete []; //delete aquela posiçao, e o items da lista nao vao ter as posiçoes mudados(nao recomendado)
lista.splice(1, 0, "item adicionado 1", "item adiciona 2"); //adiciona item na lista na posicao que voce quiser, escrevendo primeiro a posiçao que vc quer e logo em seguida se quer que sobrecreva algum em cima de algum item na lista
const listasJuntos = lista.concat(lista2); //juntas duas ou mais lista em so uma,OBS:tem que criar um novo variavel para a junçao das listas
lista.join(" - "); //substitui as virgulas da lista por qualquer coisa dentro das aspas
lista.slice(); //Define de qual parte da fila vc quer que liste, vc podendo colocar de uma posiçao na lista a outra(EX lista.slice(2,6))
lista.sort(); //Deixa a lista em ordem alfabetica
lista.reverse(); //Deixa a lista em ordem alfabetica so que ao contrario, lembrando que é preciso usar o .sort primeiro
lista.sort(function (a, b) {
  return a - b;
}); //Script para deixar um lista em ordem numero crescente
lista.sort(function (a, b) {
  return b - a;
}); //Script para deixar um lista em ordem numero decrescente
function maiorNumero(array) {
  return Math.max.apply(null, array);
} //função para pergar o maior numero de uma lista
function menorNumero(array) {
  return Math.min.apply(null, array);
} //função para pergar o menor numero de uma lista

//Objeto
const objeto = {
  nome: "João Henrique",
  Sobrenome: "Viana do carmo",
  Idade: 30,
};
//IF e ELSE

export function lampada() {
  let interruptor = "on";
  if (interruptor == "on") {
    alert("a lampada esta liga");
  } else {
    alert("a lampada esta desligada");
  }
}
export function saudação() {
  var horario = new Date().getHours();

  if (horario < 12) {
    return "Bom dia meu jovem";
  } else if (horario < 18) {
    return "boa tarde meu nobre";
  } else {
    return "Boa noite meu jovem";
  }
}

export function validacao() {
  const input = document.getElementById("texto"); //pegando id da Home.jsx
  const inputNumero = document.getElementById("number");
  if (input.value === "" || inputNumero.value === "") {
    alert("Voce não preencheu o nome ou a idade da forma correta");
  } else if (input.value === "" || inputNumero.value < 18) {
    alert("Voce nao pode acessar porque voce é nenem");
  } else if (inputNumero.value <= 0) {
    alert("Voce nem nasceu ainda");
  } else {
    alert("Voce pode acessar o site indevido");
  }
}
//Switch case
function swicthCase() {
  let expressao;
  expressao = expressao.toLowerCase(); //faz com que tudo que for inserido no input por exemplo retorne em minusculo,indepedente se foi escrito em maisculo
  switch (expressao) {
    case "azul":
      break;
    case "vermelho":
      break;
    case "verde":
      break;
     default : 
  }
}
//Laço de repetição
export function lacoRepeticao() {
  let i = 0
  for(i; i<101; i++){
    document.getElementById('numero').value += i + ', '
  }
}

//Monstra no console
console.log(
  lista,
  objeto,
  lista2,
  listasJuntos,
  maiorNumero,
  menorNumero,
  swicthCase,
  lacoRepeticao
);
