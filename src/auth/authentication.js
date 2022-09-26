import {
    getAuth,
    createUserWithEmailAndPassword,
  } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js";
  // import { Register } from "../components/registers.js";
  import { app } from "../config/configFireBase.js";
  import { onNavigate } from "../main.js";
  import { Login } from "../pages/login.js";
  const auth = getAuth(app);
  const root = document.getElementById('root');
  
  const createEmail = (email, password) => {
      createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        root.innerHTML = Login
        onNavigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        onNavigate("/register");
      });
  };
  
  export { createEmail };
  