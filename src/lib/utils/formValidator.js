const getFormData = () => {
  const name = document.getElementById('name');
  const user = document.getElementById('user');
  const email = document.getElementById('email');
  const password = document.getElementById('password');

  return {
    name: name.value,
    user: user.value,
    email: email.value,
    password: password.value,
  };
};

const showMessageError = (errorMessage) => {
  const emailContent = document.getElementById('emailContent');
  const passwordContent = document.getElementById('passwordContent');
  const inputEmail = document.getElementById('email');
  const labelEmail = document.getElementById('labelEmailId');
  const inputPassword = document.getElementById('password');
  const labelPassword = document.getElementById('labelPasswordId');
  const contentErrorEmail = document.createElement('p');
  contentErrorEmail.setAttribute('id', 'paragraph1');
  const contentErrorPassword = document.createElement('p');
  contentErrorPassword.setAttribute('id', 'paragraph2');
  if (errorMessage === 'auth/invalid-email') {
    inputPassword.style.borderColor = '#FFFFFF';
    labelPassword.style.color = '#FFFFFF';
    inputEmail.style.borderColor = '#F56F6F';
    labelEmail.style.color = '#F56F6F';
    contentErrorEmail.style.color = '#F56F6F';
    contentErrorEmail.style.fontSize = '0.9rem';
    if (emailContent.lastElementChild.id !== 'paragraph1') {
      emailContent.appendChild(contentErrorEmail);
    }
    document.querySelector('#paragraph1').textContent = 'Dato Incorrecto';
  } else if (errorMessage === 'auth/email-already-in-use') {
    inputPassword.style.borderColor = '#FFFFFF';
    labelPassword.style.color = '#FFFFFF';
    inputEmail.style.borderColor = '#F56F6F';
    labelEmail.style.color = '#F56F6F';
    contentErrorEmail.style.color = '#F56F6F';
    contentErrorEmail.style.fontSize = '0.9rem';
    if (emailContent.lastElementChild.id !== 'paragraph1') {
      emailContent.appendChild(contentErrorEmail);
    }
    document.querySelector('#paragraph1').textContent = 'Correo ya registrado, prueba otro';
  } else {
    // const contentErrorPassword = document.createElement('p');
    // contentErrorPassword.setAttribute('id', 'paragraph2');
    inputEmail.style.borderColor = '#FFFFFF';
    labelEmail.style.color = '#FFFFFF';
    inputPassword.style.borderColor = '#F56F6F';
    labelPassword.style.color = '#F56F6F';
    contentErrorPassword.style.color = '#F56F6F';
    contentErrorPassword.style.fontSize = '0.9rem';
    if (passwordContent.lastElementChild.id !== 'paragraph2') {
      passwordContent.appendChild(contentErrorPassword);
    }
    document.querySelector('#paragraph2').textContent = 'Dato Incorrecto, escribe mas de 6 caracteres';
  }
};

const showSuccessfulResponse = () => {
  const emailContent = document.getElementById('emailContent');
  const passwordContent = document.getElementById('passwordContent');
  const inputEmail = document.getElementById('email');
  const labelEmail = document.getElementById('labelEmailId');
  const inputPassword = document.getElementById('password');
  const labelPassword = document.getElementById('labelPasswordId');
  if (emailContent.lastElementChild.id === 'paragraph1') {
    const contentErrorEmail = document.querySelector('#paragraph1');
    emailContent.removeChild(contentErrorEmail);
    inputEmail.style.borderColor = '#FFFFFF';
    labelEmail.style.color = '#FFFFFF';
  }

  if (passwordContent.lastElementChild.id === 'paragraph2') {
    const contentErrorPassword = document.querySelector('#paragraph2');
    passwordContent.removeChild(contentErrorPassword);
    inputPassword.style.borderColor = '#FFFFFF';
    labelPassword.style.color = '#FFFFFF';
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
