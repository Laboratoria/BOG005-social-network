// importar la funcion que se va a testear

import { changeRoute } from  '../../src/lib/router.js'

// se le deben pasar parametros a changeview - el # es el parametro
// “changeView que cambie al template register”

describe('changeView', () => {
    it('changeView cambia de template', () => {
        document.body.innerHTML = '<div id="content"></div>'
        const result =  changeRoute('#register');
        expect(result.querySelector('registerTitle').innerHTML).toBe('Registrate')
    });
});