const welcome = () => {
  const view = `<article class="articleWelcome"> 
      <h1 class="title">Bienvenidos a CICLAPP</h1>
      <p>¿Te gusta el ciclismo? </p><p>¡Esta red social es para ti!</p>
      <button type="button" class="loginButton">Registrate</button>
      <button type="button" class="signIn">Iniciar Sección</button>
      <a href="#" id="continue" class="continue">Continuar sin registrarse</a>
      </article>`;
  return view;
};

export default welcome;
