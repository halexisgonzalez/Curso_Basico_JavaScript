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