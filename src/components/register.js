export const register = () => {
    const registrar = document.createElement("section");
    registrar.className="login"
    registrar.innerHTML =

      `
      <div class="container">
	<figure class="imagenDescripcion">
		<img class="imginInisioSesion" src="IMG/Explore-removebg-preview.png">
		<figcaption>Leyenda de imágen del contenido de la pagina</figcaption>
	</figure>
	<form class="containerDatos">
		<input type="text" name="" id="" class="camapoTexto" placeholder="Nombre">
		<input type="text" name="" id="" class="camapoTexto" placeholder="Correo">
		<input type="password" pattern=".{6,}" name="" id="" class="camapoTexto" placeholder="Contraseña">
		<button class="buttonIniciar"><a href="#">Registrarse</a></button>
		<p class="registrarse">¿Ya eres miembrooooo?<a href="#">Iniciarsesión</a></p>
	</form>
     </div>
       `
       
          return registrar; 
       };