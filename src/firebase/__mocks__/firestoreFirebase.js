export const savePost = jest.fn(()=>{
    console.log('Moqueando publicación')
    return Promise.resolve({description:'Moqueando publicación', likes:0})
})

export const getPost =  () => Promise.resolve();
export const getOnePost = ()=> Promise.resolve();
export const onGetPost = () => Promise.resolve();
export const updatePost = () => Promise.resolve();
export const buttonP = () => Promise.resolve();
export const getFirestore = () => Promise.resolve();
export const collection = () => Promise.resolve();
export const addDoc = () => Promise.resolve();
export const getDocs = () => Promise.resolve();
export const onSnapshot = () => Promise.resolve();
export const deleteDoc = () => Promise.resolve();
export const doc = () => Promise.resolve();
export const getDoc = () => Promise.resolve();
export const updateDoc = () => Promise.resolve();
