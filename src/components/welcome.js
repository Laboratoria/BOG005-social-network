export const welcome = () =>{
    const div = document. createElement('div');
    const buttonStart= document.createElement('button');
    buttonStart.textContent='Inicia tu viaje' 
    div.append(buttonStart)
    return div;
};