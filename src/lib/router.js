import { COMPONENTS } from "./../index.js";

export const changeRoute = (hash) => {
  const containerRoot = document.getElementById("content");
  containerRoot.innerHTML = "";
  switch (hash) {
    case "":
      return containerRoot.appendChild(COMPONENTS.home());
    case "#home":
      return containerRoot.appendChild(COMPONENTS.home());
    case "#register":
      return containerRoot.appendChild(COMPONENTS.register());
    case "#feed":
      return containerRoot.appendChild(COMPONENTS.feed());
    default:
      return containerRoot.appendChild(COMPONENTS.error404());
  }
};
