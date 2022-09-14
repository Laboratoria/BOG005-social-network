export const iniciarSesion = () => {
     const iniciosesion = document.createElement("section");
     iniciosesion.className="login"
     iniciosesion.innerHTML = `
      <div class="container">
	     <figure class="imagenDescripcion">
		     <img class="imgLogo" src="IMG/Explore-removebg-preview.png">
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