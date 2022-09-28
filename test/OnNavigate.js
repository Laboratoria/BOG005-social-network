// Testearemos el ruteo, es decir veremos que cuando el usuario precione el boto explora pase a Registro
import {onNavigate} from '../src/main.js';
describe('bienvenida', () => {
   it('debería llevarnos a registro', () => {
    document.body.innerHTML = '<div id = "root"></div>';
    const resultado = onNavigate ('/bienvenida');
    expect(resultado,querlySelector('<b>Atrévete</b> a explorar el realismo mágico de nuestra <b> geografía Colombiana.</b> <br> <b>Guarda tus memorias</b> y haz que mas personas se animen a conocerlas').innerHTML).toBe('registro');
  });
describe ('onNavigate',() => {
  it('Deberia llevarnos a registro', () => {
    document.body.innerHTML = '<div id = "root"></div>';
    const resultado = onNavigate ('/registro');
    expect(resultado,querlySelector('p').innerHTML).toBe('<b>Atrévete</b> a explorar el realismo mágico de nuestra <b> geografía Colombiana.</b> <br> <b>Guarda tus memorias</b> y haz que mas personas se animen a conocerlas')
  });
});
describe ('onNavigate',() => {
  it('Deberia llevarnos a login', () =>{
    document.body.innerHTML = '<div id = "root"></div>';
    const resultado = onNavigate ('/login');
    expect(resultado,querlySelector('img').innerHTML).toBe('logo')
  });
});

  