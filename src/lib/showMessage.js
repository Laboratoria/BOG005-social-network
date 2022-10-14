export function showMessage(message, type = 'success') {
  // eslint-disable-next-line no-undef
  Toastify({
    text: message,
    duration: 3000,
    destination: 'https://github.com/apvarun/toastify-js',
    newWindow: true,
    close: true,
    gravity: 'top', // `top` or `bottom`
    position: 'center', // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: type === 'success' ? 'green' : 'darkred',
    },
    onClick() { }, // Callback after click
  }).showToast();
}
