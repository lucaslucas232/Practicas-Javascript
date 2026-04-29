// Definición de funciones acá

// ejercicio 1 //

function saludar(nombre) {
    return "Hola, " + nombre + "!"
    console.log(saludar)
}


// ejercicio 2 //

function calculadora (numero1, numero2, operacion) {
    if(operacion === "+")
        return numero1 + numero2;
    else if(operacion === "-")
        return numero1 - numero2;
    else if(operacion === "/")
        return numero1 / numero2;
    else if(operacion === "*")
        return numero1 * numero2; 
    console.log(calculadora)

}

// ejercicio 3 //
let areaRectangulo =
function areaRectangulo (numero1, numero2) {
    return numero1 * numero2
    console.log(areaRectangulo)
}
// ejercicio 4 //

const esPar = (numero) => numero % 2 === 0 ? "es par" : "es impar";

// ejercicio 5 //

const celsiusAFahrenheit = (C) => (C * 9/5) + 32;


// ejercicio 6 // 
function calificarNota(nota) {
    if (nota >= 90) {
        return "A";
    } else if (nota >= 80) {
        return "B";
    } else if (nota >= 70) {
        return "C";
    } else {
        return "F";
    }
}


// ejercicio 7 //

function sumarArray(numeros) {
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  return suma;
}

console.log(sumarArray([1, 2, 3, 4])); 

// ejercicio 8 //

function sumarArray(numeros) {
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  return suma;
}

console.log(sumarArray([1, 2, 3, 4])); 
