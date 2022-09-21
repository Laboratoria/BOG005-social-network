
const getEmailUser = ( emailUser ) => {
// console.log("correo - getemailuser", emailUser.email)
return emailUser.email
}

const setNameUser = ( name ) => {
    localStorage.setItem('Username', `${name}`);
    let getUserName = localStorage.getItem('Username');
    return getUserName ;

}

export { getEmailUser , setNameUser }