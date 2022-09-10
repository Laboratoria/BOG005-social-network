const welcome = () => {
  const view = `<section id="sectionWelcomeId" class="sectionWelcome"> <article class="articleWelcome"> 
      <h1 class="title">Bienvenidos a CICLAPP</h1>
      <p class="welcomeText">¿Te gusta el ciclismo? </p><p class="welcomeText">¡Esta red social es para ti!</p>
      <a href="#formSignIn" class="loginButton" id="loginButtonId">Registrate</a>
      <button type="button" class="signIn">Iniciar Sección</button>
      <a href="#" id="continue" class="continue">Continuar sin registrarse</a>
      </article> </section>`;
  return view;
};

// <button type="button" class="loginButton" id="loginButtonId">Registrate</button>
export default welcome;
