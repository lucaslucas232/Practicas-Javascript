// Ejercicio 1 //
let suma = 0
for (suma=1; suma<=55; suma++) {
    console.log("Suma total: ", suma);
}

// Ejercicio 2 //
let contador = 11

while(contador = contador - 1) {
    console.log(contador)
}

// Ejercicio 3 //
const numeros = [4, 17, 3, 25, 8, 11];
let mayor = numeros[0];
for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
        mayor = numeros[i];
    }
}
console.log("El número mayor es: ", mayor); // Resultado esperado: 25

// Ejercicio 4 //

const palabras = ["sol", "montaña", "mar", "elefante", "río", "cascada"];
const palabrasLargas = [];

for (let i = 0; i < palabras.length; i++) {
    if (palabras[i].length > 5) { 
        palabrasLargas.push(palabras[i]);
    }
}

console.log("Palabras con más de 5 letras:", palabrasLargas);

// ejercicio 5 //

const numero = 7; 
let multiplicador = 1;
let resultado = 0
while (multiplicador <= 10) { 
    resultado = (numero * multiplicador,multiplicador++)
  console.log(numero + "x" + multiplicador + "=" + resultado );
}

// Ejercicio 6 //

