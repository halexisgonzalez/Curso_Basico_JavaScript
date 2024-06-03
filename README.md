# Curso_Basico_JavaScript
Curso Básico de JavaScript - Diego De Granda  Software Engineering Manager en Platzi

## Introducción a JavaScript
### ¿Qué es JavaScript y para qué sirve?

Lenguaje interpretado, orientado a objetos, débilmente tipado y dinámico.

**Debilmente Tipado:**
Se pueden hacer operaciones entre tipos distintos de datos (enteros con strings, booleanos con enteros, etc).

4 + "7"; // 47 (numero)

4 * "7"; // 28 (numero)

2 + true; // 3 (numero)

false - 3; // -3 (numero)


**Dinámico**

Js Corre directamente en la etapa de Runetime sin una etapa de compilación previa. Esto permite probar nuestro código inmediatamente; pero también es lo que hace que los errores se muestren hasta que se ejecuta el programa.


**Forwards**

Ser compatible con versiones futuras significa incluir una adición al lenguaje en un programa no causaría que se rompa si se ejecuta en un motor JS anterior. JS no es compatible con versiones futuras.

**JS es Backwards Compatible**

La compatibilidad con versiones anteriores significa que cuando se acepta como JS válido, no habrá un cambio futuro que haga que el código deje de funcionar.

**JS Compilador**

Se utilza BABEL para realizar compatibilidad entre la nueva versión de JS y la antigua.

### ¿Por qué JavaScript?

JavaScript tiene una comunidad enorme de desarrolladores que pueden ayudar a generar diferentes cosas.

Existen muchos frameworks y librerías construidas en JavaScript que ayudan a hacer proyectos de forma mucho mas rápida, eficiente y robusta para **WEB** (Angular, View, React, entre otros).

Se puede utilizar JavaScript con un framework que se llama **React Native** para poder construir aplicaciones nativas como Android y IOS.

Se pueden construir aplicaciones de escritorio con JavaScript, usando un framework llamado **Electron**, puede correr en Mac o Windows.

También en la parte del **Back-end** o **IOT** (Internet Od Things) se puede utilizar Js. Esto es posible con un Framework llamado **NodeJS**, el cual es un entorno de ejecución de JavaScript que corre directamente en el Back-end.

### Elementos de un Lenguaje de Programación: Variables, Funciones y Sintaxis

**Valores Primitivos** 

Son los valores básicos que se utilizan para poder generar códigos.

* **Número:** valor sólo de tipo numérico, ejem: 1 2 3 4, etc.
* **String:** texto, se utiliza entre comillas dobles. “Haciendo esto”, “Diego Hernández”
* **Boolean o Booleano:** son valores creados por George Boolean dentro de lenguajes de programación para poder validar cosas y/o desiciones, por ello se utilizan: true (1) o false (0).
* **Empty values:** ***null*** o ***undefined***, se les conoce como valores “placeholders”, pero son valores reservados para un tipo de valor que queda faltante en memoria. También pueden ser tomados como valores de errores.

**Valores No Primitivos o Valores Tipo Objetos**

* **Array:** se genera ocupando *corchetes*, los cuales dentro ocupan valores primitivos, ejem: [1,2,3] convirtiéndolos en valores tipo objeto.
* **Valor tipo Objeto:** se generan con *llaves*, los cuales dentro ocupan una data que se transforma en objeto, ejem de sintaxis: { nombre: “Diego”}.

### ¿Qué es una variable?

Dentro de JavaScript tenemos tres formas de declarar una variable las cuales son: var, const y let.

**var:** 

Era la forma en que se declaraban las variables hasta ECMAScript 5. Casi ya no se usa porque es de forma global y tiene las siguientes características:

- Se puede reinicializar/reasignar: osea todas las variables se inicializan, 
por ejemplo: 

`var pokemonType = ‘electric’` entonces reinicializar es: `var pokemonType = ‘grass’` osea la misma variable con diferentes datos el último dato predomina. 

- Su alcance es función global: osea inicializamos la variable, pero la podemos llamar desde cualquier bloque (una llave abierta y una cerrada {}) pero hay que tener mucho cuidado con ello ya que puede haber peligro, no es recomendable usar ***var***.


*const y let es la forma en que se declaran las variables a partir de ECMAScript 6*

**const:** 

Sirve para declarar variables que nunca van a ser modificadas

- No se puede reinicilizar: es una const única no puede haber otra inicializada con el mismo nombre. 

`const pokemonType = ‘electric’` no puede haber: `const pokemonType = ‘grass’`

- No se pude re asignar: una vez que la hayamos inicializado no la podemos reasignar solo con su nombre, 

`const pokemonType = ‘electric’` no puede ejecutarse: `pokemonType = ‘grass’`

**let:** 

Son variables que pueden ser modificadas, se pueden cambiar:

- No se puede reinicilizar: es una const única no puede haber otra inicializada con el mismo nombre. 

`let pokemonType = ‘electric’` no puede haber: `let pokemonType = ‘grass’`

- Se puede reasignar: Osea la variable ya inicializada le reasignamos otro valor por ejemplo: inicializamos la variable: 

`let pokemonType = ‘electric’` ahora la reasignamos `pokemonType = ‘grass’`

- Su contexto es de bloque: Solo funciona dentro de un bloque {}, fuera de ello no.

### ¿Qué son las funciones en JavaScript?

Las funciones son las tareas que va a llevar a cabo el navegador. 

Existen 2 tipos de funciones 

* 1) Declarativas 
* 2) De expresión 

Ambas pueden llevar parámetros, que son los datos que necesitan para ejecutarse. Cada parámetro va separado por una coma. Cada instrucción que tenga la función debe terminar con ; . Si queremos que una función nos dé un numero o dato tenemos que usar la siguiente sintaxis:

`return` El dato que queremos que nos dé;


- Las funciones declarativas tienen la siguiente sintaxis:
`function Nombre_de_la_funcion (Parámetros_de_la_funcion) {Instrucciones}`


Un ejemplo de una función puede ser una suma:
`function suma (a,b) {return a+b;}`

- Las funciones de expresión son aquellas que guardamos en una variable, por lo tanto, no es necesario nombrarlas y tienen la siguiente sintaxis:

´var Nombre_de_la_funcion = function(Parametros){Instrucciones}´

Un ejemplo de una función de expresión sería:

`var suma = function(a,b){return a+b;}`


**Para ejecutar las funciones debemos usar la siguiente sintaxis**

`Nombre_de_la_funcion(Parametros);`

*Si la función no tiene ningún parámetro, únicamente se escribe:*

`Nombre_de_la_funcion();`

### ¿Qué es una función declarativa y una expresiva?

