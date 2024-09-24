// estructurasDeControl.js

// Ejercicio 1: Condicionales if-else
// Instrucción: Escribe una función que reciba un número y verifique si es par o impar.
// Imprime "El número es par" o "El número es impar" según corresponda.
function verificarParidad(numero) {
    // Tu código aquí
    if (numero % 2 === 0) {
        console.log("El numero es par")
    } else {
        console.log("El numero es impar")
    }
}

// Ejercicio 2: Condicionales anidados
// Instrucción: Escribe una función que reciba una edad y determine si la persona es:
// "Menor de edad" (menor a 18), "Adulto" (entre 18 y 65), o "Adulto mayor" (mayor a 65).
function clasificarEdad(edad) {
    // Tu código aquí
    let edad = 17
    if (edad > 17) {
        console.log("Adulto")
    } else if (edad > 64) {
        console.log("Adulto mayor");
    } else {
        console.log("Menor de edad");
    }
}

// Ejercicio 3: Bucles while
// Instrucción: Crea una función que reciba un número entero positivo y utilice un bucle `while` para imprimir todos los números desde ese número hasta 0.
function cuentaRegresiva(numero) {
    // Tu código aquí
    if (numero > 0) {
        while (numero >= 0) {
            console.log(numero)
            numero--
        }
    }
}

// Ejercicio 4: Bucles do-while
// Instrucción: Escribe una función que imprima "Estoy aprendiendo JavaScript" 5 veces utilizando un bucle `do-while`.
function repetirMensaje() {
    // Tu código aquí
    let x = 0
    do {
        console.log("Estoy aprendiendo JavaScript")
    } while (x < 6)
}
// Ejercicio 5: Bucle for
// Instrucción: Escribe una función que reciba un número entero positivo y utilice un bucle `for` para imprimir todos los números pares entre 0 y ese número.
function imprimirPares(numero) {
    // Tu código aquí
    for (let i = 0; i <= numero; i++) {
        if (i % 2 === 0) {
            console.log(i)
        }
    }
}

// Ejercicio 6: Uso de break
// Instrucción: Escribe una función que recorra los números del 1 al 10, pero detén el bucle cuando el número sea igual a 6.
function detenerEnSeis() {
    // Tu código aquí
    let i = 0
    while (i < 11) {
        if (i === 6) {
            break
        }
        i++
    }
}

// Ejercicio 7: Uso de continue
// Instrucción: Crea una función que recorra los números del 1 al 10, pero que se salte el número 5 usando `continue`.
function saltarCinco() {
    // Tu código aquí
    let i = 0
    while (i < 11) {
        i++
        if (i === 5) {
            continue
        }
    }
}

// Ejercicio 8: Switch básico
// Instrucción: Escribe una función que reciba un número del 1 al 7 y devuelva el día de la semana correspondiente (1 es "Lunes", 2 es "Martes", ..., 7 es "Domingo"). Usa la estructura `switch`.
function obtenerDiaSemana(dia) {
    // Tu código aquí
    let dia = 6
    switch (dia) {
        case 1:
            console.log("Lunes")
            break
        case 2:
            console.log("Martes")
            break
        case 3:
            console.log("Miercoles")
            break
        case 4:
            console.log("Jueves")
            break
        case 5:
            console.log("Viernes")
            break
        case 6:
            console.log("Sabado")
            break
        case 7:
            console.log("Domingo")
            break
        default:
            console.log("solo existen 7 dias")
    }

}

// Ejercicio 9: Switch con múltiples casos
// Instrucción: Escribe una función que reciba un carácter y devuelva si es una vocal. Utiliza un `switch` y agrupa los casos para las vocales (a, e, i, o, u).
function esVocal(letra) {
    // Tu código aquí
    switch (letra) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            console.log("es vocal")
            break
        default:
            console.log("no es vocal")
    }
}

// Ejercicio 10: Condicionales complejos con operadores lógicos
// Instrucción: Escribe una función que reciba tres números y determine si todos son positivos, al menos uno es negativo, o todos son negativos. Usa operadores lógicos (`&&`, `||`).
function evaluarNumeros(a, b, c) {
    // Tu código aquí
    if (a > 0 && b > 0 && c > 0) {
        console.log("todos son positivos")
    } else if ((a < 0 || b < 0 || c < 0) && !(a < 0 && b < 0 && c < 0)) {
        console.log("al menos uno es negativo")
    } else if (a < 0 && b < 0 && c < 0) {
        console.log("todos son negativos")
    }
}

// Exportar todas las funciones
export {
    verificarParidad,
    clasificarEdad,
    cuentaRegresiva,
    repetirMensaje,
    imprimirPares,
    detenerEnSeis,
    saltarCinco,
    obtenerDiaSemana,
    esVocal,
    evaluarNumeros,
};
