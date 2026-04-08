export const lista = ["dimitri", "teixeira", 30]; //array
export const lista2 = ['suco', 'refrigerente', 'carne']

export const superLista = lista.concat(lista2)

export function listaIngrediente() {
  alert("o ingrediente que falta é: " + superLista);
}
