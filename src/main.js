// Este es el punto de entrada de tu aplicacion

import  welcome  from "./lib/page/welcome.js";
import  signIn  from "./lib/page/signIn.js";
import  userSignIn  from "./lib/page/userSignIn.js";

document.querySelector("#welcome").innerHTML = welcome();
// document.querySelector("#signIn").innerHTML = signIn();
// document.querySelector("#userSignIn").innerHTML = userSignIn();