Cuando hablamos de funciones en JavaScript, tenemos dos tipos de funciones: Funciones Declarativas (function declaration / function statement) y Expresiones de función (function expression / funciones anónimas).

**Funciones Declarativas:**

En las funciones declarativas, utilizamos la palabra reservada function al inicio para poder declarar la función:

`
function saludar(nombre) {
	console.log(`Hola ${nombre}`);
}

saludar('Diego');
`

**Expresión de función:**

En la expresión de función, la declaración se inicia con la palabra reservada var, donde se generará una variable que guardará una función anónima.

`
var nombre = function(nombre){
    console.log(`Hola ${nombre}`)
}

nombre(‘Diego’);
`

En la expresión de función, la función podría o no llevar nombre, aunque es más común que se hagan anónimas.

***Diferencias***

A las funciones declarativas se les aplica hoisting, y a la expresión de función, no. Ya que el hoisting solo se aplica en las palabras reservadas var y function.

Lo que quiere decir que con las funciones declarativas, podemos mandar llamar la función antes de que ésta sea declarada, y con la expresión de función, no, tendríamos que declararla primero, y después mandarla llamar.

## Bases de JavaScript
### Scope

* **Global**

Ej. Universo, seria como el todo, las variables son accesibles desde cualquier parte del código. 

* **Local**

Ej. Cada Planeta, un mundo distinto, las variables son accesibles en ese mundo, no es visible para los demás mundos.

*Lo que es global se puede acceder desde cualquier parte de tu código, y lo pueden acceder cada mundo, lo que es local solo lo puede acceder cada mundo.*

### Hoisting

El Hoisting es un proceso del compilador de JavaScript, que consiste en que la declaracion de las variables y las funciones son llevadas al inicio del codigo, sin importar su posicion, para su procesamiento, sin embargo, la inicializacion de las variables no es llevada al inicio del codigo para su compilacion, sino solo su declaracion, lo cual suele dar espacio a errores cuando se declara una variable sin inicializarla y se procesa en el codigo antes de haber llegado a su inicializacion, lo cual nos suele dar una variable con valor undefined, ya que la variable sí fue almacenada en memoria, pero no se le asigno un valor hasta despues de su ejecución.

```
saludo();
         
function saludo() {
    console.log("Hola" + nombre);
}

var nombre = "Aaron";
```
El output de este codigo seria el siguiente:
`Hola undefined`

Debido a que como lo hemos dicho, la variable se tomo en cuenta y se le asigno memoria, sin embargo, el compilador no la inicializo y se le dio el valor de undefined, y con ese valor se ingreso a la funcion, y ya despues de correr la funcion se le asigno el valor.

Este comportamiendo se puede entender facilmente si se comprenden estos dos puntos esenciales:

* Las funciones siempre se mueven arriba del scope. Por lo tanto, podemos elegir donde declararlas y usarlas.

* La declaración de las variables se mueven arriba del scope, pero no la asignación. Antes de usar una variable, habrá que crearla y asignarla.

En base al segundo punto, fue por eso que se cometio el error de usar la variable antes de inicializarla, pues sin problema el compilador le asigna memoria, pero no el valor hasta despues.

Basicamente por pasos, lo que hizo el compilador fue esto:

Tenemos el codigo asi:

```
saludo();

function saludo() {
    console.log("Hola" + nombre);
}

var nombre = "Aaron";
```

1. El compilador toma las funciones y variables y las "sube" en el codigo, sin inicializar variables:

```
var nombre;

function saludo() {
    console.log(`"Hola " + nombre);
}

saludo();

var nombre = "Aaron";
```

2. Le asigna memoria a la variable y le da el valor de undefined al suceder la asignacion de memoria

```
var nombre = undefined;

function saludo() {
    console.log("Hola " + nombre);
}

saludo();

nombre = "Aaron";
```
Y como hemos visto, la variable se asigna como undefined y posteriormente su utiliza al llegar a la linea:
`saludos()`
pues ahi lo que hace es ejecutar la funcion que ya fue procesada, pero con un valor de la variable que aun no se le asigno, quedando como ***undefined***.

3. Despues de correr la funcion, le asigna el valor correcto a la variable ya declarada:

```
var nombre = "Aaron";

function saludo() {
    console.log("Hola " + nombre);
}

