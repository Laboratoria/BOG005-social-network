import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { app } from './lib/component/configFirebase.js';

const auth = getAuth(app);

export const createUser = (email, pass, name) => {
    createUserWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
        //   result.user.updateProfile ({
        //     displayName: name;
        //   }) 
            const user = userCredential.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
         });
}