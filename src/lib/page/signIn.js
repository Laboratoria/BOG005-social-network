const signIn = () => {
    const viewSignIn = `
    <figure class="logoSignIn">
      <img src="img/Logo.png" alt="LogoCICLAPP" class="logoHorizontal">
      <figcaption class="textLogo">CICLAPP</figcaption>
  </figure>

  <form class="formSignIn" id="formSignInId">
      <article class="itemsInput">
      <label for="name">Nombre y Apellido</label>
      <input type="text" id="name" placeholder=" Ingresa tu nombre"
      value="" autocomplete="off">
      </article>

      <article class="itemsInput">
          <label for="user">Usuario</label>
          <input type="text" id="user" placeholder=" Ingresa tu usuario" autocomplete="off">
      </article>

      <article class="itemsInput" id="emailContent">
          <label for="email"  id="labelEmailId">Correo</label>
          <img src="">
          <input type="text" id="email" placeholder="Ingresa tu correo" autocomplete="off">
      </article>

      <article class="itemsInput" id="passwordContent">
          <label for="password" id="labelPasswordId" >Contraseña</label>
          <input type="password" id="password" placeholder="Ingresa contraseña"
          autocomplete="off">
      </article>

  <p class="o">- O -</p>
  <button type="button" class="googleSignIn" id="googleButton">
      <img src="img/logo_google.svg" alt="GoogleIcon" class="GoogleIcon">
      <span>Registrate con Google</span>
  </button>

  <button type="button" class="submitSignIn" id="submitContinueButton">Continuar</button>
  <a href="#userSignIn" id="userRegisterId" class="continue userRegister">¿Ya tienes una cuenta? inicia sesión
  </a>
  </form>`;


    const registerContainer = document.createElement('section');
    registerContainer.setAttribute('class', 'viewSignIn');
    registerContainer.setAttribute('id', 'signIn');
    registerContainer.innerHTML = viewSignIn;

    registerContainer.querySelector('#submitContinueButton').addEventListener('click',() => {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const result = createUser(auth, email, password);
        result.then((userCredential) => {
            console.log('Se ejecuta then')
            showSuccessfulResponse();
            if (userCredential) {
                window.location.href = '#wall';
                localStorage.setItem('Username', `${dataForm.name}`);
                const getName = localStorage.getItem('Username');
                const contentPost = document.querySelector('#wallOffPublication');
                if (contentPost) {
                    contentPost.innerHTML += `<h1 id="greetingUserId" class="greetingUser">Hola ${getName}!</h1>`;
                }
            }
        })
            .catch((error) => {
                const errorCode = error.code;
                console.log(errorCode)
                console.log('Esto es un error')
                showMessageError(errorCode)
            });
    })
    console.log('Este es signIn',registerContainer)
    return registerContainer
};


export { signIn };
