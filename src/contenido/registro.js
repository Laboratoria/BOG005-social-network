// import { onNavigate } from "../main.js";

export const registro = () => {
    const div = document.createElement('div');
        const buttonRegistro = document.createElement('button');
        buttonRegistro.textContent = "Regístrate";
        div.append(buttonRegistro);
    return div;
};