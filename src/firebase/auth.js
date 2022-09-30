import { createUser } from './connection.js';

const createRegister = async(email, password) => {
  try {
    await createUser(email, password);
  }
  catch(error){
    return error
  }
};

export { createRegister };

// ***7. (viene del connection)Se importa la variable creada -createUser- que contiene la promesa de registrar.
// ***8. Se hace una función asíncrona que tome como parámetros el email y la contraseña. Esa función se exporta, la recibe el register.
