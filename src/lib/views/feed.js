import { signOutUser, getUser } from "../../auth.js";

export default () => {
  const feedSection = document.createElement("div");
  feedSection.classList.add("feed");

  const viewFeed = `<h1> hola </h1>
  <button class="signOut">Cerrar Sesión</button>
  <button class="hola">prueba</button>`;

  feedSection.innerHTML = viewFeed;

  const signOutButton = feedSection.querySelector(".signOut");
  signOutButton.addEventListener("click", (e) => {
    signOutUser();
  });

  const holaButton = feedSection.querySelector(".hola");
  holaButton.addEventListener("click", (e) => {
    getUser();
  });

  return feedSection;
};
