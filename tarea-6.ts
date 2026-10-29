



for (let fila = 1; fila <= 5; fila++) {
 let filaTexto = "";

  for (let columna = 1; columna <= 5; columna++) {
       filaTexto= filaTexto + (fila * columna) + " "
  }
  
  console.log(filaTexto);
}