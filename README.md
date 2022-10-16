# YUMMY FRIENDS - Red Social 🍡🍨🍰🎂🧁🍩

## Índice

* [1. Definición de Producto](#1-definición-de-producto)
* [2. Historias de Usuario](#2-historias-de-usuario)
* [3. Diseño de la Interfaz de Usuario](#3-diseño-de-la-interfaz-de-usuario)

***

## 1. Definición de Producto

  * **Usuario Objetivo:** **Yummy Friends** es una red social que va dirigida a todas aquellas personas amantes de los postres y los cuales buscan un lugar en la web para compartir, a través de publicaciones, cuáles son sus postres favoritos, recetas y recomendar sus restaurantes favoritos. 

  ![Alt](/src/imagenes/amantes%20de%20los%20postres.jpg)

  * **Esquema general:** Al acceder a **Yummy Friends**, el usuario podrá registrarse por primera vez, iniciar sesión si ya se cuenta registrado y acceder a un muro donde tendrá la posibilidad de realizar publicaciones y visualizar las de otros usuarios con las cuales podrá interactuar a través de "likes". **Yummy Friends** contará con las siguientes secciones:

    1. **Página inicial:** Aquí se puede visualizar el nombre de la red social **Yummy Friends**, un mensaje de bienvenida alusivo a la red social y un campo para que el usuario pueda iniciar sesión con correo/contraseña o con cuenta de google. En caso de no tener una cuenta este puede crear una a través del enlace "Regístrate".

    ![Alt](/src/imagenes/welcome.JPG)

    2. **Segunda página:** Aquí el usuario encontrará un formulario donde podrá ingresar correo y crear una contraseña para crear su cuenta. En caso de haberse registrado previamente y por error ingresó a esta sección, el usuario tendrá la opción de regresar al inicio a través del enlace "Inicia sesión"

    ![Alt](/src/imagenes/Register.JPG)

    3. **Tercera página:** En esta sección el usuario encontrará un muro con un campo principal "¿Qué opinas? donde podar escribir lo que quiera compartir. Una vez publicado este verá su publicación con un icono en forma de corazón 🤍 donde el podrá dar "like" a su propio post (una vez) así como otros usuarios que gusten de su contenido. También tendrá la posibilidad de borrar y editar el post a través de los botones "Borrar" y "Editar". Para esta última acción, el usuario al dar click en el botón, su post se trasladará al campo principal donde podrá modificarlo y así volver a publicar con el cambio.  

    ![Alt](/src/imagenes/wall.JPG)   



## 2. Historias de Usuario

  - **Historia de usuario 1**
  ![Alt](/src/imagenes/HU1.JPG)

  **Criterios de aceptación**
    * El usuario encontrará un formulario donde debe ingresar: Nombre, correo electrónico, Crear una contraseña y confirmarla. Finalmente dar click en botón "Regístrate"
    * Si el usuario ingresa un correo que ya ha sido registrado previamente, se mostrara un mensaje "Email ya en uso"
    * Si el usuario no nos da un correo válido (que no agrega el @ o el .com), se mostrara un mensaje "Email inválido"
    * Si el usuario ingresa menos de 6 caracteres en contraseña, se mostrará un mensaje "La contraseña es demasiado débil. Como mínimo debe tener 6 caracteres".
    * Al dar click en el botón "Regístrate" el usuario es llevado a la página del Muro con un mensaje "Registro exitoso. Bienvenid@"
    

  **Definición de terminado**
  Cumplimiento de condiciones: Single-page Application (SPA), responsive (móvil, Tablet, PC), testeo manual para búsqueda de errores e imperfecciones simples, pruebas de usabilidad e incorporaron el feedback de los usuarios como mejoras.

  - **Hisotria de usuario 2**
    ![Alt](/src/imagenes/HU2.JPG)

    **Criterios de aceptación 2.1**
    * El usuario encontrará dos campos a diligenciar: Correo electrónico y contraseña. Finalmente dar click en botón "Iniciar Sesión".
    * Si el usuario no nos da un correo válido (que no agrega el @ o el .com), se mostrara un mensaje "Email inválido".
    * Si el usuario no diligencia la contraseña, se mostrará un mensaje "Ingrese una contraseña"
    * Si el usuario no diligencia la contraseña correcta, se mostrará un mensaje "Contraseña incorrecta"
    * Al dar click en el botón "Iniciar Sesión" el usuario es llevado a la página de Muro donde podrá iniciar la interacción con la red social


    **Criterios de aceptación 2.2**
    * En la página de inicio, el usuario puede iniciar sesión / registrarse al dar click en el botón "Inicie sesión con Google".
    * Se le muestra al usuario, a través de una ventana emergente, la página "Acceso: Cuentas de google - Google Chrome.
    * El usuario debe elegir una cuenta de google para registrarse.
    * El usuario visualiza mensaje de google donde se le indica que Yummy Friends desea acceder a su cuenta de google.
    * El usuario es llevado a la página de Muro de la red social donde podrá iniciar la interacción con la red social.

    **Definición de terminado**
    Cumplimiento de condiciones: Single-page Application (SPA), responsive (móvil, Tablet, PC), testeo manual para búsqueda de errores e imperfecciones simples, pruebas de usabilidad e incorporaron el feedback de los usuarios como mejoras.

  - **Historia de usuario 3**
    ![Alt](/src/imagenes/HU3.JPG)

    **Criterios de aceptación 3.1**
    * El usuario al acceder a la vista "Muro" encontrará un cajón inicial con un área de texto "¿Qué opinas?" donde podrá escribir sus comentarios y publicarlos a través del botón "Publicar"
    * El usuario podrá ver publicado su post despues de cajpon principal. Esta cajón tendra el email del usuario en la parte superior izquierda y en la parte inferior del cajón podrá observar 3 botones: 🤍 (para dar "like"), Borrar y Editar.

    **Criterios de aceptación 3.2**
    * El botón "Editar" solo será visible para el usuario que realizó la publicación.
    * El usuario al dar click en el botón "Editar" observará que su publicación pasará al cajón principal donde podrá modificarlo. Al dar click en el botón "Editar" del cajón principal, este se publicará nuevamente con la nueva información.

    **Criterios de aceptación 3.3**
    * El botón "Borrar" solo será visible para el usuario que realizó la publicación.
    * El usuario al dar click en el botón "Borrar" primero observará un mensaje de confirmación para la eliminación de la publicación; si el usuario da click en "Aceptar", la publicación será eliminada.
    
    **Criterios de aceptación 3.4**

    **Definición de terminado**
    Cumplimiento de condiciones: Single-page Application (SPA), responsive (móvil, Tablet, PC), testeo manual para búsqueda de errores e imperfecciones simples, pruebas de usabilidad e incorporaron el feedback de los usuarios como mejoras.
  


## 3. Diseño de la Interfaz de Usuario

Reflexiona y luego marca los objetivos que has llegado a entender y aplicar en tu proyecto. Piensa en eso al decidir tu estrategia de trabajo.

### HTML

- [ ] **Uso de HTML semántico**

  <details><summary>Links</summary><p>

  * [HTML semántico](https://curriculum.laboratoria.la/es/topics/html/02-html5/02-semantic-html)
  * [Semantics - MDN Web Docs Glossary](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
</p></details>

### CSS

- [ ] **Uso de selectores de CSS**

  <details><summary>Links</summary><p>

  * [Intro a CSS](https://curriculum.laboratoria.la/es/topics/css/01-css/01-intro-css)
  * [CSS Selectors - MDN](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Selectors)
</p></details>

- [ ] **Modelo de caja (box model): borde, margen, padding**

  <details><summary>Links</summary><p>

  * [Box Model & Display](https://curriculum.laboratoria.la/es/topics/css/01-css/02-boxmodel-and-display)
  * [The box model - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
  * [Introduction to the CSS box model - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  * [CSS display - MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/display)
  * [display - CSS Tricks](https://css-tricks.com/almanac/properties/d/display/)
</p></details>

- [ ] **Uso de flexbox en CSS**

  <details><summary>Links</summary><p>

  * [A Complete Guide to Flexbox - CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
  * [Flexbox Froggy](https://flexboxfroggy.com/#es)
  * [Flexbox - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
</p></details>

- [ ] **Uso de CSS Grid Layout**

  <details><summary>Links</summary><p>

  * [A Complete Guide to Grid - CSS Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/)
  * [Grids - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids)
</p></details>

### Web APIs

- [ ] **Uso de selectores del DOM**

  <details><summary>Links</summary><p>

  * [Manipulación del DOM](https://curriculum.laboratoria.la/es/topics/browser/02-dom/03-1-dom-methods-selection)
  * [Introducción al DOM - MDN](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction)
  * [Localizando elementos DOM usando selectores - MDN](https://developer.mozilla.org/es/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
</p></details>

- [ ] **Manejo de eventos del DOM (listeners, propagación, delegación)**

  <details><summary>Links</summary><p>

  * [Introducción a eventos - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Events)
  * [EventTarget.addEventListener() - MDN](https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener)
  * [EventTarget.removeEventListener() - MDN](https://developer.mozilla.org/es/docs/Web/API/EventTarget/removeEventListener)
  * [El objeto Event](https://developer.mozilla.org/es/docs/Web/API/Event)
</p></details>

- [ ] **Manipulación dinámica del DOM**

  <details><summary>Links</summary><p>

  * [Introducción al DOM](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction)
  * [Node.appendChild() - MDN](https://developer.mozilla.org/es/docs/Web/API/Node/appendChild)
  * [Document.createElement() - MDN](https://developer.mozilla.org/es/docs/Web/API/Document/createElement)
  * [Document.createTextNode()](https://developer.mozilla.org/es/docs/Web/API/Document/createTextNode)
  * [Element.innerHTML - MDN](https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML)
  * [Node.textContent - MDN](https://developer.mozilla.org/es/docs/Web/API/Node/textContent)
</p></details>

- [ ] **Ruteado (History API, evento hashchange, window.location)**

  <details><summary>Links</summary><p>

  * [Manipulando el historial del navegador - MDN](https://developer.mozilla.org/es/docs/DOM/Manipulando_el_historial_del_navegador)
</p></details>

### JavaScript

- [ ] **Arrays (arreglos)**

  <details><summary>Links</summary><p>

  * [Arreglos](https://curriculum.laboratoria.la/es/topics/javascript/04-arrays)
  * [Array - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/)
  * [Array.prototype.sort() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
  * [Array.prototype.forEach() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
  * [Array.prototype.map() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
  * [Array.prototype.filter() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
  * [Array.prototype.reduce() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
</p></details>

- [ ] **Objetos (key, value)**

  <details><summary>Links</summary><p>

  * [Objetos en JavaScript](https://curriculum.laboratoria.la/es/topics/javascript/05-objects/01-objects)
</p></details>

- [ ] **Diferenciar entre tipos de datos primitivos y no primitivos**

- [ ] **Variables (declaración, asignación, ámbito)**

  <details><summary>Links</summary><p>

  * [Valores, tipos de datos y operadores](https://curriculum.laboratoria.la/es/topics/javascript/01-basics/01-values-variables-and-types)
  * [Variables](https://curriculum.laboratoria.la/es/topics/javascript/01-basics/02-variables)
</p></details>

- [ ] **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**

  <details><summary>Links</summary><p>

  * [Estructuras condicionales y repetitivas](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/01-conditionals-and-loops)
  * [Tomando decisiones en tu código — condicionales - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/conditionals)
</p></details>

- [ ] **Uso de bucles/ciclos (while, for, for..of)**

  <details><summary>Links</summary><p>

  * [Bucles (Loops)](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/02-loops)
  * [Bucles e iteración - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration)
</p></details>

- [ ] **Funciones (params, args, return)**

  <details><summary>Links</summary><p>

  * [Funciones (control de flujo)](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/03-functions)
  * [Funciones clásicas](https://curriculum.laboratoria.la/es/topics/javascript/03-functions/01-classic)
  * [Arrow Functions](https://curriculum.laboratoria.la/es/topics/javascript/03-functions/02-arrow)
  * [Funciones — bloques de código reutilizables - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions)
</p></details>

- [ ] **Pruebas unitarias (unit tests)**

  <details><summary>Links</summary><p>

  * [Empezando con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/getting-started)
</p></details>

- [ ] **Pruebas asíncronas**

  <details><summary>Links</summary><p>

  * [Tests de código asincrónico con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/asynchronous)
</p></details>

- [ ] **Uso de mocks y espías**

  <details><summary>Links</summary><p>

  * [Manual Mocks con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/manual-mocks)
</p></details>

- [ ] **Módulos de ECMAScript (ES Modules)**

  <details><summary>Links</summary><p>

  * [import - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/import)
  * [export - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/export)
</p></details>

- [ ] **Uso de linter (ESLINT)**

- [ ] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

- [ ] **Diferenciar entre expresiones (expressions) y sentencias (statements)**

- [ ] **Callbacks**

  <details><summary>Links</summary><p>

  * [Función Callback - MDN](https://developer.mozilla.org/es/docs/Glossary/Callback_function)
</p></details>

- [ ] **Promesas**

  <details><summary>Links</summary><p>

  * [Promise - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise)
  * [How to Write a JavaScript Promise - freecodecamp (en inglés)](https://www.freecodecamp.org/news/how-to-write-a-javascript-promise-4ed8d44292b8/)
</p></details>

### Control de Versiones (Git y GitHub)

- [ ] **Git: Instalación y configuración**

- [ ] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**

- [ ] **Git: Integración de cambios entre ramas (branch, checkout, fetch, merge, reset, rebase, tag)**

- [ ] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**

- [ ] **GitHub: Despliegue con GitHub Pages**

  <details><summary>Links</summary><p>

  * [Sitio oficial de GitHub Pages](https://pages.github.com/)
</p></details>

- [ ] **GitHub: Colaboración en Github (branches | forks | pull requests | code review | tags)**

- [ ] **GitHub: Organización en Github (projects | issues | labels | milestones | releases)**

### user-centricity

- [ ] **Diseñar un producto o servicio poniendo a la usuaria en el centro**

### product-design

- [ ] **Crear prototipos de alta fidelidad que incluyan interacciones**

- [ ] [**Seguir los principios básicos de diseño visual**](https://coda.io/d/Bootcamp-UX-Contenido_dqkqk2rV9Z2/Reglas-basicas-de-diseno-visual_suVcO#_lueiZ )

### research

- [ ] **Planear y ejecutar testeos de usabilidad de prototipos en distintos niveles de fidelidad**

 
### 5.5 Responsive


### 5.6 Consideraciones del comportamiento de la interfaz de usuario (UI)

Estas consideraciones te ayudarán a escribir las Definiciones de Terminado de
tus H.U.:

#### Creación de cuenta de usuario e inicio de sesión

* _Login_ con Firebase:
  - Para el _login_ y las publicaciones en el muro puedes utilizar [Firebase](https://firebase.google.com/products/database/)
  - Creación de cuenta de acceso y autenticación con cuenta de correo y
    contraseña, y también con una cuenta de Google.
* Validaciones:
  - Solamente se permite el acceso a usuarios con cuentas válidas.
  - No pueden haber usuarios repetidos.
  - La cuenta de usuario debe ser un correo electrónico válido.
  - Lo que se escriba en el campo (_input_) de contraseña debe ser secreto.
* Comportamiento:
  - Al enviarse el formulario de registro o inicio de sesión, debe validarse.
  - Si hay errores, se deben mostrar mensajes descriptivos para ayudar al
  usuario a corregirlos.

#### Muro/timeline

* Validaciones:
  - Al publicar, se debe validar que exista contenido en el _input_.
* Comportamiento:
  - Al recargar la aplicación, se debe verificar si el usuario está _logueado_
    antes de mostrar contenido.
  - Poder publicar un _post_.
  - Poder dar y quitar _like_ a una publicación. Máximo uno por usuario.
  - Llevar un conteo de los _likes_.
  - Poder eliminar un post específico.
  - Pedir confirmación antes de eliminar un _post_.
  - Al dar _click_ para editar un _post_, debe cambiar el texto por un _input_
    que permita editar el texto y luego guardar los cambios.
  - Al guardar los cambios debe cambiar de vuelta a un texto normal pero con la
    información editada.
  - Al recargar la página debo de poder ver los textos editados.


