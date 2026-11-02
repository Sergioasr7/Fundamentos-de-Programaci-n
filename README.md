🚀 Fundamentos de Programación y Lógica - TypeScript
Este repositorio documenta mi proceso de aprendizaje y afianzamiento de la lógica de programación. A pesar de poseer cierta base en programación gracias a mi tecnicatura en desarrollo de aplicaciones y a materias como Lógica de Programación y Programación (vistas en mi carrera como Ingeniero Multimedia en la UNAD), decidí tomar el curso "Programación para Principiantes" de DevTalles.

Mi objetivo principal fue mejorar mi lógica, identificar malas prácticas y prepararme antes de dar el salto a un lenguaje robusto como Java. Elegí TypeScript (un superconjunto de JavaScript) para familiarizarme con los lenguajes fuertemente tipados.

Además del curso, complementé mi aprendizaje con el libro "Lógica de programación" (2ª ed.) de Trejos Buriticá, O. I. (2023). De allí reforcé la diferencia entre la lógica humana y la computacional, metodologías para transformar un problema real en un programa, el análisis E.P.S (Entrada, Proceso y Salida) y el diseño de algoritmos.

🧠 Conceptos Aprendidos
Variables y tipos de datos (number, string, boolean).

Estructuras de control: if, else if, else, switch.

Ciclos iterativos: for, while.

Manejo de arreglos (arrays), recorrido y la propiedad .length.

Manipulación de Strings: Obtención de longitud y acceso a caracteres específicos.

Filtrado y procesamiento de arreglos: Creación de funciones que reciben arreglos, evalúan sus elementos y retornan nuevos arreglos (uso de .push()).

Operadores matemáticos (incluyendo el módulo % para pares/impares).

Creación de funciones, parámetros y el uso de return.

Fundamentos de Programación Orientada a Objetos (POO).

Aplicación de principios de diseño: YAGNI, KISS, DRY.

📂 Ejercicios de Lógica Realizados (1 al 9)
En la carpeta de ejercicios se encuentran las soluciones a los 9 retos prácticos del curso:

Conversión de unidades: Función para convertir Libras a Kilogramos.

Conversión de unidades: Función para convertir Kilómetros a Millas.

Cálculo geométrico: Cálculo del área de un triángulo rectángulo.

Búsqueda en arreglos: Recorrido de un arreglo con ciclo for para encontrar el número mayor.

Lógica con módulo: Impresión en consola de números pares e impares utilizando el operador %.

Ciclos anidados: Generación de una tabla de multiplicar del 1 al 5 (filas y columnas).

Funciones y condicionales: Función max() que recibe 3 números y retorna el mayor.

Manipulación de Strings en arreglos: Función largestNameOfArray() que encuentra el nombre más largo en un arreglo.

Filtrado de arreglos: Función heroesThatStartsWith() que retorna un nuevo arreglo filtrando nombres según su letra inicial.

🎮 Proyecto Final: Juego del Ahorcado (Hangman)
Como cierre del curso, construí una versión web interactiva del clásico juego del ahorcado. Aunque mi enfoque profesional es el Backend con Java, este proyecto me permitió entender cómo la lógica de programación se conecta con una interfaz de usuario.

⚙️ ¿Cómo funciona la lógica? (React Hooks)
Manejo de Estado (useState): Se manejan 5 estados principales (word, hiddenWord, attempts, lose, won). La palabra oculta se inicializa con guiones bajos según la longitud de la palabra elegida.

Validación de letras (checkLetter): Al presionar una letra, se valida si existe en la palabra original. Si no existe, se suma un intento (máximo 9). Si existe, se convierte la palabra oculta en un arreglo, se reemplaza el guion por la letra y se vuelve a unir.

Condiciones de fin de juego (useEffect):

Derrota: Un efecto escucha los intentos; al llegar a 9, activa el estado lose.

Victoria: Otro efecto compara la palabra oculta (sin espacios) con la palabra original. Si son iguales, activa won.

🛠️ Tecnologías del Proyecto
React + TypeScript: Interfaz interactiva y tipado estricto.

Vite: Empaquetador y servidor de desarrollo.

Netlify: Para el despliegue del proyecto.

🔗 Ver Juego del Ahorcado Desplegado https://project-hanging-game.netlify.app/

<img width="1189" height="736" alt="image" src="https://github.com/user-attachments/assets/0ba8dc04-3e30-470b-bbc1-32cb3d220826" />



Repositorio creado como parte de mi preparación autodidacta antes de iniciar mi formación en Java y Spring Boot.

## 🛠️ Tecnologías
- TypeScript (Node.js)

## 🎓 Certificado

<img width="1600" height="1190" alt="image" src="https://github.com/user-attachments/assets/91343a9c-0280-431e-81c8-31b1754bdd3a" />
