// Ejercicio 1 //
let nombre = ""
if (nombre != "") {
    console.log("hola, " + nombre)
} else {
    console.log("hola, desconocido")
}
// Ejercicio 2
let numero = 7;

if (numero % 2 === 0) {
    console.log("El número " + numero + " es PAR");
} else {
    console.log("El número " + numero + " es IMPAR");
}

// Ejercicio 3 //
const clasif = 55

if (clasif >= 60) {
    console.log("aprobado")
} else {
    console.log("reprobado")
}

// ejercicio 4//
const dia = 2;


switch (dia) {
    case 1: "lunes";
        console.log("Hoy es lunes");
        break;
    case 2: "martes";
        console.log("Hoy es martes");
        break;
    case 3: "miercoles"
        console.log("Hoy es miercoles");
        break;
    case 4: "jueves"
        console.log("Hoy es jueves");
        break;
    case 5: "viernes"
        console.log("Hoy es viernes");
        break;
}
// Ejercicio 5 //

let edad = 16
if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad")
}

// Ejercicio 6 //

let temperatura = 15

if (temperatura < 10) {
    console.log("frio")
} else if (temperatura > 25) {
    console.log("caluroso")
} else if (temperatura >= 10 && temperatura <= 25) {
    console.log("templado")
}

// Ejercicio 7 //

let num = -23

if (num > 0) {
    console.log("positivo")
} else if (num < 0) {
    console.log("negativo")
} else if (num = 0) {
    console.log("cero")
}

// Ejercicio 8 //


let monto = 150

if (monto >= 200) {
    let descuento = monto * 0.2
    console.log("su descuento es de $ " + descuento)
    console.log("Total a pagar $ " + (monto - descuento))
} else if (monto >= 100) {
    let descuento = monto * 0.1
    console.log("su descuento es de $ " + descuento)
    console.log("Total a pagar $ " + (monto - descuento))

}
// Ejercicio 9 //

const lado1 = 8
const lado2 = 8
const lado3 = 8

if (lado1 === lado2 && lado2 === lado3) {
    console.log("Equilátero")
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log("Isósceles")
} else {
    console.log("Escaleno")
}

// ejercicio 10 //

let contraseña = "holaholaaaa"

if (contraseña.length >= 8) {
    console.log("contraseña valida")
} else if (contraseña.length < 8) {
    console.log("contraseña muy corta")
}


// Ejercicio 11 //

let mes = 4

switch (mes) {
    case 12:
    case 1:
    case 2:
        console.log("verano")
        break;
    case 3:
    case 4:
    case 5:
        console.log("otoño")
        break;
    case 6:
    case 7:
    case 8:
        console.log("invierno")
        break;
    case 9:
    case 10:
    case 11:
        console.log("primavera")
        break;
}

// Ejercicio 12 //

let puntos = 105

if (puntos >= 0 && puntos <= 50) {
    console.log("Novato")
} else if (puntos >= 51 && puntos <= 100) {
    console.log("Intermedio")
} else if (puntos > 100) {
    console.log("Experto")
}

// Ejercicio 13 //

let operación = "*"
const numero1 = 2
const numero2 = 4

switch (operación) {
    case "+":
        console.log(numero1 + numero2);
        break;
    case "-":
        console.log(numero1 - numero2)
        break;
    case "*":
        console.log(numero1 * numero2)
        break;
    case "/":
        console.log(numero1 / numero2)
        break;
}

// Ejercicio 14 //

let email = "peñarol@gmail"

if (email.includes("@")) {
    console.log("válido")
}else {
    console.log("inválido")

}

// Ejercicio 15 //

let opcion = 3

switch (opcion) {
    case 1:
        console.log("iniciar");
        break;
    case 2:
        console.log("configurar")
        break;
    case 3:
        console.log("salir")
        break;
}