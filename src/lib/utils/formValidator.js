const getFormData = () => {
  const name = document.getElementById('name');
  const user = document.getElementById('user');
  const email = document.getElementById('email');
  const password = document.getElementById('password');

  return {
   //name: name.value,
   //user: user.value, 
   email: email.value,
   password: password.value,
  }

  // formValidator(name.value, user.value, email.value, password.value);
  // formValidExpretion(email.value);
};
///[a-zA-Z0-9_.\-]+@[a-zA-Z0-9_.\-]+\.[a-zA-Z]+/
const regex = {
  name: /^[a-zA-ZÀ-ÿ\s]+[a-zA-ZÀ-ÿ\s]+$/,
  user: /[a-zA-ZÀ-ÿ0-9_.\-\u00f1\u00d1]/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  password: /[0-9]/,
};

//Todos los campos del formulario deben estar diligenciados
const formValidator = (name, user, email, password) => {
  if (name !== '' && user !== '' && email !== '' && password !== '') {
    console.log('los campos están llenos')
  } else {
    console.log('Todos los campos deben ser llena los campos');
  }
};

//&& regex.user.test(user) && regex.email.test(email) && regex.password.test(password)
//, user, email, password

const formValidExpretion = (email) => {
  console.log(regex.email.test(email));
//   if (regex.name.test(name)){
//  console.log("Expresion funciona")
//   }else{
//     console.log("no funcina")
//   }

};

//Obtener el valor del input y compararlo con la expresión regular


//si es correcto el botón envia el valor a firebase
//Si no es correcto se cambia el estilo del input y manda un mensaje indicando el error
//y muestra el mensaje de error debajo del input

// let input = document.querySelectorAll('input[name="formInput"]')

export default getFormData;
