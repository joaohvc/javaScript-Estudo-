//Lista
const lista = ["João Henrique", "Viana do carmo", 30];
const lista2 = ["João Henrique1", "Viana do carmo1", 301];

lista.pop(); //remove o ultimo lista da lista
lista.push(20); //adiciona um item na lista, ele indo para o ultimo lugar
lista.shift(); //remove o primeiro item da lista
lista.unshift(); //adiciona um item em primeiro lugar na lista
delete []; //delete aquela posiçao, e o items da lista nao vao ter as posiçoes mudados(nao recomendado)
lista.splice(1, 0, "item adicionado 1", "item adiciona 2"); //adiciona item na lista na posicao que voce quiser, escrevendo primeiro a posiçao que vc quer e logo em seguida se quer que sobrecreva algum em cima de algum item na lista
const listasJuntos = lista.concat(lista2)//juntas duas ou mais lista em so uma,OBS:tem que criar um novo variavel para a junçao das listas
lista.join(' - ')//substitui as virgulas da lista por qualquer coisa dentro das aspas

//Objeto 
const objeto = {
    nome:'João Henrique',
    Sobrenome:'Viana do carmo',
    Idade:30,
}


//Monstra no console
console.log(lista, objeto,lista2,listasJuntos)