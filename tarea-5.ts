//5- Dado el siguiente arreglo: let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5 ];
//Haga una impresión en consola así:

//1 es un número impar
//2 es un número par
//3 es un número impar
//6 es un número par 

export let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5 ];

for (let i=0; i< numbers.length; i++){
    if (numbers[i] % 2) {
        console.log("es impar;",numbers[i])
    } else {
        console.log("es par;",numbers[i])
    }

}
