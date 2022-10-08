//import { describe } from 'yargs';
//import { it } from 'jest-circus';
import { wall } from '../src/lib/page/wall.js';
import { eventHandler } from '../src/lib/routes.js';

jest.mock('../src/firebase/firestoreFirebase.js');
jest.mock('../src/firebase/authenticationFirebase.js');

describe('Publicar post', () => {
    it('Valida elementos del muro para publicar',() => {
        document.body.innerHTML = '<div id="contentPageId"></div>';
        const main = document.querySelector('#contentPageId')
        main.innerHTML = wall();
        //eventHandler('/wall')
        
        expect(document.getElementById('postContent')).not.toBeNull()
        expect(document.getElementById('PostContentButton')).not.toBeNull()
        expect(document.getElementById('allPosts')).toBeNull()
        document.getElementById('PostContentButton').click()
        
    //     setTimeout(()=>{ 
    //         expect(document.querySelector('allPosts')).not.toBeNull();
    //        done()
    // },2000)

    })
})
