const eventSignOut = () => {
  if (window.location.pathname === '/wall') {
    const btnExit = document.getElementById('exitButtonId');
    if (btnExit) {
      btnExit.addEventListener('click', () => {
        console.log('Estoy tratando de cerrar sesión:');
      });
    }
  }
};

export { eventSignOut };
