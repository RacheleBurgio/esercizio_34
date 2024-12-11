//Quali sono i tipi primitivi principali in TypeScript?

// stringa
// booleani
// numeri
// undefined
// null
// any

//Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.

const myName: string = 'Rachele'
const myAge: number = 22
const myStudying: boolean = true

//3) Tipizza il parametro della seguente funzione: const greet = (name) => {  return "Ciao " + name }

const greet = (name: string): string => {
  return 'Ciao ' + name
}

//4) Specifica il tipo di ritorno della seguente funzione: const sum = (a: number, b: number) => {  return a + b }

const sum = (a: number, b: number): number => {
  return a + b
}

// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.

const calculateIVA = (price: number): number => {
  const IVA = 0.22
  return price + price * IVA
}

// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.

const concatString = (str1: string, str2: string): number => {
  const strings = str1 + str2
  return strings.length
}

// 7) Cos'è un Type Union e come si scrive?

//è una funzionalità che permette di definire una variabile accettando una combinazione di tipi

let typeUnion: string | number

// 8) Crea una variabile che possa contenere un numero, null o undefined.

let nullUndefined: number | null | undefined

// 9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali

type settimana =
  | 'Lunedì'
  | 'martedì'
  | 'mercoledì'
  | 'giovedì'
  | 'venerdì'
  | 'sabato'
  | 'domenica'

// 10) Tipizza il seguente array di numeri nei due modi possibili: const numbers = [1, 2, 3]

const numbers1: number[] = [1, 2, 3]

const numbers2: Array<number> = [1, 2, 3]

// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.

const tupla: [string, string, string, number, number] = [
  'massimo',
  'giovanni',
  'tommaso',
  50,
  20,
]

// 12) Qual è la differenza tra type e interface?

// un'interfaccia è un modello, uno "schema" che definisce proprietà e metodi di un oggetto servono soprattutto per indicare la forma degli OGGETTI, mentre i type si utilizzano più per le unioni di tipi PRIMITIVI

// 13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".

interface Person {
  firstname: string
  lastname: string
  age: number
}

// 14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.

interface User {
  email: string
  telephone?: number
}

// 15) Crea un array tipizzato di oggetti "Studente" con nome e voto.

interface Studente {
  nome: string
  voto: number
}

const studenti: Studente[] = [
  { nome: 'Massimo', voto: 4 },
  { nome: 'Giovanni', voto: 4 },
  { nome: 'Tommaso', voto: 4 },
]

// 16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".

interface Veicolo {
  marca: string
  modello: string
  anno: number
}

interface Auto extends Veicolo {
  numeroDiPorte: number
  tipoCarburante: string
}

// 17) Crea un oggetto che implementi l'interfaccia Auto.

const myAuto: Auto = {
  marca: 'Tesla',
  modello: 'Model 3',
  anno: 2022,
  numeroDiPorte: 4,
  tipoCarburante: 'Elettrico',
}

// 18) Cosa sono i Generics in TypeScript?

// un GENERIC è un TIPO di dato passato come PARAMETRO per un'interfaccia  il suo scopo è rendere più GENERICA, RIUTILIZZABILE un'INTERFACCIA

// 19) È possibile avere più tipi generici in un'interfaccia?

// sì

// 20) Crea un'interfaccia generica per una risposta API.

interface RispostaApi<data> {
  success: boolean
  message: string
  data: data
}
