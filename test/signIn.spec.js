import { createUser } from '../src/firebase/authenticationFirebase.js';
import { signIn } from '../src/lib/page/signIn.js';
import { showMessageError } from '../src/lib/utils/formValidator.js';
jest.mock('../src/firebase/authenticationFirebase.js');

//Nuestra signIn sólo retorna la vista
//Probar los botones
describe('Testing view', ()=>{
    it('Dede mostrar correctamente la vista signIn', ()=>{
        document.body.innerHTML = '<div id="contentPageId"></div>'
        const main = document.querySelector('#contentPageId')
        main.innerHTML = signIn()
        expect(document.getElementById('submitContinueButton')).toBeTruthy();
    });
    //funcionalidad de los botones
    it('Debe responder con: Dato Incorrecto', () => {
        // createUser(null, '', '').catch(()=>{
        //     console.log('Catch llamado directo')
        // })
        document.body.innerHTML = '<div id="contentPageId"></div>'
        const main = document.querySelector('#contentPageId')
        main.innerHTML = signIn()
       //signIn()
        expect(document.querySelector('#emailContent')).not.toBeNull();
        expect(document.querySelector('#paragraph1')).toBe(null);
        // showMessageError()
        // 
        document.getElementById('submitContinueButton').click(); 
        setTimeout(()=>{
            expect(document.querySelector('#paragraph1')).toBeNull();
           done()
    },2000)
    })
});



