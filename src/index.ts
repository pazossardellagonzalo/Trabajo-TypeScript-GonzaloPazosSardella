// Ejercicio 1

let a = Math.floor(Math.random() * (100));    // Declaramos $a a una funcion que nos permite generar numeros desde el 0 al 100 
console.log("Numeros primos\n")

if(a%2==0) {    // Hacemos un if para comprobar si el numero es primo o no
console.log(`El número ${a} no es primo`);
}
else {
console.log(`El número ${a} es primo`);
}     

//Separación entre ejercicios
console.log("\n------------------------")

// Ejercicio 2

console.log("\nOrdenar de mayor a menor una lista\n")

const numeros = [14, 4, 8 ,1]; // Creamos una lista con numeros
console.log(`La lista es: ${numeros}\n`)

console.log("Ordenada de mayor a menor:\n")
console.log(numeros.sort(function(a, b){return a - b})); // Sort nos permite ordenar, creando la función podemos ordenadolo de negativo a 0 a positivo
console.log("\nOrdenada de menor a mayor:\n")
console.log(numeros.sort(function(a, b){return b - a}));


console.log("\n------------------------\n")

// Ejercicio 3


console.log("Contar palabras en frase\n")

var frase = `¡Oh, memoria, enemiga mortal de mi descanso!”. 
             La virtud más es perseguida de los malos que amada de los buenos.” 
             La ingratitud es hija de la soberbia.” 
             La razón de la sinrazón que a mi razón se hace, 
             de tal manera mi razón enflaquece, que con razón me quejo de la vuestra fermosura.`;

function wordCount(text = '') { // Cuenta cada palabra
  return text.split(/\S+/).length - 1; // A cada espacio le resta ese espacio, para que estos no sean contados
};

console.log(`Texto: ${frase}\n`);
console.log(`La cantidad de palabras son: ${wordCount(frase)}`);