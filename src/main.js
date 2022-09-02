// Este es el punto de entrada de tu aplicacion

import  welcome  from "./lib/page/welcome.js";
import  singIn  from "./lib/page/singIn.js";
import  userSingIn  from "./lib/page/userSingIn.js";

document.querySelector("#welcome").innerHTML = welcome();
document.querySelector("#singIn").innerHTML = singIn();
document.querySelector("#userSingIn").innerHTML = userSingIn();
