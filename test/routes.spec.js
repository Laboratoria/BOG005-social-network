 import { router } from '../src/lib/routes.js';
 jest.mock('../src/firebase/authenticationFirebase.js');
 jest.mock('../src/firebase/firestoreFirebase.js');

// describe('router', () => {
//   it('debe llevarte al wall', () => {
//     const containerPage = document.body;
//     containerPage.innerHTML = '<main id="contentPageId" class="contentPage"></main>'
//     // router('#wall');
//     expect( containerPage.innerHTML = router('#wall') ).toBe('router');
//   });
// });

describe('router', () => {
  it('debe llevarte al wall', () => {
    document.body.innerHTML = '<main id="contentPageId" class="contentPage"></main>'
    const result = router('#wall');
    // router('#wall');
    expect( result.querySelector('#textLogoWallId').innerHTML).toBe('debe llevarte al wall');
  });
});