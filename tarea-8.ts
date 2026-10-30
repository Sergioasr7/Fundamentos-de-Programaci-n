

let heroes = ['Naruto', 'Wolverine', 'Goku', 'Profesor Charles Xavier']; 

let villains = ['Joker', 'Thanos','Frieza','Orochimaru','Black goku ssj rosé'];


function largestNameOfArray( nombres:string[]) {
 let heroMasLargo = nombres[0]
 
    for (let i= 0; i < nombres.length; i++){

        if (nombres[i].length > heroMasLargo.length){
            heroMasLargo = nombres[i]
        }
      
    }
     return heroMasLargo
        
    }



let hero = largestNameOfArray( heroes );

let villain = largestNameOfArray( villains );


console.log( hero );

console.log( villain);