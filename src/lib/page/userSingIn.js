const userSingIn = () => {
    const viewUserSingIn = `<form>
    <label for="userSi">Usuario</label>
    <input type="text" id="userSi" placeholder="Escribe tu usuario">

    <label for="passwordSi">Contraseña</label>
    <input type="password" id="passwordSi" placeholder="Escribe tu contraseña">

    <p>- o -</p>
    <a href="#">Registrate con Google</a>
    
    <button type="submit">Continuar</button>
  </form>`

  return viewUserSingIn;
}

export default userSingIn;