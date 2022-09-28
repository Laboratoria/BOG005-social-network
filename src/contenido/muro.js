
export const muro = () => {
  const div = document.createElement('div');
  const logo = document.createElement('img');
   logo.id = 'logo';
  logo.src = '/imagenes/Recurso 1.png';
  const salir = document.createElement('button');
  salir.id = 'Salir';
  salir.textContent = "Salir"

  // Crear la funcion salir en firebase.js
  // Devuelva la metodo de firebase signOut()
  //Importar en muro 
  // añadir un manejador de eventos al boton salir
  // Dentro de la funcion del addEventListener llamar a la funcion salir
  

  div.append(logo, salir);

  return div;
};