saludo();
```
Pero ya es demasiado tarde, pues la funcion ya fue ejecutada.

Es por eso que se tiene como buena practica declarar e inicializar tanto variables como funciones al inicio de nuestro programa, sin importar donde sean utilizadas, pues de esta manera se evita usarlas antes de ser inicializadas.

Debemos saber que el hoisting solo sucede con las palabras claves var y function, por lo tanto esto nos dice que solo se da en las versiones de ECMAScript 5 o Inferiores, ya que en la version 6 y superiores se permite la declaracion de variables con let y const, que son dos nuevas variables que no activan hoisting.

### Coerción

La **coerción** consiste en transformar de un tipo de dato a otro de una variable. Existen dos tipos de coerción: implícita y explícita.

**Qué es la coerción implícita**

La coerción implícita consiste en la transformación de tipos mediante la ayuda de JavaScript. Esto ocurre en operaciones de diferentes tipos, ya que es un lenguaje débil y dinámicamente tipado.

Al momento de compilar el código, el motor de JavaScript, si encuentra alguna incoherencia (una suma de un número con un string), el motor lo interpreta a su manera y arroja un valor que puede ser erróneo.

Algunos de los ejemplos de coerción implícita son los siguientes:
```
4 + "7" // 47
4 * "7" // 28
2 + true // 3
false - 3 // -3
!3 // false
```

Para evitar esto realiza la coerción explícita para manejar tipos de datos iguales antes de realizar cualquier operación.

*Qué es la coerción explícita*

La coerción explícita es la transformación de tipos de datos que controlamos el resultado. Para realizar estas transformaciones utiliza las funciones *Number(), String() y Boolean(),* para convertir a tipo número, string y lógico, respectivamente.

```
Number("47") // 47
String(51) // "51"
Boolean(1) // true
```

Se puede utilizar la palabra reservada *typeof* para comprobar el tipo de dato transformado.

```
Number("47") // 'number'
String(51) // 'string'
Boolean(1) // 'boolean'
```

### Valores: Truthy y Falsy

Los valores truthy y falsy son valores verdaderos y falsos cuando se realiza una coerción de cualquier tipo a booleano, respectivamente. Esto es importante para manejar condicionales, ya que una estructura condicional evalúa si un valor es verdadero o falso en un contexto booleano.

*Qué son los valores falsy*

Un valor falsy es aquel que es falso en un contexto booleano, estos son: 0, "" (string vacío), false, NaN, undefined o null.

```
// Coersión explícita
Boolean(0) // false
Boolean("") // false
Boolean(null) // false
Boolean(undefined) // false
Boolean(NaN) // false
Boolean(false) // false
```

*También se puede realizar una coerción implícita con el operador de negación (!), pero solo es para mencionarlo, no es recomendable su uso.*

```
// Coersión implícita (no la uses)
!!0 // false
!!"" // false
!!null // false
!!undefined // false
!!NaN // false
!!false // false
```

*Qué son los valores truthy*

Un valor truthy es aquel que es verdadero en un contexto booleano, son todos los valores que no sean falsy, que especificamos en la anterior sección.

```
// Coersión explícita
Boolean(12) // true
Boolean("hola") // true
Boolean(true) // true
Boolean([1, 2, 3]) // true
Boolean(function hola() {}) // true
Boolean({ a: 1, b: 2 }) // true
```

Cabe recalcar que en JavaScript **todo valor que no sea falsy es truthy incluyendo las estructuras vacías de array y objetos.**

```
Boolean([]) // true
Boolean({}) // true
```

### Operadores: Asignación, Comparación y Aritméticos

Para realizar operaciones en JavaScript es necesario conocer los diferentes tipos de operadores necesarios. Los tipos de operadores en el lenguaje son: aritméticos, asignación y comparación.

**Operadores aritméticos**

Los operadores aritméticos se utilizan para efectuar operaciones matemáticas.Para realizar las operaciones básicas, como suma, resta, multiplicación y división; utiliza los siguientes operadores:

```
// Suma
2 + 3 // 5
// Resta
5 - 3 // 2
// Multiplicación
4 * 2 // 8
// División
6 / 2 // 3
```

*No existe la división entre 0. En ese caso JavaScript devolverá el valor Infinity.*

El operador de residuo ( % ), el signo de porcentaje, devuelve el residuo o resto de una división.

```
//Residuo
21 % 5 // 1
```

Esto es importante para saber los múltiplos de cualquier número o si un número es par.

*Operador de concatenación*

El operador de concatenación consiste en unir dos o más strings.

```
"Hola" + "Platzi" // "Hola Platzi"
```

El operador de concatenación es semejando al operador de suma, pero no es el mismo. Si se utiliza este operador con diferentes tipos de datos, JavaScript ejecutará una coerción implícita.

*Operador de incremento y decremento*

El operador de incremento (++) y decremento (--) consiste en aumentar o disminuir una unidad a una variable, respectivamente. Estos operadores se pueden emplear antes y después de la variable.

```
variable++
variable--
++variable
--variable
```

Sin embargo, si se emplea antes o después, el comportamiento es diferente. Si está previamente, el valor de la variable aumenta y devuelve el valor actual. Si está después, el valor de la variable aumenta, pero devuelve el valor anterior.

```
var a = 3
var b = 3

console.log(a++) //3
console.log(++b) //4
console.log(a) //4
console.log(b) //4
```

**Operadores de Asignación**

Operador de asignación (=). Este operador es diferente a los operadores de igualdad (== y ===).

El operador de asignación (=) consiste en asignar un valor a una variable.

`var saludo = "Hola Mundo"`

*Operadores de asignación combinada*

En ciertos casos, se reasignará la misma variable más otro valor. Estas variables pueden utilizarse como acumuladores o contadores.

```
var contador = 1
contador = contador + 1
contador = contador + 1
console.log(contador) // 3
```

Una forma para evitar estar repitiendo la variable en la reasignación, es combinarlas con los operadores aritméticos antes del operador de asignación.

- Asignación de suma: `a += b` equivale a `a = a + b`
- Asignación de resta: `a -= b` equivale a `a = a - b`
- Asignación de multiplicación: `a *= b` equivale a `a = a * b`
- Asignación de división: `a /= b` equivale a `a = a / b`

**Operadores de comparación**

Un operador de comparación compara dos o más valores y devuelve un valor lógico (verdadero o falso).

*Operadores de igualdad*

Existen dos tipos de igualdad:

* Igualdad por valor (==): compara dos variables solamente por su valor. Por ejemplo: "3" de tipo string y 3 de tipo número son iguales.

* Igualdad por valor y tipo de dato (===): compara dos variables por su valor y tipo de dato. Por ejemplo: "3" de tipo string y 3 de tipo número no son iguales. Solamente 3 y 3, ambos de tipo número son iguales.

En conclusión, siempre utilizar la comparación por valor y tipo de dato para evitar errores. Los operadores de igualdad son diferentes al operador de asignación (=).

*Operadores de desigualdad*

Igualmente que los operadores de igualdad, existen dos tipos:

- Desigualdad por valor (!=)
- Desigualdad por valor y tipo de dato (!==)

*Operadores de mayor o menor*

Los operadores de mayor o menor evalúan intervalos, dependiendo si el valor especificado está incluido o no incluido.

```
// Menor que
3 < 5 // true

// Mayor que
3 > 5 // false

// Mayor o igual a que
3 >= 3 // true
3 >= 5 // false

// Menor o igual a que
3 <= 3 // true
3 <= 5 // true
```

**Operadores lógicos**

Los operadores lógicos comparan dos o más expresiones y devuelve un valor lógico (verdadero o falso). Las expresiones son comparaciones entre valores, se utiliza en conjunto con los operadores de comparación.

*Operador conjunción lógico*

El operador de conjunción o AND (&&) devuelve verdadero, si y solo si ambas expresiones son verdadero. Se lee de la siguiente manera: “La expresión 1 es verdadero Y la expresión 2 es verdadero, entonces es verdadero”.

- true && true = true
- true && false	= false
- false	&& true = false
- false	&& false = false

Por ejemplo, si queremos saber si un número está entre 10 y 20. Es decir, un número que es mayor o igual que 10 Y menor o igual que 20.

```
var a = 15
var b = 5

(a >= 10) && (a <= 20) // true
(b >= 10) && (b <= 20) // false
```

*Operador unión lógico*

El operador de unión u OR (||) devuelve verdadero, si y solo si, alguna expresión es verdadero. Se lee de la siguiente manera: “La expresión 1 es verdadero O la expresión 2 es verdadero, entonces es verdadero”.

- true || true = true
- true || false	= true
- false	|| true	= true
- false	|| false = false

Por ejemplo, si queremos saber si un número no está entre 10 y 20. Es decir, un número que es menor o igual que 10 O mayor o igual que 20.

```
var a = 15
var b = 5

