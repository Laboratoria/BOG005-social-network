export default () => {
  const feedSection = document.createElement("div");
  feedSection.classList.add("feed");

  const viewFeed = `<h1> hola, esto es una prueba para ver si funciona el merge </h1>`;

  feedSection.innerHTML = viewFeed;
  return feedSection;
};
