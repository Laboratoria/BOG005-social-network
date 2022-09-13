export default () => {
    const registerSection = document.createElement('div');
    registerSection.style.width='80vw';
    const viewRegister = `
    <main>
    <section id="contenedor">

    <article id="contenedorcentrado">
        <section id="singin">
        <h1>SingIn</h1>
            <form id="singinform">

            <label for="name">Name</label>
                <input id="name" type="text" name="name" placeholder="Name" required>
                <label for="usuario">Usuario</label>
                <input id="usuario" type="text" name="usuario" placeholder="Usuario" required>
                <label for="password">Contraseña</label>
                <input id="password" type="password" placeholder="Contraseña" name="password" required>
                <button type="submit" title="SingIn" name="SingIn">Sing In</button>
            </form>

        </section>

    </article>
</section>
    </main>`
    registerSection.innerHTML=viewRegister;
    return registerSection;
};
