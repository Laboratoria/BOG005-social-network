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
  </form>`;

  return viewUserSignIn;
};
/* <button type="submit" id="submitContinue" onclick=${getFormData()}>Continuar</button> */

export default userSignIn;
