const singIn = () => {
    const viewSingIn = `<form>
    <label for="name">Nombre y Apellido</label>
    <input type="text" id="name" placeholder="Escribe tu nombre y apellido">

    <label for="user">Usuario</label>
    <input type="text" id="user" placeholder="Escribe tu usuario">

    <label for="email">Correo</label>
    <input type="email" id="email" placeholder="Escribe tu correo">

    <label for="password">Contraseña</label>
    <input type="password" id="password" placeholder="Escribe tu contraseña">

    <p>- o -</p>
    <a href="#">Registrate con Google</a>
    
    <button type="submit">Continuar</button>

    </form>`

    return viewSingIn;
};

export default singIn;