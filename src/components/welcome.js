import { onNavigate } from "../main.js";

export const welcome = () => {
    const div = document.createElement('div');
    const title = document.createElement('h2')
    const buttonStart = document.createElement('button');


    buttonStart.textContent = 'Inicia tu viaje'
    title.textContent = 'Somos la mejor red social'

    buttonStart.addEventListener('click',()=>{
        onNavigate('/landing');

    });
    buttonStart.addEventListener('click',()=>{
        onNavigate('/landing');

    });
    div.append(title, buttonStart);

    return div;
};
