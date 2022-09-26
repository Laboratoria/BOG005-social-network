const getEmailUsers = (email) => {
  document.querySelector('#wallOffPublication').innerHTML += `<h1 class="ejemplo">Estás registrada con correo: ${email}</h1>`;
};

export { getEmailUsers };
