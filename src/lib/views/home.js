export default () => {
  const homeSection = document.createElement("div");
  homeSection.style.width = "80vw";

  const viewHome = `<section class="titleContainer">
<h1 class="titleLandinPage">MovieManía</h1>

<h2 class="textLandingPage">
  Conéctate con tus amigos y habla sobre películas y series en común a
  través de MovieManía
</h2>
</section>

<figure class="imgLandinPageCont">

<div class="buttonContainer">
  <button class="landingPageButton"><a href="#login">Entrar</a></button>
  <button class="landingPageButton">
    <a href="#register">Registrarse</a>
  </button>
  <button class="landingPageButton"><a href="#wall">WALL</a></button>
 
</div>
</figure>`
;

  homeSection.innerHTML = viewHome;
  return homeSection;
};
