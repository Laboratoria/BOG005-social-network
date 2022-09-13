export const iniciarSesion = () => {
     const iniciosesion = document.createElement("section");
     iniciosesion.className="login"
     iniciosesion.innerHTML =

       `
       <div class="container">
       <h1 class="titulo">Explorer</h1>
       <figure class="imagenDescripcion">
       <img class="imginInisioSesion" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/travel-%26-tourism-logo-design-template-c613bcb6c381ed8ead4ce8549a79edda_screen.jpg?ts=1599762630">
       <figcaption>Leyenda de imágen del contenido de la pagina</figcaption>
       </figure> 
       <div class="containerDatos"> 
         <input type="text" name="" id="" class="camapoTexto" placeholder="Correo">
         <input type="password" pattern=".{6,}" name="" id="" class="camapoTexto" placeholder="Contraseña">
         <button class="buttonIniciar"><a href="#">Iniciar sesion</a></button>
         <p class="inicioGogle"><a href="#">Iniciar con Gogle</a></p>
         <p class="registrarse">¿No tienes cuenta?<a href="#">Registrate</a></p>

        </div> 
       </div> 
        `
        
           return iniciosesion; 
        };