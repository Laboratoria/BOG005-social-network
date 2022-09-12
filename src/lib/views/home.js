export default  () =>{
    const homeSection = document.createElement('div');
    homeSection.style.width='80vw';
    //homeSection.style.display="inline-flex"


    const viewHome =
`<main>
    <article>   </article>
    <div id="derecho">
    <div class="titulo">
        Welcome to Movie Mania
    </div>
    <hr>
    <div class="pie-form">
        <p> Un lugar exclusivo para los cinefilos. Compartir tus pelis favoritas, recomendaciones, dislike y hasta conocer otros cinefilos. ¡Registrate y pronto disfrutarás todo esto y más!  </p>
        <a href="#/register">¿No tienes Cuenta? Registrate</a>
        <hr>
       
    </div>
</div>
</main>`
homeSection.innerHTML=viewHome;
return homeSection;



}