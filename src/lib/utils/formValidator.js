const getFormData = () => {
  const name = document.getElementById('name').value;
  const user = document.getElementById('user').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  // console.log(getFormData);
  return {
    name: name.value,
    user: user.value,
    email: email.value,
    password: password.value,
  };
};

// const formValidator = () => {
//   const regex = {
//     name: /[a-zA-ZÀ-ÿ\u00f1\u00d1]/,
//     user: /[a-zA-ZÀ-ÿ0-9_.\-\u00f1\u00d1]/,
//     email: /[a-zA-Z0-9_.\-]+@[a-zA-Z0-9_.\-]+\.[a-zA-Z]+/,
//     password: /[0-9]/,
//   };
// };

export default getFormData;
