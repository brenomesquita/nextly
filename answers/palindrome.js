/*
    Questâo:
        Um palavra é dita palindroma se ela é simétrica, isto é, se a escrevermos de trás para frente,
        o resultado é o mesmo. Por exemplo, "ARARA" é palindroma, mas "ARAR" não é.
        Escreva um pequeno programa, que determina se uma palavra é palindroma.

    Dúvidas:
        A questão não deixou claro se caracteres especiais são para serem levados em consideração.
        A questão nao deixou claro os valores para serem "imputados" na função(string/numbers).
        A questão não deixou claro se tem diferença entre caracteres maiúsculos ou minúsculos.

    Pontos levados em consideração:
        Caracteres especiais vao ser excluidos para fazer a asserção.
        As funções vao receber apenas strings para a asserção.
        O caracteres maiúsculos ou minúsculos nao intereferem no resultado
*/


// Forma usando funções nativas do js
function palindromeOne(str) {
    const notWordReg = /[\W_]/g;
    const lowRegStr = str.toLowerCase().replace(notWordReg, '');
    const reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr;
}// complexidade: O(n) linear

console.log(palindromeOne("taco cat")); //true
console.log(palindromeOne("my gym")); //true
console.log(palindromeOne("red rum, sir, is murder")); //true
console.log(palindromeOne("rotator")); //true
console.log(palindromeOne("racecar")); //true
console.log(palindromeOne("not a palindrome")); //false

// Forma usando for loop
function palindromeTwo(str) {
    let notWordReg = /[\W_]/g;
    str = str.toLowerCase().replace(notWordReg, '');
    let length = str.length;
    for (let index = 0; index < length/2; index++) {
      if (str[index] !== str[length - 1 - index]) return false;
    }
    return true;
}// complexidade: O(n) linear

console.log(palindromeTwo("taco cat")); //true
console.log(palindromeTwo("my gym")); //true
console.log(palindromeTwo("red rum, sir, is murder")); //true
console.log(palindromeTwo("rotator")); //true
console.log(palindromeTwo("racecar")); //true
console.log(palindromeTwo("not a palindrome")); //false

// Forma usando for of loop
function palindromeThree(str) {
    let notWordReg = /[\W_]/g;
    str = str.toLowerCase().replace(notWordReg, '');
    let length = str.length;
    for (let letter of str) {
      if (letter !== str[length - 1]) return false;
      length -= 1
    }
    return true;
}// complexidade: O(n) linear

console.log(palindromeThree("taco cat")); //true
console.log(palindromeThree("my gym")); //true
console.log(palindromeThree("red rum, sir, is murder")); //true
console.log(palindromeThree("rotator")); //true
console.log(palindromeThree("racecar")); //true
console.log(palindromeThree("not a palindrome")); //false

export {
    palindromeOne,
    palindromeTwo,
    palindromeThree,
}
// palindromos retirados do site https://examples.yourdictionary.com/palindrome-examples.html
