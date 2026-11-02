
let words: string[] = [
    'COMPUTADORA',
    'MELOCOTON',
    'VIOLETA',
    'ORQUIDEA',
    'ZANAHORIA',
    'CERVEZA',
    'PALINDROMO'
];

export function getRandomWord() {

    const randomIndex =  Math.floor( Math.random() * words.length );
    return words[randomIndex];
}