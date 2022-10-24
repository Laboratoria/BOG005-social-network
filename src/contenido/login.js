import { onNavigate } from "../main.js";
import { iniciarlogin, crearUsuarioConGoogle } from "../lib/firebase.js";

export const login = () => {
  const contenedorLogin = document.createElement("div");
  contenedorLogin.id = "contenedor-login";

  const logoLogin = document.createElement("img");
  logoLogin.id = "logologin";
  const formularioLogin = document.createElement("form");
  formularioLogin.id = "formulario-login";
  const correoLogin = document.createElement("input");
  correoLogin.id = "correo-login";
  const contraseñaLogin = document.createElement("input");
  contraseñaLogin.id = "contraseña-login";
  const buttoniniciaSesion = document.createElement("button");
  buttoniniciaSesion.id = "iniciarsesion-login";
  const botonRegistro = document.createElement("button");
  botonRegistro.id = "registro-login";
  const butonGoogle = document.createElement("button");
  butonGoogle.id = "Google";

  buttoniniciaSesion.addEventListener("click", () => {
    iniciarlogin(correoLogin.value, contraseñaLogin.value)
      .then(() => {
        // console.log("iniciarlogin")
        if (contraseñaLogin.value =='') {
          swal({
            title: "¡Escribe tu contraseña!",
            text: "Tu contraseña debe tener mínimo seis dígitos",
            icon: "error",
          });
        }
        if (correoLogin.value == '') {
          swal({
            title: "¡Escribe tu correo!",
            text: "Debes escribir un correo para ingresar",
            icon: "error",
          });
        }
      })
      .catch(() => {
        console.log("hay un error");
      });
  });

  botonRegistro.addEventListener("click", () => {
    onNavigate("/registro");
  });
  logoLogin.src = "/imagenes/Recurso22.png";
  correoLogin.setAttribute("placeholder", "Correo Electronico");
  contraseñaLogin.setAttribute("placeholder", "Contraseña Usuario");
  contraseñaLogin.setAttribute("type", "password");
  buttoniniciaSesion.textContent = "Iniciar Sesión";
  botonRegistro.textContent = "Registrate";
  butonGoogle.textContent = "";

  //  para logiarce  con el boton de google

  butonGoogle.addEventListener("click", () => {
    crearUsuarioConGoogle()
      .then(() => {
        console.log("crearUsuarioConGoogle");
      })
      .catch(() => {
        console.log("hay un error");
      });
  });

  contenedorLogin.append(
    formularioLogin,
    logoLogin,
    correoLogin,
    contraseñaLogin,
    buttoniniciaSesion,
    botonRegistro,
    butonGoogle
  );
  return contenedorLogin;
};
