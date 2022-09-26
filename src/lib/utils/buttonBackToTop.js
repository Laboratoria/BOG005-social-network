const buttonBackToTop = document.getElementById("btn-back-to-top");

window.onscroll.scrollFunction = wall();

  
  const scrollFunction = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };
