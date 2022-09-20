import { onNavigate } from '../main.js'

export const landing = () => {
    const div = document.createElement('div');
    const title = document.createElement('h1')
    const buttonRegister = document.createElement('button');
    const question = document.createElement('h3');
    const buttonLogin = document.createElement('button');
    const buttonBack = document.createElement('button')

    title.textContent = 'Enjoy the World'
    buttonRegister.textContent = 'Regístrate con Email'
    question.textContent = '¿Ya tienes una cuenta?'
    buttonLogin.textContent = 'Iniciar Sesión'
    buttonBack.textContent = 'Regresar'

    buttonRegister.addEventListener('click', ()=>{
        onNavigate('/register');
    });
    buttonLogin.addEventListener('click', ()=>{
        onNavigate('/login');
    });
    buttonBack.addEventListener('click', ()=>{
        onNavigate('/');
    });
   

    div.append(title, buttonRegister, question, buttonLogin, buttonBack)

    return div;
};
