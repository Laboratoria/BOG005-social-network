export const createUser = jest.fn(() => {
    console.log('Estoy en mock')
    return Promise.reject({code : 'auth/invalid-email'})
})

 export const signIn = jest.fn(() => {
     return Promise.reject({code : 'auth/user-not-found'})
 })

export const signGoogle = () => Promise.resolve();
export const getAuth = () => Promise.resolve();
export const createUserWithEmailAndPassword = () => Promise.resolve();
export const signInWithPopup = () => Promise.resolve();
export const GoogleAuthProvider = () => Promise.resolve();
export const onAuthStateChanged = () => Promise.resolve();
export const signInWithEmailAndPassword = () => Promise.resolve();
export const signOut = () => Promise.resolve();
export const app = () => Promise.resolve();
export const displayUserData = () => Promise.resolve();
