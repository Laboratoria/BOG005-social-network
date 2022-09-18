export const changeRoute = (hash, components) => {
  const containerRoot = document.getElementById("content");
  containerRoot.innerHTML = "";
  switch (hash) {
    case "":
      return containerRoot.appendChild(components.home());
    case "#register":
      return containerRoot.appendChild(components.register());
    case "login":
      return containerRoot.appendChild(components.login());
    default:
      return containerRoot.appendChild(components.error404());
  }
};