(a <= 10) || (a >= 20) // false
(b <= 10) || (b >= 20) // true
```

*Operador negación lógico*

El operador de negación o NOT (!) devuelve el valor lógico contrario a la expresión. Se lee de la siguiente manera: “La expresión es verdadero, entonces es falso”.

- !true = false
- !false = true

Por ejemplo, si queremos saber si un número no es menor que 0. Es decir, la negación de que un número es menor que 0.

´´´
var a = 5

!(a < 0) // true
´´´

*También se puede escribir únicamente a > 0, sin embargo, es únicamente para entender el propósito del operador de negación.*


## Condicionales
### If, else, else if

**Condicionales** 

Son un conjunto de reglas para validar si algo es verdadero o falso y podamos generar ciertas acciones de acuerdo al resultado de la condición.

**Tipo de Condicionales**

- **Condicional "if":** La estructura sería:
```
if() { 
    
}
```
    - Dentro de los paréntesis () se evaluaría si algo es verdadero o falso.
    - Dentro de las llaves {} se encuentra la tarea a generar si la condición es verdadera.
    - Si lo que se está evaluando resulta falso, lo que está dentro de las llaves no se ejecuta, queda ignorado.
    - Ejemplo:
    ```
    var esUsuario = true;
	if(esUsuario) {  // con el if validamos que la condición sea true
	    console.log('Tiene acceso al contenido');  // dado que esUsario es verdadero se puede imprimir el mensaje
	}
    ```


- **Condicional "if...else":** La estructura sería:
```
if() { 
    
} else {

}
```
 	- Dentro de los paréntesis () se evaluaría si algo es verdadero o falso.
 	- Dentro de las primeras llaves {} se encuentra la tarea a generar si la condición es verdadera.
 	- Si lo que se está evaluando resulta falso, lo que está dentro de las primeras llaves no se ejecuta, queda ignorado, pero se ejecuta lo que está dentro de las llaves de else, sería el default del if.
 	- Ejemplo:
 	```
 	var esUsuario = false;
	if(esUsuario) {
	    console.log('Tiene acceso al contenido');  // la condición resultó verdadera
	} else {
	    console.log('Tienes que crear una cuenta para poder acceder al contenido'); // la condición resultó falsa
	}
 	```


- **Condicional "else if":** La estructura sería:
```
if() { 
    
} else if (){

} else {

}
```


	- Dentro de los primeros paréntesis () se evaluaría si algo es verdadero o falso.
	- Dentro de las primeras llaves {} se encuentra la tarea a generar si la primera condición es verdadera.
	- Si lo que se está evaluando resulta falso en la primera condición if, lo que está dentro de las primeras llaves no se ejecuta, queda ignorado, pero se evalúa la segunda condición else if.
	- Si dentro de los paréntesis del else if resulta verdadero, se ejecuta lo que está dentro de las llaves {}, de ser falso sería el default y se ejecutaría la tarea del último else.
	- Ejemplo:
 	```
 	var edad = 18; 
	var accion;  
	if(edad === 18) {
	    accion = 'Puede votar, será su 1ra votación'   // en la primera condición fue verdadera
	} else if(edad > 18) { 
	    accion = 'Puede votar'   // la segunda condición fue verdadera, no la primera
	} else { // call back 
	    accion = 'Aun no puede votar'   // ni la primera ni la segunda condición resultaron verdaderas, por lo que se ejecutó el "default"
	}
	console.log(accion);
 	```


- **Operador ternario:** La estructura sería:
```
condition ? true : false; 
```

	- Inicialmente se encuentra condition, ahí se coloca la condición a evaluar.
	- Después del signo de cierre de interrogación ? se encuentra la tarea a ejecutar si resulta verdadera la condición evaluada.
	- Después del signo de dos puntos : se encuentra la tarea a ejecutar de resultar falsa la condición evaluada.
	- Ejemplo:
 	```
 	var numero = 1; 
	var resultado = numero === 1 ? 'Sí soy un 1' : 'No soy un 1';
	console.log(resultado);  // dado que numero es igual a 1, console.log imprime el primer mensaje: "Si soy un 1"
 	```


### Switch

La **estructura switch** es otra manera de evaluar condiciones, la diferencia con if es que las condiciones deben ser iguales a un caso o algo específico.

**Cómo utilizar el condicional switch**

Colocamos la palabra reservada switch y seguido de la variable o expresión a evaluar, pero sin ningún operador de comparación.

```
switch (expresion) {}
```

Después colocamos cada caso con la palabra reservada case y el valor que deberá ser igual a la expresión. Seguido colocamos el bloque de código a ejecutar y al final la palabra reservada break para que no vuelva a evaluar otra condición si ya se cumplió.

```
switch (expresion) {
    case 1: {
        // Bloque 1
        break
    }
    case 2: {
        // Bloque 2
        break
    }     
}
```

Finalmente, colocamos la condición por defecto con la palabra reservada default que se ejecutará si ninguno de los casos fue el correcto. Esto es semejante al bloque else.

```
switch (expresion) {
  case 1: {
    // Bloque 1
    break
  }
  case 2: {
   // Bloque 2
    break
  }
  default: {
    // Bloque por defecto
  }
}
```

Esto se leería de la siguiente manera: evalúa (switch) la variable expresion, en el caso de que sea igual a uno (case 1), entonces ejecuta el bloque 1 y termina (break), en el caso de que sea igual a dos (case 2), entonces ejecuta el bloque 2 y termina (break), si no se cumple ninguna, ejecuta un bloque por defecto (default).

**Ejemplo utilizando switch**

*Por ejemplo, creemos un semáforo.*

```
function semaforo(color) {
  switch (color) {
    case "verde": {
      console.log("¡Sigue!")
      break
    }
    case "amarillo": {
      console.log("¡Detente!")
      break
    }
    case "rojo": {
      console.log("¡No puedes avanzar!")
      break
    }
    default: {
      console.log("¡No reconozco ese color! :(")
    }
  }
}

semaforo("verde") //'¡Sigue!'
```

**Cuándo utilizar switch**

Deberías utilizar switch cuando tengas una gran cantidad de casos, que con el condicional if produciría más cantidad de código. El problema con switch es que no es muy utilizado y todo se resuelve con if. Sin embargo, conocer esta estructura te puede permitir escribir código más legible en ciertos casos.


## Arrays
### ¿Que es un array?

Un array es una estructura de datos que permite almacenar una serie de datos localizados por índices y separados por comas.

**Qué son los índices**

El índice es la forma en que accedemos a los elementos de los arrays. En JavaScript, los índices empiezan desde 0, es decir, la primera posición es el índice 0. Un array se inicia mediante la sintaxis de corchetes [] y es tipo de dato objeto.
```
var array = [1,2,3,4]
```

**Cómo acceder a los elementos del array**

Para acceder a los elementos del array se utiliza la siguiente estructura:

array[índice]

Para saber la cantidad de elementos de un array se utiliza la propiedad length.

```
var array = [1,2,3,4]
var longitud = array.length
console.log(longitud) // 4
```

Ten en cuenta que la posición del elemento es diferente al índice del mismo.

Entonces, para acceder a un elemento del array, únicamente podrás utilizar los índices desde el 0 hasta array.length -1. Si se accede a un índice que no existe, devolverá undefined.

```
var nombres = ["Andres", "Ramiro", "Silvia"]

