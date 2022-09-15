const welcome = () => {
  const view = `<header id="header" class="headerClass">
  <figure class="figureWelcome"> 
  <img src="img/Logo.png" alt="LogoCICLAPP" class="logo">
</figure> 
</header>
<section id="sectionWelcomeId" class="sectionWelcome"> <article class="articleWelcome"> 
      <h1 class="title">Bienvenidos a CICLAPP</h1>
      <p class="welcomeText">¿Te gusta el ciclismo? </p><p class="welcomeText">¡Esta red social es para ti!</p>
      <a href="#signIn" class="loginButton" id="loginButtonId">Registrate</a>
      <a href="#userSignIn" type="button" class="signIn">Iniciar Sesión</a>
      <a href="#wall" id="continue" class="continue">Continuar sin registrarse</a>
      </article> </section>`;
  return view;
};

// <button type="button" class="loginButton" id="loginButtonId">Registrate</button>
export default welcome;
