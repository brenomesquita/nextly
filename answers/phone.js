/*
    Questâo:
        Uma imensa lista telefônica contendo pares da forma {número do telefone, nome da pessoa} foi
        armazenada como um vetor ordenado pelo nome em ordem alfabética.
        Escreva um programa que encontra o número do telefone de uma dada pessoa nessa lista, levando
        em conta que a lista è muito grande e que os usuários necessitam que o resultado da busca seja o
        mais rápido possivel.

    Dúvidas:
        1- A questão não deixou claro se os usuários podem ter mais de um numero.
            Caso o usuario tenha mais de um numero vamos retornar todos os numero ou epenas um?
        2- A questão no deixou claro qual vai ser o resultado caso nao tenha usuario que combine com o parametro de busca.
            O retorno vai ser o nome de usuario mais proximo ou nao havera retorno?

    Pontos levados em consideração:
        1- O Algoritimo ira levar em consideração que os usuarios podem ter mais de um numero
            e ira retornar todos os numeros desse usuário.
        2- O Algoritimo ira levar em consideração que caso o nao tenha nenhuma correspondencia na lista
            o resultado vai ser falso.
*/

const sortedArray = [
  {
    "phone": "+55 (861) 462-3305",
    "name": "Adele Walker"
  },
  {
    "phone": "+55 (955) 489-2296",
    "name": "Breno Coleman"
  },
  {
    "phone": "+55 (998) 514-2697",
    "name": "Bachur Lindsey"
  },
  {
    "phone": "+55 (890) 566-3705",
    "name": "Celli Beasley"
  },
  {
    "phone": "+55 (989) 597-2576",
    "name": "Celli Beasley"
  },
  {
    "phone": "+55 (871) 406-2693",
    "name": "Celli Beasley"
  },
  {
    "phone": "+55 (990) 419-2217",
    "name": "Damara Mcdaniel"
  },
  {
    "phone": "+55 (818) 591-3120",
    "name": "Emmie Bullock"
  },
  {
    "phone": "+55 (885) 444-2448",
    "name": "Felsey Guerrero"
  },
  {
    "phone": "+55 (838) 532-3703",
    "name": "Felsey Guerrero"
  },
  {
    "phone": "+55 (987) 438-3340",
    "name": "Fitzgerald Nielsen"
  }
];

function binarySearch(sortedArray, name){
    let start = 0;
    let end = sortedArray.length - 1;
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        if (sortedArray[middle].name === name) {
            let users = [sortedArray[middle]];
            let index = 1;
            if(sortedArray[middle - index]) {
                while (sortedArray[middle - index].name === name) {
                    users.push(sortedArray[middle - index])
                    index += 1;
                }
            }
            if(sortedArray[middle + index]) {
                index = 1;
                while (sortedArray[middle + index].name === name) {
                    users.push(sortedArray[middle + index])
                    index += 1;
                }
            }
            return middle = users;
        } else if (sortedArray[middle].name < name) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return false;
} // complexidade: O(log n) logaritimica

console.log(binarySearch(sortedArray, "Celli Beasley")) // [  { phone: '+55 (871) 406-2693', name: 'Celli Beasley' },  { phone: '+55 (989) 597-2576', name: 'Celli Beasley' },  { phone: '+55 (890) 566-3705', name: 'Celli Beasley' }]
console.log(binarySearch(sortedArray, "sdfsdfsdf")) // false
console.log(binarySearch(sortedArray, "Felsey Guerrero")) // [  { phone: '+55 (885) 444-2448', name: 'Felsey Guerrero' },  { phone: '+55 (838) 532-3703', name: 'Felsey Guerrero' }]

function linearSearch(sortedArray, name){
    let users = [];
    for(let i = 0; i < sortedArray.length; i++){
        if(sortedArray[i].name === name) users.push(sortedArray[i])
    }
    if(users.length === 0) return false;
    return users
} // complexidade: O(n) linear

console.log(linearSearch(sortedArray, "Celli Beasley")) // [  { phone: '+55 (871) 406-2693', name: 'Celli Beasley' },  { phone: '+55 (989) 597-2576', name: 'Celli Beasley' },  { phone: '+55 (890) 566-3705', name: 'Celli Beasley' }]
console.log(linearSearch(sortedArray, "sdfsdfsdf")) // false
console.log(linearSearch(sortedArray, "Felsey Guerrero")) // [  { phone: '+55 (885) 444-2448', name: 'Felsey Guerrero' },  { phone: '+55 (838) 532-3703', name: 'Felsey Guerrero' }]

export {
    binarySearch,
    linearSearch
}