nombres[0] // "Andres"
nombres[1] // "Ramiro"
nombres[2] // "Silvia"
nombres[3] // undefined
```

**Qué es la mutabilidad en los arrays**

La mutabilidad hace referencia a la capacidad de una estructura de datos a cambiar. Esto permite cambiar los valores de los elementos de un array cuando accedemos a sus elementos mediante un índice.

Por ejemplo, cambiemos el segundo elemento con índice 1 al valor de “Platzi”:

```
var nombres = ["Andres", "Ramiro", "Silvia"]

// Accedemos y mutamos el segundo elemento
nombres[1] = "Platzi"

console.log(nombres) // ["Andres", "Platzi", "Silvia"]
```

**Qué son los métodos de arrays**

Los métodos de arrays son funcionalidades extra. Es semejante a las funciones, pero se accede mediante la notación punto array.metodo(argumentos).

Existen métodos mutables, es decir, que cambian el array original. Estos métodos son:

- push
- unshift
- pop
- shift

**Cómo utilizar el método push**

El método push agrega uno o varios elementos al final del array original. El método recibe como argumento los valores a agregar. Retorna el número de elementos del array mutado.

```
var array = [1,2,3]
array.push(4,5)
console.log(array) // [ 1, 2, 3, 4, 5 ]
```

**Cómo utilizar el método unshift**

El método unshift agrega uno o varios elementos al inicio del array original. El método recibe como argumento los valores a agregar. Retorna el número de elementos del array mutado.

```
var array = [3,4,5]
array.unshift(1,2)
console.log(array) // [ 1, 2, 3, 4, 5 ]
```

**Cómo utilizar el método pop**
El método pop extrae el elemento del final del array original.

```
var array = [1,2,3,4]
var lastElement = array.pop()
console.log(lastElement) // 4
console.log(array) // [ 1, 2, 3 ]
```

**Cómo utilizar el método shift**

El método shift extrae el elemento del inicio del array original.

```
var array = [1,2,3,4]
var firstElement = array.shift()
console.log(firstElement) // 1
console.log(array) // [ 2, 3, 4 ]
```

**Cómo utilizar el método indexOf**

El método indexOf muestra el índice del elemento especificado como argumento.

```
var array = [1,2,3,4]
var index = array.indexOf(2)
console.log(index) // 1
```

Si el elemento no se encuentra en el array, el método devuelve el valor -1.

```
var array = [1,2,3,4]
var index = array.indexOf("hola")
console.log(index) // -1
```

## Loops
### Loops: For y For...of

Un bucle (loop) o ciclo repetitivo es una estructura de control que te permite realizar una o varias instrucciones mientras una condición sea verdadera.

Existen dos tipos de ciclos repetitivos:

- For (para)
- While (mientras)

#### Qué es un ciclo for

Para el ciclo for conocemos la cantidad de veces que la estructura repetirá una o varias instrucciones.

Por ejemplo, si queremos los 10 primeros números, sabemos que el ciclo se repetirá 10 veces. Si accedemos a los elementos de un array, sabemos que el ciclo se repetirá length veces.

#### Cómo utilizar el ciclo for

La estructura del ciclo for es la siguiente:

```
for (condición) {
    // Bloque de código
}

```
La condición consta de tres partes:

1. Inicio: se debe inicializar una variable que será evaluada en la expresión a comparar. Esta variable puede ser declarada dentro o fuera de la condición.
2. Comparación: es una expresión que debe cumplir la variable inicial, cuando no se cumpla, el ciclo termina.
3. Pasos: son los intervalos que cambiará la variable inicial, mientras cumpla con la expresión de comparación.

Cada una de las partes debe estar separada por un punto y coma ( ;).

#### Practiquemos el uso del bucle for

Por ejemplo, generemos los números del 1 al 10:

- Inicio: inicializamos una variable con el valor de 1, generalmente se utiliza i (índice) como variable para el bucle, pero no es obligatorio. En este caso usaremos var num = 1.
- Condición: La condición será mientras sea menor o igual que 10 (num <= 10),
- Pasos: Debemos aumentar la variable en una unidad, por lo tanto, podemos utilizar num = num +1, num += 1 o num++. Este último únicamente cuando la variable aumente una unidad.

La estructura es la siguiente:

```
for (var num = 1; num <= 10; num++) {
  console.log(i)
}
```

Esto se leería como: “Para (for) la variable num que inicia en 1 (num = 1) mientras sea menor o igual que 10 (num <= 10) en pasos de 1 (num++) ejecuta una o varias instrucciones (console.log)”.

#### Cómo recorrer arrays con el ciclo for

En el anterior ejemplo aprendiste a generar números del 1 al 10, utilicemos la misma lógica para recorrer un array.

¿Qué debemos usar para acceder a los elementos de un array? Exactamente, sus índices (variable i). Debemos generar los índices desde 0 hasta length (que no debe estar incluido). Con esto, empleamos la misma variable i para acceder a cada elemento con la sintaxis de corchetes array[i].

La estructura sería siguiente:

```
var nombres = ["Andres", "Diego", "Platzi", "Ramiro", "Silvia"]

for(var i = 0; i < nombres.length; i++){
    console.log( nombres[i] )
}

```

#### Qué es un ciclo for … of

El ciclo for ... of es una variación del ciclo for que se utiliza para recorrer los valores de los elementos de un array.

La estructura del ciclo for ... of es la siguiente:

```
for ( var elemento of array){
    //Bloque de código
}
```
La variable elemento es la referencia a cada uno de los elementos del array. Este puede tener cualquier nombre, por eso se inicia con var, debido a que es una variable como el índice i en el bucle for.

```
var array = [5, 4, 3, 2, 1]

for (var elemento of array) {
  console.log(elemento) // 5 4 3 2 1
}
```

Por convención, se escribe la variable elemento en singular con respecto al nombre del array. Por ejemplo, si el nombre del array es datos, el nombre de la variable de cada elemento sería dato, y así sucesivamente.

```
for (var dato of datos) { ... }
for (var name of names) { ... }
for (var number of numbers) { ... }
for (var el of elements) { ... }
```

#### Limitaciones del ciclo for … of

El ciclo for ... of solo accede al valor de cada uno de los elementos del array. Por consiguiente, si quieres cambiar el array original, no podrás, porque necesitas su índice para acceder y cambiar su valor.

Por ejemplo, si quieres duplicar el valor de cada elemento del array, necesitarás su índice.

```
var numbers = [5, 4, 3, 2, 1]

