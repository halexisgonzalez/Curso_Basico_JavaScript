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