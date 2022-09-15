import { onNavigate } from '../main.js'

export const landing = () => {
    const div = document.createElement('div');
    const title = document.createElement('h1')
    const buttonRegister = document.createElement('button');
    const question = document.createElement('h3');
    const buttonLogin = document.createElement('button');
    const buttonBack = document.createElement('button')

    title.textContent = 'Festejando por el Mundo'
    buttonRegister.textContent = 'Registrarse con Email'
    question.textContent = '¿Ya tienes una cuenta?'
    buttonLogin.textContent = 'Iniciar Sesión'
    buttonBack.textContent = 'Regresar'

    buttonLogin.addEventListener('click', ()=>{
        onNavigate('/register');
    })
   

    div.append(title, buttonRegister, question, buttonLogin, buttonBack)

    return div;
};
