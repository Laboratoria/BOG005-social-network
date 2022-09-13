// Motrar el HTML después de seleccionar un link
// Mostrar el HTML correcto al recargar la págin
const rootDiv = document.getElementById("root");
// const homeContent = "<h1>Casita</h1>";
// const aboutContent = "<h1>Acerca de </h1>"
// llave => valor
// home => homeContent
const linkContent = {
  "#home": homeContent,
  "#about": aboutContent,
};
const routes = {
  "/": homeContent,
  "/about": aboutContent,
};
const paths = {
  "#home": "/",
  "#about": "/about",
};
// Mostrar el HTML correcto al recargar la página
const pathname = window.location.pathname;
rootDiv.innerHTML = routes[pathname];
// Cambia la URL para no ocupar el "#"
const changeRoute = (hash) => {
  window.history.replaceState({}, hash.split("#")[1], paths[hash]);
};
// Cambiar HTML al clickear los link
window.addEventListener("hashchange", () => {
  const hash = window.location.hash;
  rootDiv.innerHTML = linkContent[hash];
  changeRoute(hash);
});
// Muestra el HTML correcto al moverse con los botones de atrás y adelande del navegador
window.onpopstate = () => {
  const pathname = window.location.pathname;
  rootDiv.innerHTML = routes[pathname];
};
