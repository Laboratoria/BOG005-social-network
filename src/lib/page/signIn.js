const signIn = () => {
  const form = document.createElement('form');
  form.setAttribute('class', 'formSignIn');

  const article = document.createElement('article');
  article.setAttribute('class', 'itemsInput');

  const label = document.createElement('label');
  label.setAttribute('for', 'name');
  label.textContent = 'Nombre y Apellido:';

  const inputName = document.createElement('input');
  inputName.setAttribute('id', 'name');
  inputName.setAttribute('type', 'text');
  inputName.setAttribute('placeholder', 'Escribe tu nombre y apellido');

  article.append(label, inputName);

  const buttonContinue = document.createElement('button');
  buttonContinue.setAttribute('id', 'submitContinueButton');
  buttonContinue.textContent = 'Continuar';
  const elements = {
    article,
    buttonContinue,
  };
//   console.log(typeof elements.buttonContinue);
//   console.log(typeof elements.inputName);
  return elements;
};

export default signIn;

// const signIn = () => {
//     const viewSignIn = `<section class="viewSignIn">

//   <figure class="logoSignIn">
//       <img src="lib/img/Logo.png" alt="LogoCICLAPP" class="logoHorizontal">
//       <figcaption class="textLogo">CICLAPP</figcaption>
//   </figure>

//   <form class="formSignIn">
//       <article class="itemsInput">
//       <label for="name">Nombre y Apellido</label>
//       <input type="text" id="name" placeholder="Escribe tu nombre y apellido"
//       value="" autocomplete="off">
//       </article>

//       <article class="itemsInput">
//           <label for="user">Usuario</label>
//           <input type="text" id="user" placeholder="Escribe tu usuario" autocomplete="off">
//       </article>

//       <article class="itemsInput">
//           <label for="email">Correo</label>
//           <input type="email" id="email" placeholder="Escribe tu correo" autocomplete="off">

//       </article>

//       <article class="itemsInput">
//           <label for="password">Contraseña</label>
//           <input type="password" id="password" placeholder="Escribe tu contraseña"
//           autocomplete="off">
//       </article>
//   </form>

//   <p class="o">- O -</p>
//   <button type="button" class="googleSignIn">
//       <img src="lib/img/logo_google.svg" alt="GoogleIcon" class="GoogleIcon">
//       <span>Registrate con Google</span>
//   </button>

//   <button type="button" class="submitSignIn" id="submitContinueButton">Continuar</button>
//   </section>`;

//     return viewSignIn;
//   };

//   export default signIn;
