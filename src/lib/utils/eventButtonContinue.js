import formValidator from './formValidator.js';

const eventButtonContinue = () => {

    const buttonContinue = document.getElementById('submitContinue');
        buttonContinue.addEventListener('click', ()=> {
            //document.getElementById('contentPageId').innerHTML =
        
            const formData = getFormData()
            console.log(formData)
        })




}
export default eventButtonContinue;