// ❌ No cambia el array original
for (var number of numbers) {
  number = number * 2
}

console.log(numbers) // [5, 4, 3, 2, 1]

// ✅ Cambia el array original
for(var i=0; i < numbers.length; i++){
    numbers[i] = numbers[i] * 2
}

console.log(numbers) // [ 10, 8, 6, 4, 2 ]
```

Sin embargo, esto no es malo, depende del problema que estés afrontando. Una forma de solucionar el anterior problema utilizando for ... of, es creando otro array vacío para llenarlo con los nuevos valores, de esta manera no cambiará el array original.

```
var numbers = [5, 4, 3, 2, 1]
var duplicates = []

for (var number of numbers) {
  duplicates.push(number * 2)
}

console.log(duplicates) // [ 10, 8, 6, 4, 2 ]
```

### Loops: While

Para el ciclo while no conocemos la cantidad de veces que la estructura repetirá una o varias instrucciones. Aunque también se puede acoplar para que realice un determinado número de repeticiones.

Por ejemplo, si queremos que un usuario ingrese un valor mayor a 0, no sabremos cuántas veces se equivocará. También, si queremos que un programa se ejecute hasta que el usuario ingrese una opción para salir.

#### Cómo utilizar el ciclo while

La estructura del ciclo while es la siguiente:

```
while (condición) {
    // Bloque de código
    // Cambiar la condición para salir del bucle
}
```

En este caso la condición es una expresión lógica a evaluar, si es verdadero repite el bloque de código, si es falso el ciclo termina. Debido a esto, necesitas cambiar la variable de la condición, para que no existe un bucle infinito.

#### Generación de números con el bucle while

Por ejemplo, generemos los números del 1 al 10, ahora con el bucle while.

La estructura es la siguiente:

```
var numero = 1

while ( numero <= 10 ){
    console.log(numero)
    numero++
}
```

Esto se leería como: “Mientras (while) la variable numero sea menor o igual que 10 (numero <= 10) ejecuta una o varias instrucciones (console.log); finalmente, aumenta la variable en uno (numero++) para que no exista un bucle infinito”.

#### Control de variables con el bucle while

Otro ejemplo, tenemos un programa únicamente para estudiantes, queremos controlar que un usuario ingrese una edad menor de 18 (y mayor que 0 porque no existe edades negativas). Entonces utilizamos while debido a que no conocemos cuántas veces se equivocará el usuario.

Ejecuta el siguiente código en la terminal de tu navegador, e intenta ingresar un valor incorrecto y observa lo que sucede. Se utiliza la condición contraria a lo que queremos, porque es lo que controlaremos, al cambiar la variable edad evitamos el ciclo infinito.

```
var edad = Number(prompt("Ingrese un valor: "))

while (edad > 18 || edad <= 0){
  edad = Number(prompt("Ingrese un valor correcto: "))
}

console.log("Gracias por ingresar al programa")
```

## Objetos

Un objeto es una estructura de datos que permite almacenar valores mediante propiedad - valor a través de la sintaxis de llaves ({}) y separados por comas.

En las propiedades del objeto es opcional colocar las comillas. En el caso de que haya espacios, es obligatorio.

```
var objeto = {
    clave1: "valor1",
   "clave 2": "valor2",
}
```

Excepto por los primitivos y las funciones, todo es un objeto en JavaScript.

### Qué son los atributos y métodos

En programación orientada a objetos, un objeto es una representación de la realidad, en el cual sus características propias se definen como atributos y sus acciones se definen como métodos.

En otras palabras, los atributos son las variables y los métodos son las funciones propias de cada objeto.

Por ejemplo, definamos el objeto miAuto. Se coloca entre comillas la propiedad año porque el lenguaje no admite caracteres especiales del español. Aunque en ciertas situaciones si admite.

```
var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    "año": 2020,
    detalle: function () {
        console.log("Es un auto")
    }
}
```

Las propiedades marca, modelo y "año" son los atributos del objeto miAuto. La propiedad detalle es un método del objeto miAuto.

### Cómo acceder a los valores de un objeto

A diferencia de los arrays, únicamente es necesario saber la propiedad del objeto para acceder a su valor.

Existen tres formas para acceder al valor de un objeto:

1. Mediante la notación de corchetes
2. Mediante la notación de punto

### Qué es la notación de corchetes

La notación de corchetes ya ese familiar para ti, similar a los arrays, indicamos entre corchetes la propiedad del objeto entre comillas.

```
objeto["propiedad"]
```

Por ejemplo, accedamos a las propiedades del objeto miAuto creado anteriormente.

```
miAuto["marca"] // "Toyota"
miAuto["modelo"] // "Corolla"
miAuto["año"] // 2020
miAuto["detalle"] // ƒ detalle()
```

Observa que cuando accedes a un método, únicamente muestra la función, esto sucede porque la propiedad guarda dicha función que aún no es ejecutada. Para ejecutarla hay que utilizar los paréntesis.

```
miAuto["detalle"]() // "Es un auto"
```

Finalmente, ten cuidado con las comillas, si nos las usas, estás haciendo referencia a una variable. En este caso existirán tres posibilidades:

- Si existe la variable y su valor coincide con una propiedad del objeto, entonces mostrará su respectivo valor.
- Si existe la variable, pero su valor no coincide con una propiedad del objeto, entonces mostrará undefined.
- Si no existe la variable, entonces mostrará un error de referencia.

```
var propiedad1 = "marca"
miAuto[propiedad1] // "Toyota"

var propiedad2 = "nombre"
miAuto[propiedad2] // undefined

miAuto[modelo] // ReferenceError: modelo is not defined
```

### Qué es la notación de punto

La notación de punto indicamos con un punto la propiedad del objeto. Si existen espacios, la única forma de acceder a esa propiedad es mediante la notación de corchetes.

```
objeto.propiedad
```

Por ejemplo, accedamos a las propiedades del objeto miAuto creado anteriormente.

```
miAuto.marca // "Toyota"
miAuto.modelo // "Corolla"
miAuto.añó // 2020
miAuto.detalle // ƒ detalle()
```

Igualmente, para ejecutar el método hay que utilizar los paréntesis.

```
miAuto.detalle() // "Es un auto"
```

### Los arrays también son objetos

La notación punto te debe de parecer familiar, ya que así usábamos los diferentes atributos y métodos de los arrays, como length o map.

Esto es debido a que los arrays también son objetos en JavaScript. Por esta razón, también podemos utilizar la notación de corchetes, pero no es recomendable.

```
var array = [1, 2, 3]
array["length"] // 3
var newArray = array["map"](function (el) {
  return el * 2
})
newArray // [2,4,6]
```

### Cómo añadir propiedades de un objeto

Para añadir propiedades de un objeto, utilizamos la notación de corchetes o de punto con la nueva propiedad, asignándole su respectivo valor.

Por ejemplo, añadamos la propiedad color del objeto miAuto.

```
miAuto["color"] = "rojo"
// o 
miAuto.color = "rojo"

