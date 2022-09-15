import { onNavigate } from '../main.js'

export const register = () => {
    const div = document.createElement('div');
    const title = document.createElement('h1')
    const inputName = document.createElement('input');
    const inputLastName = document.createElement('input');
    const inputEmail = document.createElement('input');
    const inputPasword = document.createElement('input');
    const buttonRegister = document.createElement('button');
    const question = document.createElement('h3');
    const session =document.createElement ('h3')
    const buttonBack = document.createElement('button');

    title.textContent = 'REGISTRATE'
    inputName.textContent = 'Nombre'
    inputLastName.textContent = 'Apellido'
    inputEmail.textContent = 'Email'
    inputPasword.textContent = 'Contraseña'
    buttonRegister.textContent = 'Registrate'
    question.textContent = '¿Ya eres miembro?'
    session.textContent = 'Inicia tú sesión'
    buttonBack.textContent = 'Regresar'

    buttonRegister.addEventListener('click', () => {
        onNavigate('/login');
    })
    buttonBack.addEventListener('click', ()=>{
        onNavigate('/');
    });


    div.append(title, inputName, inputLastName, inputEmail, inputPasword, buttonRegister, question, session, buttonBack)

    return div;
};