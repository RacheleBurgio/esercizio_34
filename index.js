//Quali sono i tipi primitivi principali in TypeScript?
// stringa
// booleani
// numeri
// undefined
// null
// any
//Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
var myName = 'Rachele';
var myAge = 22;
var myStudying = true;
//3) Tipizza il parametro della seguente funzione: const greet = (name) => {  return "Ciao " + name }
var greet = function (name) {
    return 'Ciao ' + name;
};
//4) Specifica il tipo di ritorno della seguente funzione: const sum = (a: number, b: number) => {  return a + b }
var sum = function (a, b) {
    return a + b;
};
// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
var calculateIVA = function (price) {
    var IVA = 0.22;
    return price + price * IVA;
};
// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
var concatString = function (str1, str2) {
    var strings = str1 + str2;
    return strings.length;
};
// 7) Cos'è un Type Union e come si scrive?
//è una funzionalità che permette di definire una variabile accettando una combinazione di tipi
var typeUnion;
// 8) Crea una variabile che possa contenere un numero, null o undefined.
var nullUndefined;
// 10) Tipizza il seguente array di numeri nei due modi possibili: const numbers = [1, 2, 3]
var numbers1 = [1, 2, 3];
var numbers2 = [1, 2, 3];
// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
var tupla = [
    'massimo',
    'giovanni',
    'tommaso',
    50,
    20,
];
var studenti = [
    { nome: 'Massimo', voto: 4 },
    { nome: 'Giovanni', voto: 4 },
    { nome: 'Tommaso', voto: 4 },
];
// 17) Crea un oggetto che implementi l'interfaccia Auto.
var myAuto = {
    marca: 'Tesla',
    modello: 'Model 3',
    anno: 2022,
    numeroDiPorte: 4,
    tipoCarburante: 'Elettrico',
};
