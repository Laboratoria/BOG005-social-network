export default () => {
  const registerSection = document.createElement("div");
  registerSection.style.width = "80vw";
  const viewRegister = 
  `<h2 class="textLandingPage">
  Conéctate con tus amigos y habla sobre películas y series en común a
  través de MovieManía
</h2> `
;

  registerSection.innerHTML = viewRegister;
  return registerSection;
};
