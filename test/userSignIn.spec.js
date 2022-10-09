// import { signGoogle } from '../src/firebase/authenticationFirebase.js';
import { signIn } from '../src/lib/page/signIn.js';
import { eventHandler } from '../src/lib/routes.js';
import { wall } from '../src/lib/page/wall.js';
jest.mock('../src/firebase/authenticationFirebase.js');
jest.mock('../src/firebase/firestoreFirebase.js');

describe('Continuar con Google', () => {
    it('Validando existencia del boton', () => {
        document.body.innerHTML = '<div id="contentPageId"></div>'
        const main = document.querySelector('#contentPageId')
        main.innerHTML = signIn()
        eventHandler('/signIn')
        expect(document.getElementById('registerGoogle').textContent).toBe('Registrate con Google');
        expect(document.getElementById('googleButton')).not.toBeNull();
    })

    it('Al hacer el click en continuar con Google se pasa a la pagina del muro', (done) => {
        document.body.innerHTML = '<div id="contentPageId"></div>'
        const main = document.querySelector('#contentPageId')
        main.innerHTML = signIn()
        eventHandler('/signIn')
        document.getElementById('googleButton').click();
        setTimeout(() => {
            const main = document.querySelector('#contentPageId')
            main.innerHTML = wall()
            expect(document.querySelector('#postContent')).not.toBeNull();
            done()
        }, 2000)
    })
})
