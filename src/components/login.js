import { onNavigate } from '../main.js'

export const login = () => {
    const div = document.createElement('div');
    const title = document.createElement('h1')
    const inputEmail = document.createElement('input');
    const inputPasword = document.createElement('input');
    const buttonStart = document.createElement('button');
    const question = document.createElement('h3');
    const here =document.createElement ('h3')
    const buttonBack = document.createElement('button');

    title.textContent = 'Festejando por el Mundo'    
    inputEmail.textContent = 'Email'
    inputPasword.textContent = 'Contraseña'
    buttonStart.textContent = 'Iniciar Sesión'
    question.textContent = '¿Olvidaste tú Contraseña?'
    here.textContent = 'Aqui'
    buttonBack.textContent = 'Regresar'

    buttonStart.addEventListener('click', ()=>{
        onNavigate('/');
    });
    buttonBack.addEventListener('click', ()=>{
        onNavigate('/');
    });

    div.append(title, inputEmail, inputPasword, buttonStart, question, here, buttonBack)

    return div;
};