console.log(miAuto)
/* {
  marca: 'Toyota',
  modelo: 'Corolla',
  'año': 2020,
  detalle: ƒ detalle(),
  color: 'rojo'  <---- nueva propiedad
} */

```
### Cómo modificar propiedades de un objeto

Para modificar propiedades de un objeto, utilizamos la notación de corchetes o de punto con la propiedad específica, asignándole su nuevo valor.

Por ejemplo, modifiquemos la propiedad marca, de "Toyota" a "Ford", del objeto miAuto.

```
miAuto["marca"] = "Ford"
// o 
miAuto.marca = "Ford"

console.log(miAuto)
/* {
  marca: 'Ford', <--- Cambió de valor
  modelo: 'Corolla',
  'año': 2020,
  detalle: ƒ detalle(),
} */
```

### Cómo eliminar propiedades de un objeto

Para eliminar propiedades de un objeto, utilizamos la palabra reservada delete seguido de la propiedad del objeto.

Por ejemplo, eliminemos la propiedad marca del objeto miAuto.

```
delete miAuto["marca"]
// o 
delete miAuto.marca

console.log(miAuto)
/* { 
  modelo: 'Corolla', <--- No existe la propiedad marca
  'año': 2020,
  detalle: ƒ detalle(),
} */
```

### El objeto contexto this

En JavaScript, el objeto contexto this hace referencia a diferentes valores según su contexto de ejecución. Como es un tema complejo de programación orientada a objetos, no profundizaré.

En objetos, el contexto this hace referencia al propio objeto. Esto sirve para acceder a los atributos y métodos propios del objeto.

Por ejemplo, cambiemos la función detalle del objeto miAuto para mostrar un mensaje personalizado.

```
var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    "año": 2020,
    detalle: function () {
        console.log(`Auto ${modelo} del ${año}.`)
    }
}

miAuto.detalle() //ReferenceError: modelo is not defined
```

Si ejecutamos la función miAuto.detalle() mostrará un error de referencia, que modelo no está definido.

Hagamos un pequeño cambio, utilicemos la notación de punto para acceder a los valores de la propiedad.

```
var miAuto = {
  //...
  detalle: function () {
    console.log(`Auto ${miAuto.modelo} del ${miAuto.año}.`)
  },
}

miAuto.detalle() // 'Auto Corolla del 2020.'
¡Funcionó! Sin embargo, necesito crear otro objeto con el mismo código.

var otroAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    "año": 2020,
    detalle: function () {
    console.log(`Auto ${miAuto.modelo} del ${miAuto.año}.`)
  },
}

otroAuto.detalle() //ReferenceError: miAuto is not defined
```
Ahora muestra nuevamente un error de referencia del objeto miAuto. ¿Pero cambio miAuto por otroAuto y problema resuelto? Sí, pero como programador no debemos cambiar manualmente el código que puede ser reutilizado.

Realicemos otro cambio, utilicemos el objeto contexto this para hacer referencia a nuestro objeto.

```
var miAuto = {
  //...
  detalle: function () {
    console.log(`Auto ${this.modelo} del ${this.año}.`)
  },
}

miAuto.detalle() //'Auto Corolla del 2020.'
¡Funcionó! Ahora creemos otro objeto.

var otroAuto = {
  // ...
  detalle: function () {
    console.log(`Auto ${this.modelo} del ${this.año}.`)
  },
}

otroAuto.detalle() //'Auto Corolla del 2020.'
```

¡Volvió a funcionar! Ahora podremos crear varios objetos sin cambiar una y otra vez la referencia al objeto this. En el objeto miAuto, this es igual a miAuto; mientras que en el objeto otroAuto, this es igual a otroAuto. Por eso podemos acceder a los atributos y métodos, independientemente del objeto creado.

Crear varios objetos a partir de un código base se denomina crear una instancia.


## Objects: Función constructora

Existe un problema al momento de construir varios objetos a partir de un código base, los atributos deben cambiar con respecto a la nueva información. Para esto se utiliza una función constructora.

Una función constructora sirve para crear varios objetos a partir de nueva información, esto es recibido argumentos.

### Cómo generar varios objetos a partir de una función constructora

Para crear una función constructora, debemos definir los parámetros correspondientes, que serán los atributos del objeto, que cambiarán con la nueva información mediante argumentos. Estos argumentos deben hacer referencia a cada uno del nuevo objeto, esto mediante el objeto contexto this.

Ten en cuenta que los parámetros de la función son diferentes a los atributos del objeto 😄.

```
function Auto(brand, model, year){
    this.marca = brand
    this.modelo = model
    this.año = year
    this.detalle = function () {
        console.log(`Auto ${this.modelo} del ${this.año}.`)
    }
}
```

Si ejecutamos la función Auto mostrará un error, necesitamos especificar que vamos a construir una instancia mediante la palabra reservada new.

```
var miAuto = new Auto("Toyota", "Corolla", 2020)
/* Auto {
  marca: 'Toyota',
  modelo: 'Corolla',
  'año': 2020,
  detalle: ƒ ()
}*/
```

De esta manera, puedes crear varios objetos a partir de una función constructora que permita especificar atributos y métodos personalizados.

```
var otroAuto = new Auto("Tesla", "Model 3", 2021)
var otroAuto2 = new Auto("Suzuki", "K-20", 2019)
var otroAuto3 = new Auto("Ferrari", "Model N", 2018)
```

Puede que observes la propiedad __proto__, no te preocupes, ya lo aprenderás.


## Métodos de recorridos de Arrays

Existen métodos de arrays para recorrerlos, y devolver un valor o un array con nuevos resultados. Entre estos están dos muy importantes: map y filter.

Utilizaremos el siguiente array de objetos para los ejemplos de los métodos:

```
var articulos = [
  { nombre: "Bici", costo: 3000 },
  { nombre: "TV", costo: 2500 },
  { nombre: "Libro", costo: 320 },
  { nombre: "Celular", costo: 10000 },
  { nombre: "Laptop", costo: 20000 },
  { nombre: "Teclado", costo: 500 },
  { nombre: "Audifonos", costo: 1700 },
]
```

### Cómo utilizar el método filter

El método filter consiste en crear un nuevo array a partir de los elementos originales filtrados mediante una función (callback) que indica la condición a cumplir y es inmutable. Si la condición se cumple, retorna el elemento completo.

### El método filter recibe dos argumentos:

La función que itera y evalúa si cada elemento del array si cumple con la condición especificada (obligatorio).
Un objeto al que puede hacer referencia el contexto this en la función. Si se lo omite, será undefined. Recuerde que this es diferente según el lugar donde sea invocado.

```
var otherArray = array.filter(function(), thisArg)
```

La función, que recibe como argumento el método filter, utiliza tres parámetros:

1. El valor actual del elemento iterado. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
2. El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
3. El array que está iterando.

```
const other = array.filter(function(element, index, array))
```

### Practiquemos el uso del método filter

Utilicemos el array articulos que definimos para filtrar en un nuevo array los artículos cuyo costo sea menor o igual que 500.

Entonces utilizamos el método filter que retorne la condición que necesitamos. Recuerda que el primer parámetro de la función callback es cada uno de los elementos del array.

```
var articulosFiltrados = articulos.filter(function (articulo) {
  return articulo.costo <= 500
})

