const signIn = () => {
  const viewSignIn = `<section class="viewSignIn">
    
        <figure class="logoSignIn">
        <img src="lib/img/Logo.png" alt="LogoCICLAPP" class="logoHorizontal"> 
        <figcaption class="textLogo">CICLAPP</figcaption>
    </figure>

    <form class="formSignIn">
<article class="itemsInput">
    <label for="name">Nombre y Apellido</label>
    <input type="text" id="name" placeholder="Escribe tu nombre y apellido" value="" autocomplete="off">
</article>

<article class="itemsInput">
    <label for="user">Usuario</label>
    <input type="text" id="user" placeholder="Escribe tu usuario" autocomplete="off">
</article>

<article class="itemsInput">
    <label for="email">Correo</label>
    <input type="email" id="email" placeholder="Escribe tu correo" autocomplete="off">

</article>

<article class="itemsInput">
    <label for="password">Contraseña</label>
    <input type="password" id="password" placeholder="Escribe tu contraseña" autocomplete="off">
</article>
   
    </form> 

    <p class="o">- O -</p>

    <button type="button" class="googleSignIn">
    <img src="lib/img/logo_google.svg" alt="GoogleIcon" class="GoogleIcon">
    <span>Registrate con Google</span>
    </button>
    
    <button type="submit" class="submitSignIn">Continuar</button>
    
</section>`;

  return viewSignIn;
};

export default signIn;
