

export function heroesThatStartsWith(nameList: string[], letter: string ) {
  let newNameList: string[] = [];
  letter = letter.toUpperCase();
    

  for (let i = 0; i < nameList.length; i++){
    if ( nameList[i].startsWith(letter) ){
      newNameList.push(nameList[i] )
    }
  }
  return newNameList
}



let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel', 'Blade'];


let heroesStartWithS = heroesThatStartsWith(heroes, 'b');
console.log(heroesStartWithS);