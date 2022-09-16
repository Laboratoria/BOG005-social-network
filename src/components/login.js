export const login = () => {
	const sectionLogin = document.createElement('section');
	sectionLogin.className = 'sectionLogin';
	sectionLogin.innerHTML = `<section class="login">
	<div class="container">
		<figure class="imagenDescripcion">
			<img class="imgLogo" src="IMG/Explore-removebg-preview.png">
			<figcaption>Leyenda de imágen del contenido de la pagina</figcaption>
		</figure>
		<form class="containerDatos">
			<input type="text" name="" id="" class="camapoTexto" placeholder="Correo">
			<input type="password" pattern=".{6,}" name="" id="" class="camapoTexto" placeholder="Contraseña">
			<button class="buttonIniciar"><a href="#">Iniciar sesion</a></button>
			<p class="inicioGogle"><a href="#">Iniciar con Gogle</a></p>
			<p class="registrarse">¿No tienes cuenta?<a href="#register">Registrate</a></p>
		</form>
	</div>
   </section>`;
  
	  return sectionLogin;
  
	  }