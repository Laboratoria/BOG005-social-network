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

export { getFormData, showMessageError, showSuccessfulResponse };
