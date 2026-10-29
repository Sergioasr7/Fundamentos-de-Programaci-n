

export let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5, 70,85,25,40];

for (let i=0; i< numbers.length; i++){
    if (numbers[i] % 2) {
        console.log("es impar;",numbers[i])
    } else {
        console.log("es par;",numbers[i])
    }

}