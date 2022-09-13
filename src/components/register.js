export const register = () => {
    const registrar = document.createElement("section");
    registrar.className="login"
    registrar.innerHTML =

      `
      <div class="container">
      <h1 class="titulo">Explorer</h1>
      <figure class="imagenDescripcion">
      <img class="imginInisioSesion" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/travel-%26-tourism-logo-design-template-c613bcb6c381ed8ead4ce8549a79edda_screen.jpg?ts=1599762630">
      <figcaption>Leyenda de imágen del contenido de la pagina</figcaption>
      </figure> 
      <div class="containerDatos"> 
        <input type="text" name="" id="" class="camapoTexto" placeholder="Nombre">
        <input type="text" name="" id="" class="camapoTexto" placeholder="Correo">
        <input type="password" pattern=".{6,}" name="" id="" class="camapoTexto" placeholder="Contraseña">
        <button class="buttonIniciar"><a href="#">Registrarse</a></button>
        <p class="registrarse">¿Ya eres miembro?<a href="#">Iniciarsesión</a></p>
       </div> 
      </div> 
       `
       
          return registrar; 
       };