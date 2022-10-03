import { beforeEach } from 'jest-circus';
import { signIn } from '../src/lib/page/signIn.js';

//Nuestra signIn sólo retorna la vista
//Probar los botones
describe('Testing view', ()=>{
    // beforeEach(() => {
    //     document.body.innerHTML = '<div id="contentPageId"></div>'
    //     const main = document.querySelector('#contentPageId')
    //     main.innerHTML = signIn()
    // })

    it('Dede mostrar correctamente la vista signIn', ()=>{
        document.body.innerHTML = '<div id="contentPageId"></div>'
        const main = document.querySelector('#contentPageId')
        main.innerHTML = signIn()
        expect(document.getElementById('submitContinueButton')).toBeTruthy();
    });
    //funcionalidad de los botones
    it('Debe responder con: Dato Incorrecto', () => {
        // const main = document.querySelector('#contentPageId')
        // main.innerHTML = signIn()
       signIn()
        expect(document.querySelector('#paragraph1').innerHTML).toBeTruthy();
        document.getElementById('submitContinueButton').click();
        setTimeout(()=>{
            expect(document.querySelector('#paragraph1').innerHTML).toBe('Dato Incorrecto');
        },1000)
    })
});

