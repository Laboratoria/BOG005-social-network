/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
export const createUser = jest.fn((nameR, emailR, passR) => {
  return Promise.resolve({});
});

export const signInUser = (email, password) => {
  return Promise.resolve();
};

export const getAuth = () => {
  return Promise.resolve();
};

export const register = (email, password) => {
  return Promise.resolve();
};
