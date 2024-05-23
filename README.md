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