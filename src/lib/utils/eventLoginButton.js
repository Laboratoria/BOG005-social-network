import { auth, signIn } from '../../firebase/authenticationFirebase.js'

const eventLoginButton = () => {
  if (window.location.pathname === '/userSignIn') {
    const btnLogin = document.querySelector('#submitContinue');
    if (btnLogin) {
      btnLogin.addEventListener('click', (e) => {
        e.preventDefault()
        const email = document.querySelector('#userSi').value;
        const password = document.querySelector('#passwordSi').value;
        const result = signIn(auth, email, password)
        result.then((userCredential) => {
          if (userCredential) {
            const greetingUser = document.getElementById('greetingUserId');
            if (greetingUser) {
              greetingUser.innerHTML = '';
            }
            window.location.href = '#wall';
          }
        })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessageEmail = document.querySelector("#errorMessageEmailId")
            const errorPassWord = document.querySelector("#errorMessagePasswordId")
            const contentInputEmail = document.querySelector("#contentPageId > section > form > article:nth-child(1)")
            const contentInputPassword = document.querySelector("#contentPageId > section > form > article:nth-child(2)")
            if (errorCode === 'auth/invalid-email'){
              errorMessageEmail.style.display = "block"
              errorPassWord.style.display = "none"
              contentInputEmail.style.color = "#F56F6F";
              contentInputPassword.style.color = "#FFFFFF";
            } else if (errorCode === 'auth/wrong-password'){
              errorPassWord.style.display = "block"
              errorMessageEmail.style.display = "none"
              contentInputPassword.style.color = "#F56F6F";
              contentInputEmail.style.color = "#FFFFFF";
            }
            const errorMessage = error.message;
          });
      });
    }
  }
};

export { eventLoginButton };

//auth/invalid-email
//auth/wrong-password