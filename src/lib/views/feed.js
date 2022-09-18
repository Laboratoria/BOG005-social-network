export default () => {
  const feedSection = document.createElement("div");
  feedSection.classList.add("feed");

  const viewFeed = `<h1> hola </h1>`;

  feedSection.innerHTML = viewFeed;
  return feedSection;
};
