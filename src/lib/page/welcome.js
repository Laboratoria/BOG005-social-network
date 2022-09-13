const welcome = () => {
  const view = `<header id="header" class="headerClass">
  <figure class="figureWelcome"> 
  <img src="lib/img/Logo.png" alt="LogoCICLAPP" class="logo">
</figure> 
</header>
<section id="sectionWelcomeId" class="sectionWelcome"> <article class="articleWelcome"> 
      <h1 class="title">Bienvenidos a CICLAPP</h1>
      <p class="welcomeText">¿Te gusta el ciclismo? </p><p class="welcomeText">¡Esta red social es para ti!</p>
      <a href="#signIn" class="loginButton" id="loginButtonId">Registrate</a>
      <a href="#userSignIn" type="button" class="signIn">Iniciar Sección</button>
      <a href="#wall" id="continue" class="continue">Continuar sin registrarse</a>
      </article> </section>`;
  return view;
};

export default welcome;
