// Testearemos el ruteo
import { onNavigate } from '../src/main.js';

jest.mock('../src/lib/firebase.js');
jest.mock('../src/lib/firestore.js');

const mockBienvenida = () => {
  const div = document.createElement('div');
  div.innerHTML = '<b>Atrévete</b> a explorar el realismo mágico de nuestra <b> geografía Colombiana.</b> <br> <b>Guarda tus memorias</b> y haz que mas personas se animen a conocerlas';
  return div;
};
const mockRoutes1 = {
  '/': mockBienvenida,
};

describe('onNavigate', () => {
  it('pintar bienvenida', () => {
    document.innerHTML = '<div id="root"></div>';
    onNavigate('/', mockRoutes1);
    console.log('button: ', document.getElementById('root').textContent);
    expect(document.getElementById('root').textContent).toEqual(
      '<b>Atrévete</b> a explorar el realismo mágico de nuestra <b> geografía Colombiana.</b> <br> <b>Guarda tus memorias</b> y haz que mas personas se animen a conocerlas',
    );
  });
});

//   it("test de onNavigate", () => {
//     document.body.innerHTML = '<div id="root"></div>';
//     onNavigate("/login", mockroutes);
//     console.log("contenido: ", document.getElementById("root").textContent);
//     expect(document.getElementById("root").textContent.trim()).toEqual(
//       "mock login 1"
//     );
//   });
// });
