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

