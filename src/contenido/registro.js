import { onNavigate } from "../main";
import(onNavigate)
export const registro = () => {
    const div = document.createElement('div');
        const buttonRegistro = document.createElement('button');
        buttonRegistro.textContent = "Regístrate";
        div.append(buttonInicio,buttonRegistro);
    return div;
};