console.log(articulosFiltrados)
/* [
  { nombre: 'Libro', costo: 320 },
  { nombre: 'Teclado', costo: 500 }
] */
```

### Cómo utilizar el método map

El método map es inmutable y consiste en crear un nuevo array a partir de los elementos originales transformados mediante una función (callback).

El método map recibe dos argumentos:

1. La función que itera y transforma cada elemento del array (obligatorio).
2. Un objeto al que puede hacer referencia el contexto this en la función. Si se lo omite, será undefined. Recuerde que this es diferente según el lugar donde sea invocado.

```
var otherArray = array.map(function(), thisArg)
```

La función, que recibe como argumento el método map, utiliza tres parámetros opcionales:

1. El valor actual del elemento iterado. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
2. El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
3. El array que está iterando.

```
var otherArray = array.map(function(element, index, array))
```

### Practiquemos el uso del método map

Utilicemos el array articulos que definimos para crear un nuevo array con el nombre de cada uno de los artículos.

Entonces utilizamos el método map que retorne el nombre de cada artículo. Recuerda que el primer parámetro de la función callback es cada uno de los elementos del array.

```
var nombreArticulos = articulos.map(function (articulo) {
  return articulo.nombre
})
console.log(nombreArticulos)
/* 
[ 'Bici', 'TV', 'Libro', 'Celular', 'Laptop', 'Teclado', 'Audifonos' ]
*/
```


## Recorriendo Arrays con .find(), .forEach() y .some(

Para continuar con otros métodos para recorrer arrays, aprenderás find, forEach y some.Utilizaremos el siguiente array de objetos para los ejemplos de los métodos:

```
var articulos = [
  { nombre: "Bici", costo: 3000 },
  { nombre: "TV", costo: 2500 },
  { nombre: "Libro", costo: 320 },
  { nombre: "Celular", costo: 10000 },
  { nombre: "Laptop", costo: 20000 },
  { nombre: "Teclado", costo: 500 },
  { nombre: "Audifonos", costo: 1700 },
]
```

### Cómo utilizar el método find

El método find consiste en encontrar el primer elemento de un array que cumpla con la condición especificada en la función (callback). Si ningún elemento cumpla con la condición, retornará undefined.

El método find recibe dos argumentos:

1. La función que itera y evalúa cada elemento del array hasta encuentre uno que cumpla con la condición especificada (obligatorio).
2. Un objeto al que puede hacer referencia el contexto this en la función. Si se lo omite, será undefined.
array.find(function(), thisArg)

La función, que recibe como argumento, utiliza tres parámetros opcionales:

1. El valor actual del elemento iterado. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
2. El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
3. El array que está iterando.

```
array.find(function(element, index, array)).
```

### Practiquemos el uso del método find

Utilicemos el array articulos que definimos para encontrar algún artículo que su nombre sea Laptop.

Entonces utilizamos el método find que retorne la condición que necesitamos. Recuerda que el primer parámetro de la función callback es cada uno de los elementos del array.

```
var algunArticulo = articulos.find(function (articulo) {
  return (articulo.nombre = "Laptop")
})
console.log(algunArticulo)
/* 
{ nombre: 'Laptop', costo: 3000 }
*/
```

### Cómo utilizar el método forEach

El método forEach de los arrays consiste en ejecutar una función (callback) para cada uno de los elementos iterados. Iterar significa repetir una acción varias veces. Este método no retorna ningún valor.

Este método recibe dos argumentos:

1. La función que itera cada elemento del array (obligatorio).
2.Un objeto al que puede hacer referencia el contexto this en la función. Si se lo omite, será undefined.
array.forEach(function(), thisArg)

La función, que recibe como argumento el método forEach, utiliza tres parámetros opcionales:

1. El valor actual del elemento iterado. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
2. El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
3.El array que está iterando.

```
array.forEach(function(element, index, array))
```

### Practiquemos el uso del método forEach

Utilicemos el array articulos que definimos para mostrar todos los artículos.

Entonces utilizamos el método forEach y que ejecute la función console.log para cada uno de los elementos. Recuerda que el primer parámetro de la función callback es cada uno de los elementos del array.

```
articulos.forEach(function (articulo) {
  console.log(articulo)
})
/* 
{ nombre: 'Bici', costo: 3000 }
{ nombre: 'TV', costo: 2500 }
...
{ nombre: 'Audifonos', costo: 1700 }
*/
```

### Cómo utilizar el método some

El método somees inmutable y consiste retornar un valor lógico verdadero si existe al menos un elemento que cumpla la condición establecida en la función (callback).

El método some recibe dos argumentos:

1. La función que itera y evalúa cada elemento del array hasta que al menos uno cumpla con la condición especificada (obligatorio).
2. Un objeto al que puede hacer referencia el contexto this en la función. Si se lo omite, será undefined.
array.some(function(), thisArg)

La función, que recibe como argumento el método some, utiliza tres parámetros:

1. El valor actual del elemento iterado. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
2. El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
3. El array que está iterando.

```
array.some(function(element, index, array))
```

### Practiquemos el uso del método some

Utilicemos el array articulos que definimos para saber si existe al menos un artículo con el costo menor o igual que 700.

Entonces utilizamos el método some que retorne la condición que necesitamos. Recuerda que el primer parámetro de la función callback es cada uno de los elementos del array.

```
var existeArticulo = articulos.some(function (articulo) {
  return articulo.costo <= 700
})
console.log(existeArticulo) // true
```

## Filter vs Find

- El método find () devuelve el primer valor que coincide de la colección. Una vez que coincida con el valor en los resultados, no verificará los valores restantes en la colección de matriz.

- El método filter () devuelve los valores coincidentes en una matriz de la colección. Verificará todos los valores de la colección y devolverá los valores coincidentes en una matriz.