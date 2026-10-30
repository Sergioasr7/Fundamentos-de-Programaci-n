

let heroes = ['Naruto', 'Wolverine', 'Goku', 'Profesor Charles Xavier']; 

let villains = ['Joker', 'Thanos','Frieza','Orochimaru','Black goku ssj rosé'];


function largestNameOfArray( names:string[]) {
 let longestName = names[0]
 
    for (let i= 0; i < names.length; i++){

        if (names[i].length > longestName.length){
            longestName = names[i]
        }
      
    }
     return longestName
        
    }



let hero = largestNameOfArray( heroes );

let villain = largestNameOfArray( villains );


console.log( hero );

console.log( villain);
