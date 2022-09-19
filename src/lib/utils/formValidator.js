const getFormData = () => {
  const name = document.getElementById('name');
  const user = document.getElementById('user');
  const email = document.getElementById('email');
  const password = document.getElementById('password');

  return {
   //name: name.value,
   user: user.value,
   email: email.value,
   password: password.value,
  }
};

const showMessageError = (errorMessage) => {
  const section = errorMessage.includes('email') ? 'email' : 'password';
  console.log(section);
  const emailContent = document.getElementById(`${section}Content`);
  let contentError = document.getElementById('paragraph1');
  if (!contentError) {
    contentError = document.createElement('p');
    contentError.setAttribute('id', 'paragraph1');
  }
  const inputEmail = document.getElementById('email');
  const labelEmail = document.getElementById('labelEmailId');
  const inputPassword = document.getElementById('password');
  const labelPassword = document.getElementById('labelPasswordId');
  inputEmail.style.borderColor = '#F56F6F';
  labelEmail.style.color = '#F56F6F';
  contentError.style.color = '#F56F6F';
  contentError.style.fontSize = '0.9rem';
  if (errorMessage === `auth/invalid-${section}`) {
    inputPassword.style.borderColor = '#FFFFFF';
    labelPassword.style.color = '#FFFFFF';
    emailContent.appendChild(contentError);
    contentError.textContent = 'Dato Incorrecto';
  } else if (errorMessage === `auth/${section}-already-in-use`) {
    inputPassword.style.borderColor = '#FFFFFF';
    labelPassword.style.color = '#FFFFFF';
    emailContent.appendChild(contentError);
    contentError.textContent = 'Correo ya registrado, prueba otro';
  }

  if (errorMessage === `auth/weak-${section}`) {
    const passwordContent = document.getElementById(`${section}Content`);
    passwordContent.append(contentError);
    contentError.textContent = 'Dato Incorrecto, escribe mas de 6 caracteres';
    inputPassword.style.borderColor = '#F56F6F';
    labelPassword.style.color = '#F56F6F';
    contentError.style.color = '#F56F6F';
    contentError.style.fontSize = '0.9rem';
    inputEmail.style.borderColor = '#FFFFFF';
    labelEmail.style.color = '#FFFFFF';
  }
};

const showSuccessfulResponse = () => {
  let contentError = document.getElementById('paragraph1');
  if (contentError) {
    const emailContent = document.getElementById('emailContent');
    contentError = document.getElementById('paragraph1');
    emailContent.removeChild(contentError);
    const inputEmail = document.getElementById('email');
    const labelEmail = document.getElementById('labelEmailId');
    inputEmail.style.borderColor = '#FFFFFF';
    labelEmail.style.color = '#FFFFFF';
  }
  if (contentError) {
    const passwordContent = document.getElementById('passwordContent');
    contentError = document.getElementById('paragraph1');
    passwordContent.removeChild(contentError);
    const inputPassword = document.getElementById('password');
    const labelPassword = document.getElementById('labelPasswordId');
    inputPassword.style.borderColor = '#FFFFFF';
    labelPassword.style.color = '#FFFFFF';
    const inputEmail = document.getElementById('email');
    const labelEmail = document.getElementById('labelEmailId');
    inputEmail.style.borderColor = '#FFFFFF';
    labelEmail.style.color = '#FFFFFF';
  }
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
export { getFormData, showMessageError, showSuccessfulResponse };
