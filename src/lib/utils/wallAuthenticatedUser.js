const wallAuthenticatedUser = (name, email) => {
  const userName = document.querySelector('#wallOffPublication').innerHTML += `<h1 class="ejemplo">Hola ${name}!</h1>`;
  const userEmail = document.querySelector('#wallOffPublication').innerHTML += `<h1 class="ejemplo">Estás registrada con correo: ${email}</h1>`;
};

export { wallAuthenticatedUser };
