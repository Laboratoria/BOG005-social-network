//import { describe } from 'yargs';
import { beforeAll } from 'jest-circus';
import { signIn } from '../src/lib/page/signIn.js';

//Nuestra signIn sólo retorna la vista
//Probar los botones
describe('Testing view', ()=>{
    beforeAll(()=>{
        document.body.innerHTML = '<div id="contentPageId"></div>'
    })
    it('Dede mostrar correctamente la vista signIn', ()=>{
        signIn()
    })
})