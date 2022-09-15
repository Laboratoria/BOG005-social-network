// import getFormData from '../utils/formValidator.js';

const userSignIn = () => {
  const viewUserSignIn = `<form>
    <label for="userSi">Usuario</label>
    <input type="text" id="userSi" placeholder="Escribe tu usuario">

    <label for="passwordSi">Contraseña</label>
    <input type="password" id="passwordSi" placeholder="Escribe tu contraseña">

    <p>- O -</p>
    <a href="#">Registrate con Google</a>
    
    <button type="submit" id="submitContinue">Continuar</button>

    <a href="#signIn" id="goToRegisterId" class="continue userRegister">¿No tienes una cuenta? Registrate</a>
  </form>`;

  return viewUserSignIn;
};

export default userSignIn;
