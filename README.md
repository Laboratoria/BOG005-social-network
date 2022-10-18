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

  **Criterios de aceptación:**
    * El usuario encontrará un formulario donde debe ingresar: Nombre, correo electrónico, Crear una contraseña y confirmarla. Finalmente dar click en botón "Regístrate"
    * Si el usuario ingresa un correo que ya ha sido registrado previamente, se mostrara un mensaje "Email ya en uso"
    * Si el usuario no nos da un correo válido (que no agrega el @ o el .com), se mostrara un mensaje "Email inválido"
    * Si el usuario ingresa menos de 6 caracteres en contraseña, se mostrará un mensaje "La contraseña es demasiado débil. Como mínimo debe tener 6 caracteres".
    * Al dar click en el botón "Regístrate" el usuario es llevado a la página del Muro con un mensaje "Registro exitoso. Bienvenid@"
    

  **Definición de terminado:**
  Cumplimiento de condiciones: Single-page Application (SPA), responsive (móvil, Tablet, PC), testeo manual para búsqueda de errores e imperfecciones simples, pruebas de usabilidad e incorporaron el feedback de los usuarios como mejoras.

  - **Hisotria de usuario 2**

    ![Alt](/src/imagenes/HU2.JPG)

    **Criterios de aceptación 2.1:**
    * El usuario encontrará dos campos a diligenciar: Correo electrónico y contraseña. Finalmente dar click en botón "Iniciar Sesión".
    * Si el usuario no nos da un correo válido (que no agrega el @ o el .com), se mostrara un mensaje "Email inválido".
    * Si el usuario no diligencia la contraseña, se mostrará un mensaje "Ingrese una contraseña"
    * Si el usuario no diligencia la contraseña correcta, se mostrará un mensaje "Contraseña incorrecta"
    * Al dar click en el botón "Iniciar Sesión" el usuario es llevado a la página de Muro donde podrá iniciar la interacción con la red social


    **Criterios de aceptación 2.2:**  
    * En la página de inicio, el usuario puede iniciar sesión / registrarse al dar click en el botón "Inicie sesión con Google".
    * Se le muestra al usuario, a través de una ventana emergente, la página "Acceso: Cuentas de google - Google Chrome.
    * El usuario debe elegir una cuenta de google para registrarse.
    * El usuario visualiza mensaje de google donde se le indica que Yummy Friends desea acceder a su cuenta de google.
    * El usuario es llevado a la página de Muro de la red social donde podrá iniciar la interacción con la red social.

    **Definición de terminado:**
    Cumplimiento de condiciones: Single-page Application (SPA), responsive (móvil, Tablet, PC), testeo manual para búsqueda de errores e imperfecciones simples, pruebas de usabilidad e incorporaron el feedback de los usuarios como mejoras.

  - **Historia de usuario 3**

    ![Alt](/src/imagenes/HU3.JPG)

    **Criterios de aceptación 3.1:**
    * El usuario al acceder a la vista "Muro" encontrará un cajón inicial con un área de texto "¿Qué opinas?" donde podrá escribir sus comentarios y publicarlos a través del botón "Publicar"
    * El usuario podrá ver publicado su post despues de cajpon principal. Esta cajón tendra el email del usuario en la parte superior izquierda y en la parte inferior del cajón podrá observar 3 botones: 🤍 (para dar "like"), Borrar y Editar.

    **Criterios de aceptación 3.2:**
    * El botón "Editar" solo será visible para el usuario que realizó la publicación.
    * El usuario al dar click en el botón "Editar" observará que su publicación pasará al cajón principal donde podrá modificarlo. Al dar click en el botón "Editar" del cajón principal, este se publicará nuevamente con la nueva información.

    **Criterios de aceptación 3.3:**
    * El botón "Borrar" solo será visible para el usuario que realizó la publicación.
    * El usuario al dar click en el botón "Borrar" primero observará un mensaje de confirmación para la eliminación de la publicación; si el usuario da click en "Aceptar", la publicación será eliminada.

    **Criterios de aceptación 3.4:**
    * El usuario verá tanto en sus publicaciones asi como en las de otros usuarios un botón en forma de 🤍 donde podrá dar "like" o me gusta una sola vez por publicación.


    **Definición de terminado:**
    Cumplimiento de condiciones: Single-page Application (SPA), responsive (móvil, Tablet, PC), testeo manual para búsqueda de errores e imperfecciones simples, pruebas de usabilidad e incorporaron el feedback de los usuarios como mejoras.
  


## 3. Diseño de la Interfaz de Usuario (Prototipos)

  **Prototipo de baja fidelidad**

  * **Vista Móvil**

  ![Alt](/src/imagenes/Prototipo%20baja-movil.jpg)

  * **Vista PC**

  ![Alt](/src/imagenes/Prototipo%20baja-pc.jpg)


  **Prototipo de alta fifelidad**

  * **Vista Móvil**

  ![Alt](/src/imagenes/Prototipo%20alta-movil.JPG)

  * **Vista PC**

  ![Alt](/src/imagenes/Prototipo%20alta-pc.JPG)


  **Test de Usabilidad**

  ![Test de Usabilidad - Maze app](https://app.maze.co/report/Test-usabilidad-HU1/7beqail8dmuu2w/intro)
  
  Con base en los resutados obtenidos en el test de usabilidad, se decidieron realizar ajustes en cuanto a: Eliminiar los campos de nombre y apellido del formulario de registro con correo electrónico, eliminar registro con Google ya que con era suficiente con el que estuviera en el inicio de sesión y adecuar las opciones de "Like", "Borrar" y "Editar" en forma de botones.  
