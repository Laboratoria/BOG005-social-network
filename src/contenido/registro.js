// import { onNavigate } from "../main.js";
import { crearUsuario} from "../lib/firebase.js";
export const registro = () => {
    //Se crean las etiquetas
    const div = document.createElement('div');
    const logo = document.createElement('img');
    const enlaceInicio = document.createElement ('a');
    const textoLogin = document.createElement ('h3');
    let login = document.createTextNode("Iniciar Sesión"); 
    const formulario = document.createElement('form');
    const correoUsuario = document.createElement('input');
    const contraseñaUsuario = document.createElement('input');
    const buttonRegistro = document.createElement('button');
    buttonRegistro.addEventListener('click',()=>{
        crearUsuario(contraseñaUsuario.value,contraseñaUsuario.value)
    })
    
    //Se muestran en pantalla 
    textoLogin.textContent = "¿Ya tienes cuenta en Explora Colombia?";
    enlaceInicio.appendChild(login);
    enlaceInicio.title="Iniciar Sesión";
    enlaceInicio.href="https://developer.mozilla.org/es/docs/Web/API/Node/appendChild";
    document.body.appendChild(enlaceInicio)
    formulario.textContent = "Registrate para conocer más de Colombia y guarda tus momentos inolvidables.";
    correoUsuario.setAttribute ('placeholder',"Correo Electronico") ;
    contraseñaUsuario.setAttribute ('placeholder',"Contraseña Usuario") ;
    buttonRegistro.textContent = "Regístrate";
    logo.src = '/imagenes/Recurso 1.png';
    
    //Agregamos elementos a nuestro div
    div.append(logo,textoLogin,enlaceInicio,formulario,correoUsuario,contraseñaUsuario,buttonRegistro);
    return div;

};
