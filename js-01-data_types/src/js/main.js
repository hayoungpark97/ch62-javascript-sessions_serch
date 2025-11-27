console.log ("Session JS01 - Data Types");

const nombre = "Juan Pérez";
let edad = 28;
const nacionalidad = "Mexicana";

console.log(`Hola, mi nombre es ${nombre}, tengo ${edad} años y soy de nacionalidad ${nacionalidad}`);

const gravityEarth = 9.81; // m/s²

console.log(typeof gravityEarth); // number

console.log( typeof 3.141592); // number
console.log( typeof (3*3)); // number
console.log(typeof ""); // string
console.log( typeof " "); // string
console.log( 3*"pitufo trabajador"); // NaN
console.log( typeof (3 * "pitufo trabajador")); // number
console.log( typeof (NaN)); // number
console.log( typeof +Infinity); // number
console.log( typeof (3 + "viernes tematico")); // string
console.log( typeof ("3viernes tematico")); // string
console.log( 4 / 0); // Infinity
console.log( typeof (4 / 0)); // number
console.log( "4" * "2"); // number
console.log( typeof ("4" * "2")); // number
console.log( typeof (8)); // number
console.log( typeof "4" * "2"); // number
console.log( 'string' * "2"); // NaN

// --- Precisión y Límites ---
// Cuidado: JS usa punto flotante (IEEE 754), lo que causa errores en decimales.
console.log("--- Precisión ---");
console.log(`0.1 + 0.2 = ${0.1 + 0.2}`); // 0.30000000000000004 (Ojo en entrevistas)

console.log("--- Límites ---");
console.log(`Entero seguro máximo: ${Number.MAX_SAFE_INTEGER}`); // 9007199254740991
console.log( `MAX_SAFE_INTEGER + 1: ${Number.MAX_SAFE_INTEGER + 1 }`); // 9007199254740992
console.log( `MAX_SAFE_INTEGER + 2: ${Number.MAX_SAFE_INTEGER + 2 }`); // 9007199254740993
console.log( `MAX_SAFE_INTEGER + 3: ${Number.MAX_SAFE_INTEGER + 3 }`); // 9007199254740994
console.log( `MAX_SAFE_INTEGER + 4: ${Number.MAX_SAFE_INTEGER + 4 }`); // 9007199254740995
console.log( `MAX_SAFE_INTEGER + 5: ${Number.MAX_SAFE_INTEGER + 5 }`); // 9007199254740996

/*
 Tipos de datos BigInt
 Sirve para representar valores numéricos enteros, de los que el
 tipo number no pueda representar o no es seguro.

 Las operaciones con un bigInt se debe hacer con otro bigInt
*/
const myBigInt = 9007199254740991n;
console.log( typeof myBigInt ); // bigint
console.log( `Resultado de myBigInt + 1n: ${ myBigInt + 1n }`); // 9007199254740992
console.log( `Resultado de myBigInt + 2n: ${ myBigInt + 2n }`); // 9007199254740993
console.log( `Resultado de myBigInt + 3n: ${ myBigInt + 3n }`); // 9007199254740994
console.log( `Resultado de myBigInt + 4n: ${ myBigInt + 4n }`); // 9007199254740995
console.log( `Resultado de myBigInt + 5n: ${ myBigInt + 5n }`); // 9007199254740996
console.log( `Resultado de myBigInt + 6n: ${ myBigInt + 6n }`); // 9007199254740997
console.log( typeof (myBigInt + 6n) ); // bigint

let currentTask;
console.log(`Valor de currentTask: ${currentTask}`); // undefined

currentTask = "Iniciar sesión";
console.log(`Valor de currentTask: ${currentTask}`); // Iniciar sesión

currentTask = null;
console.log(`Valor de currentTask: ${currentTask}`); // null

/* ================================================================
   5. CONVERSIÓN DE DATOS (TYPE CASTING) 
   ================================================================
   Transformar un tipo de dato en otro.
*/
// --- 5.1 Conversión Implícita (Coerción) ---
// JS intenta "ayudarte" convirtiendo tipos automáticamente.
console.log("---Implícita ---");
console.log("5" + 2); // "52" (number 2 se convierte a string)
console.log(5 - "2"); // 3 (Matematica, convierte string a number)
console.log("5" * "2"); // 10

