export const changeRoute = (hash, components) => {
  const containerRoot = document.getElementById("content");
  containerRoot.innerHTML = "";
  switch (hash) {
    case '#home':{
      return containerRoot.appendChild(components.home());}

    case '#register':{
      return containerRoot.appendChild(components.register());}

    case '#wall':{
      return containerRoot.appendChild(components.wall());}

    default: {
        return containerRoot.appendChild(components.error404());}
      }

    };

      export{changeRoute}
