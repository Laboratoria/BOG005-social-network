export default  () =>{
    const homeSection = document.createElement('div');
    homeSection.style.width='60vw';
    //homeSection.style.display="inline-flex"


    const viewHome =
` <section class="titleContainer">
<h1 class="titleLandinPage">K-DRAMA LOVERS</h1>

<h2 class="textLandingPage">
  Conéctate con tus amigos y habla sobre películas y series en común a
  través de MovieManía
</h2>
</section>

<figure class="imgLandinPageCont">
<img alt="Cinema vector" class="imgLandinPage" src="img/mancha .png" />
<div class="buttonContainer">
  <button class="landingPageButton"><a href="#login">Entrar</a></button>
  <button class="landingPageButton">
    <a href="#register">Registrarse</a>
  </button>
</div>
</figure>`


homeSection.innerHTML=viewHome;
return homeSection;



}