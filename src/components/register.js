import { onNavigate } from "../main.js";

export const register = () => {
    const div = document.createElement('div');
    const title = document.createElement('h2')
    const button = document.createElement('button');
    const buttonBack = document.createElement('button');
    const inputEmail= document.createElement('input');
    const inputPass= document.createElement('input');

    button.textContent = 'crear cuenta';
    buttonBack.textContent='Regresa'
    title.textContent = 'Inicia Sesión';
    button.addEventListener('click',()=>{
        onNavigate('/');
    });
    buttonBack.addEventListener('click',()=>{
        onNavigate('/');
    });
    div.append(title, inputEmail, inputPass, button, buttonBack);

    return div;
};
