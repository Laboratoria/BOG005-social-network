const welcome = () => {
  const view = `<section id="sectionWelcomeId" class="sectionWelcome"> <article class="articleWelcome"> 
      <h1 class="title">Bienvenidos a CICLAPP</h1>
      <p class="welcomeText">¿Te gusta el ciclismo? </p><p class="welcomeText">¡Esta red social es para ti!</p>
      <button type="button" class="loginButton" id="loginButtonId">Registrate</button>
      <button type="button" class="signIn">Iniciar Sección</button>
      <a href="#" id="continue" class="continue">Continuar sin registrarse</a>
      </article> </section>`;
  return view;
};

export default welcome;
