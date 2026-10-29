
export let numbers = [2, 6, 8, 4, 18, 7, 10, 3, 5 ]; 

let min = numbers[0];

for (let i = 0; i < numbers.length; i++ ) {
    if (numbers[i]< min) {
        min=numbers[i]
    }

}

console.log("El numero menor es:",min); 