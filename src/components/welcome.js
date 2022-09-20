import { onNavigate } from '../main.js'

export const welcome = () =>{
    const div = document. createElement('div');
    const title= document.createElement('h1')
    const mensage= document.createElement('h2')
    const buttonStart= document.createElement('button');
    
    title.textContent='Enjoy the World'
    mensage.textContent='Disfruta las diversas festividades alrededor del mundo sin salir de casa y antójate de participar'
    buttonStart.textContent='Inicia tu viaje' 

    buttonStart.addEventListener('click', ()=>{
        onNavigate('/landing');
    })
    
    div.append(title, mensage, buttonStart)
    
    return div;
};