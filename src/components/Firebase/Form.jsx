import { appFirebase } from "../../credentials"
import "../Firebase/Form.css"

import { getFirestore, collection, addDoc } from "firebase/firestore"
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"

const db = getFirestore(appFirebase)
const storage = getStorage(appFirebase)

const Form = () => {
    let urlImg

    const guardarInfo = async (e) => {
        e.preventDefault()
        const nombre = e.target.nombre.value

        const newImage = {
            nombre: nombre,
            imagen: urlImg
        }
        //Función de guardado

        try {
            await addDoc(collection(db,"fotos"), ...newImage)
        } catch (error) {
            console.log(error);
        }

        e.target.nombre.value =""
        e.target.imagen.value=""
        e.target.file.value=""

    }

    const fireHandler = async (e) => {
        //Detector del archivo
        const archivoI = e.target.files[0]
        //cargar esto al sotrage 
        const refArchivo = ref(storage, `documentos/${archivoI.name}`)
        await uploadBytes(refArchivo, archivoI)
        //obtener url de la imagen 
        urlImg = await getDownloadURL(refArchivo)

    }

    return (
        <div className="card">
        <h3>Agregar imagen</h3>
        <form onSubmit={guardarInfo}>
            <label>Nombre:</label>
            <div className="formGroup">
                <input className="control" type="text" placeholder="Ingresar nombre de la imagen" id="nombre" required />
            </div>
            <label>Agregar imagen: </label>
            <div className="file-input-wrapper">
                <input className="file-input" type="file" id="file" onChange={fireHandler} required />
                <button type="button" className="custom-file-button" onClick={() => document.getElementById('file').click()}>Seleccionar archivo</button>
            </div>
            <button className="boton">Guardar</button>
        </form>
    </div>
    )
}



export { Form }