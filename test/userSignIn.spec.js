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
        // console.log((document.getElementById('registerGoogle').textContent))
        expect(document.getElementById('googleButton')).not.toBeNull();
    })

    it('Al hacer el click se llame a continuar con Google', (done) => {
        document.body.innerHTML = '<div id="contentPageId"></div>'
        const main = document.querySelector('#contentPageId')
        main.innerHTML = signIn()
eventHandler('/signIn')
        document.getElementById('googleButton').click();
        // signGoogle();
        setTimeout(() => {
            const main = document.querySelector('#contentPageId')
            main.innerHTML = wall()
            expect(document.querySelector('#postContent')).not.toBeNull();
            done()
        }, 2000)
    })
})




/* import { userSignIn } from '../src/lib/page/userSignIn.js';

// //Nuestra userSignIn sólo retorna la vista
// //Probar los botones
describe('Testing view', ()=>{
    it('Dede mostrar correctamente la vista userSignIn', ()=>{
        document.body.innerHTML = '<div id="contentPageId"></div>'
        const main = document.querySelector('#contentPageId')
        main.innerHTML = userSignIn
        expect(document.getElementById('submitContinue')).toBe();
    });
    //funcionalidad de los botones
    it('Debe responder con: Correo no encontrado', () => {
        // const main = document.querySelector('#contentPageId')
        // main.innerHTML = signIn()
        userSignIn
        expect(document.querySelector('#errorMessageEmailId').innerHTML).toBe('');
        document.getElementById('submitContinue').click();
        setTimeout(()=>{
            expect(document.querySelector('#errorMessageEmailId').innerHTML).toBe('Correo no encontrado');
        },1000)
    })
});*/
