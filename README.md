# Enjoy the World

![Rio](src/img/giphy.gif)
## Índice
* [1. Presentación](#1-presentación)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Historias de usuario](#4-historias-de-usuario)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Prototipos](#6-prototipos)
* [7. Pruebas de usabilidad](#7-pruebas-de-usabilidad)
* [8. Trabajo en equipo](#8-trabajo-en-equipo)

## 1. Presentación

En la actualidad nuestro entorno se desenvuelve entre corrientes de internet y redes sociales, hoy en día la humanidad tiene la necesidad de comunicar todo tipo de situaciones que se generan al rededor de su entorno, es por esta razón que nace "Enjoy The world" una red social que quiere ayudar a  milies de usuarios alrededor del mundo a dar a conocer las diferentes fiestas que se celebran en sus ciudades que no tienen un impactoglobal y que se dan en distintas epocas del año, concideramos que esas pequeñas celebraciones son patrimonio de la humanidad y por consiguiente todos deberiamos saber de su existencia o por lo menos tener un lugar que nos brinde información detallada de cada una de estas.

***

## 2. Resumen del proyecto

El objetivo pricipal de realizar este trabajo, es poner a disposición de los usuarios una red social que le permita públicar las diferentes festividades que se realizan en sus ciudades, pueblos y regiones.

Para la construcción de la página web 'EN JOY THE WORLD' se realizÓ una planeación inicial con el objetivo de organizar la ejecución del proyecto por fases, que incluyeron todo lo relacionado al diseño y la funcionalidad y en general todos los aspectos visuales y de iteración entre el usuario y la aplicación.

Utilizando herramientas como la plataforma [Figma](https://www.figma.com/files/recent?fuid=1138462752466790145). que nos brindó la facilidad de realizar diseños que pudieran adaptarse a las característica de una página web responsive a partir de dos tamaños básicos (mobil y desktop) lo gramos hacer un prototipo de alta fidelidad, llamativo y amigable para cualquier tipo de usuario implemetando el HTML semantico.

Una vez terminados los prototipos se comenzó a escribir el código base en : HTML, JS con la técnica de los nodos que nos permitió independizar las vistas y dar la iteración entre páginas con el uso del DOM e implementando la conección atraves de fuentas externas como [firebase](https://firebase.google.com/docs/auth/web/password-auth?hl=es&authuser=0). respondiendo a las ideas plasmadas en ellos. A partir del resultado de las pruebas de usabilidad realizadas a los usuarios en diferentes etapas de la construcción se realizaron iteraciones a la propuesta inicial, hasta conseguir el resultado actual de la página.

***

## 3. Objetivos de aprendizaje

Marcamos los objetivos que hemos alcanzado como equipo

### HTML

- [ ] **Uso de HTML semántico**

### CSS

- [ ] **Uso de selectores de CSS**

- [ ] **Modelo de caja (box model): borde, margen, padding**

- [ ] **Uso de flexbox en CSS**

### Web APIs

- [ ] **Uso de selectores del DOM**

- [ ] **Manejo de eventos del DOM (listeners, propagación, delegación)**

- [ ] **Manipulación dinámica del DOM**

- [ ] **Ruteado (History API, evento hashchange, window.location)**

### JavaScript

- [ ] **Arrays (arreglos)**

- [ ] **Objetos (key, value)**

- [ ] **Diferenciar entre tipos de datos primitivos y no primitivos**

- [ ] **Variables (declaración, asignación, ámbito)**

- [ ] **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**

- [ ] **Uso de bucles/ciclos (while, for, for..of)**

- [ ] **Funciones (params, args, return)**

- [ ] **Pruebas unitarias (unit tests)**

- [ ] **Uso de mocks y espías**

- [ ] **Módulos de ECMAScript (ES Modules)**

- [ ] **Uso de linter (ESLINT)**

- [ ] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

- [ ] **Diferenciar entre expresiones (expressions) y sentencias (statements)**

- [ ] **Callbacks**

- [ ] **Promesas**

### Control de Versiones (Git y GitHub)

- [ ] **Git: Instalación y configuración**

- [ ] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**

- [ ] **Git: Integración de cambios entre ramas (branch, checkout, fetch, merge, reset, rebase, tag)**

- [ ] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**

- [ ] **GitHub: Despliegue con GitHub Pages**

- [ ] **GitHub: Colaboración en Github (branches | forks | pull requests | code review | tags)**

- [ ] **GitHub: Organización en Github (projects | issues | labels | milestones | releases)**

### user-centricity

- [ ] **Diseñar un producto o servicio poniendo a la usuaria en el centro**

### product-design

- [ ] **Crear prototipos de alta fidelidad que incluyan interacciones**

- [ ] [**Seguir los principios básicos de diseño visual**]

### research

- [ ] **Planear y ejecutar testeos de usabilidad de prototipos en distintos niveles de fidelidad**

### Firebase

- [ ] **Firebase Auth**

- [ ] **Firestore**

***

## 4. Historias de usuario
### Historias de usuario 1 

"YO COMO USUARIO de la RED SOCIAL (Enfiéstese todo el año) QUIERO una (landing page) atractiva, PARA QUE me de la Bienvenida y me permita registrarme."

* **Criterios de aceptación mínimos del proyecto**

* *Que la landing page tenga el formulario de registro**
* *Que aparezca el nombre de la red social**
* *Que sea atractiva y cumple con un diseño visual**
* *Que permita registrarse con Google o con su correo electronico**
* *Solamente se permite el acceso a usuarios con cuentas válidas**
* *No pueden haber usuarios repetidos**
* *La cuenta de usuario debe ser un correo electrónico válido**
* *Lo que se escriba en el campo (input) de contraseña debe ser secreto**
* *Al enviarse el formulario de registro o inicio de sesión, debe validarse**
* *Si hay errores, se deben mostrar mensajes descriptivos para ayudar al usuario a corregirlos** 



* **Definición de terminado:** todos los aspectos técnicos que deben cumplirse
  para que, como equipo, sepan que esa historia está terminada y lista
  para publicarse. **Todas** tus Historias de Usuario (salvo excepciones), deben
  incluir estos aspectos en su Definición de Terminado (más todo lo que
  necesiten agregar):

  - Debe ser una SPA.
  - Debe ser _responsive_.
  - Deben haber recibido _code review_ de al menos una compañera de otro equipo.
  - Hicieron los _test_ unitarios
  - Testearon manualmente buscando errores e imperfecciones simples.
  - Hicieron _pruebas_ de usabilidad e incorporaron el _feedback_ de los
    usuarios como mejoras.
  - Desplegaron su aplicación y etiquetaron la versión (git tag).

***

## 5. Criterios de aceptación mínimos del proyecto

### 5.1 Creación del Boilerplate
- [x] **Boilerplate**

### 5.2 Definición de la Red Social
- [ ] **Definición del producto**

[lluiva de ideas](src/img/Definicion_de_producto.png)

### 5.3 Definición de las historias de usuario
- [ ] **Historias de usuario**

### 5.4 Realización de prototipos
- [ ] **Diseño de la Interfaz de Usuario**

### 5.5 Mobile first, aplicación responsive
- [ ] **Responsive**

### 5.6 Consideraciones del comportamiento de la interfaz de usuario (UI)

- [ ] **Creación de cuenta de usuario e inicio de sesión**

- [ ] **Muro/timeline**

### 5.7 Consideraciones técnicas Front-end

- [ ] **Pruebas unitarias (unit tests)**

### 5.8 Usuario en el centro del diseño
- [ ] **Consideraciones técnicas UX**

***

## 6. Prototipos
Se diseñaron e iteraron unos prototipos iniciales para conceptualizar desde las diferentes estrategias de 'mobil first' cómo quedaría la aplicación:

![Prototipo de baja](src/img/Prototipo_Monica.jpeg.jpg)

![Prototipo de baja2](src/img/prototipoBaja.png)

Posteriormente plasmamos los prototipos de alta fidelidad a partir de los cuales realizamos las pruebas de usabilidad.
*** adjuntar captura de imagen

***

## 7. Pruebas de usabilidad
se adjuntan las evidencias de las pruebas de usabilidad realizadas

***

## 8. Trabajo en equipo
Podemos describir nuestro proceso como equipo y dar cuenta de las habilidades blandas que hemos adquirido realizando este proyecto.

***