import { onNavigate } from '../main.js'
import { signInUser } from '../firebase/connection.js';

export const login = () => {
    const div = document.createElement('div');

    const title = document.createElement('h1')
    title.textContent = 'Enjoy the World' 

    const loginEmail = document.createElement('input');
    loginEmail.classList.add('input');
    loginEmail.setAttribute('type', 'email');
    loginEmail.setAttribute('id', 'emailLogin');
    loginEmail.setAttribute('placeholder', 'E-mail');
    loginEmail.setAttribute('required', '');

    const loginPassword = document.createElement('input');
    loginPassword.classList.add('input');
    loginPassword.setAttribute('type', 'password');
    loginPassword.setAttribute('id', 'passwordLogin');
    loginPassword.setAttribute('placeholder', 'contraseña');
    loginPassword.setAttribute('required', '');

    const loginButton = document.createElement('button');
    loginButton.textContent = 'Iniciar Sesión'
    loginButton.setAttribute('class', 'butonLogin button');

    const question = document.createElement('h3');
    question.textContent = '¿Olvidaste tu Contraseña?'
    const here =document.createElement ('h3')
    here.textContent = 'Aquí'
    const buttonBack = document.createElement('button');
    buttonBack.textContent = 'Regresar'
       
    loginButton.addEventListener('click', ()=>{
        onNavigate('/');//Debería dirigir al Home, muro o perfil
    });
    buttonBack.addEventListener('click', ()=>{
        onNavigate('/');
    });

    const errorText = document.createElement('p');
    errorText.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailL = loginEmail.value;
        const passL = loginPassword.value;
        signInUser(emailL, passL);
    });

    div.append(title, loginEmail, loginPassword, loginButton, question, here, buttonBack)

    return div;
};