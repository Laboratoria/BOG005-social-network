import { getStorage, ref } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-storage.js";



// let fichero;

// function inicializar() {
//     fichero = document.getElementById('fichero');
//     fichero.addEventListener("change", subirImagenAlFirebase, false);

//     //referencia del directorio raiz
//     storageRef = firebase.storage().ref();
// }

export function subirImagenAlFirebase() {
    //la imagen que voy a subir viene del input 'fichero' => [0]: supone que es mas de una 
    let imagenASubir = fichero.files[0];

    //el nodo hijo es el directorio 'ARCHIVOS POSTS/'
    let uploadTask = storageRef.child('ARCHIVOS POSTS/' + imagenASubir.name).put(imagenASubir);
    //.put(imagenASubir) => el fichero que voy a subir
}


