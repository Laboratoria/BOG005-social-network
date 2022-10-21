import { crearUsuario, crearUsuarioConGoogle } from "../lib/firebase.js";

export const registro = () => {
  // Se crean las etiquetas
  const contenedorRegistro = document.createElement('div');
  contenedorRegistro.id = 'contenedor-registro'
  const logo = document.createElement('img');
  logo.id = 'logo-registro';
  const login = document.createTextNode('Iniciar Sesión');
  login.id = 'inicioSesion';
  const formulario = document.createElement('form');
  formulario.id = 'formulario';
  const correoUsuario = document.createElement('input');
  correoUsuario.id = 'correo';
  const contraseñaUsuario = document.createElement('input');
  contraseñaUsuario.id = 'contraseña';
  const buttonRegistro = document.createElement('button');
  buttonRegistro.id = 'registro';
  const buttonGoogle = document.createElement('button');
  buttonGoogle.id = 'google';
  buttonRegistro.addEventListener('click', () => {
    // 1er camino para cuando todo esta ok
    // 2do camino cuando algo falta
    // if (correoUsuario.value.includes("@hotmail.com", "@yahoo.es", "@yahoo.com", "@outlook.com")) {
      crearUsuario(correoUsuario.value, contraseñaUsuario.value).then(() => {
        if (contraseñaUsuario.value == '' ){
          swal({
            title: "¡Escribe tu contraseña!",
            text: "Tu contraseña debe tener mínimo seis dígitos",
            icon: "error",
          });
        }
        if (correoUsuario.value == '' ){
          swal({
            title: "¡Escribe tu correo!",
            text: "Debes escribir un correo para registrarte",
            icon: "error",
          });
        }
      
      }).catch((error) => {
             })
    // }
    // else {
    //   alert("Verifica tus datos")
    // }
    
        
    //   }).catch((error) => {
    //     console.error(error.message)
    //   })
    // }
    // else if(contraseñaUsuario.length == 0 ) {
    //    
    //  }

  });
  // Se muestran en pantalla
  formulario.innerHTML = '<b>Registrate</b> para conocer más de Colombia y guarda tus momentos inolvidables.';
  correoUsuario.setAttribute('placeholder', 'Correo Electronico');
  contraseñaUsuario.setAttribute('placeholder', 'Contraseña Usuario');
  contraseñaUsuario.setAttribute("type","password");
  buttonRegistro.textContent = 'Regístrate';
  buttonGoogle.textContent ='';
  logo.src = '/imagenes/Recurso 1.png';
  buttonGoogle.addEventListener ("click",()=> {
    crearUsuarioConGoogle ().then( () => {
      console.log("crearUsuarioConGoogle")
    }).catch(()=>{
      console.log("hay un error")
    })
    
    });

  // Agregamos elementos a nuestro div

  contenedorRegistro.append(logo, formulario, correoUsuario, contraseñaUsuario, buttonRegistro, buttonGoogle);
  return contenedorRegistro;
};
