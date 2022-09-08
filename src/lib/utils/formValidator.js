const getFormData = () => {
  const name = null || document.getElementById('name');
  const user = null || document.getElementById('user');
  const email = null || document.getElementById('email');
  const password = null || document.getElementById('password');

  return {
    name,
    user,
    email,
    password,
  };
};
console.log(getFormData());
// const formValidator = () =>{
//   const regex = {
//     name: /[a-zA-ZÀ-ÿ\u00f1\u00d1]/,
//     user: /[a-zA-ZÀ-ÿ0-9_.\-\u00f1\u00d1]/,
//     email: /[a-zA-Z0-9_.\-]+@[a-zA-Z0-9_.\-]+\.[a-zA-Z]+/,
//     password: /[0-9]/,
//   };
// };

export default getFormData;
