const signIn = () => {
    const viewSignIn = `<section class="viewSignIn">
    
        <figure class="logoSignIn">
        <img src="lib/img/LogoHorizontal.png" alt="LogoCICLAPP" class="logoHorizontal">     
    </figure>

    <form class="formSignIn">
<div>
    <label for="name">Nombre y Apellido</label>
    <input type="text" id="name" placeholder="Escribe tu nombre y apellido">
</div>

<div>
    <label for="user">Usuario</label>
    <input type="text" id="user" placeholder="Escribe tu usuario">
</div>

<div>
    <label for="email">Correo</label>
    <input type="email" id="email" placeholder="Escribe tu correo">

</div>

<div>
    <label for="password">Contraseña</label>
    <input type="password" id="password" placeholder="Escribe tu contraseña">
</div>
   
    </form> 

    <p class="o">- o -</p>

    <button type="button" class="googleSignIn"><img src="lib/img/logo_google.svg" alt="GoogleIcon" class="GoogleIcon">Registrate con Google</button>
    
    <button type="submit" class="submitSignIn">Continuar</button>
    
</section>`

    return viewSignIn;
};

export default signIn;