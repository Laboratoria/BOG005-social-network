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
            //console.log(errorCode)
            const errorMessageEmail = document.querySelector("#errorMessageEmailId")
            const errorPassWord = document.querySelector("#errorMessagePasswordId")
            if(errorCode === 'auth/invalid-email'){
              console.log('Correo inválido')
              errorMessageEmail.style.display = "block"
              errorPassWord.style.display = "none"
            }else if (errorCode === 'auth/wrong-password'){
              console.log('Password inválido')
              errorPassWord.style.display = "block"
              errorMessageEmail.style.display = "none"
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