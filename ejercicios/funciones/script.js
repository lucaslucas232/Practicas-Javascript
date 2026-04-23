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
let numero = 4;

if (numero % 2 === 0) {
    console.log("El número " + numero + " es PAR");
} else {
    console.log("El número " + numero + " es IMPAR");
}