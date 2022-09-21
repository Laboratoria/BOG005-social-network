export const changeRoute = (hash, components) => {
  const containerRoot = document.getElementById("content");
  containerRoot.innerHTML = "";
  switch (hash) {
    case "":
      return containerRoot.appendChild(components.home());
    case "#home":
      return containerRoot.appendChild(components.home());
    case "#register":
      return containerRoot.appendChild(components.register());
    case "#feed":
      return containerRoot.appendChild(components.feed());
    default:
      return containerRoot.appendChild(components.error404());
  }
};
