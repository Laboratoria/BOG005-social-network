import { router } from '../src/lib/routes.js';
jest.mock('../src/firebase/authenticationFirebase.js');
jest.mock('../src/firebase/firestoreFirebase.js');


// describe('Social network', ()=>{
//     it('Login',  ()=>{
//       const main = document.body
//       main.innerHTML = '<main id="contentPageId" class="contentPage"></main>'
    
//       expect(main.innerHTML = router('#wall')).toBe('router')
//      })
//   })

describe('Social network', ()=>{
  it('Login',  ()=>{
    document.body.innerHTML = '<main id="contentPageId" class="contentPage"></main>'
    const result = router('#wall')
    expect(result.querySelector('#textLogoWallId').innerHTML).toBe('CORREO')
   })
})