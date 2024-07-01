import { Layout } from "../components/Layout/Layout"
import { Link } from "react-router-dom"
import { Main } from "./Main"
import "../views/Home.css"
const Home = () => {
    return (
        <>
            <Layout>
            
             <div className="home">
                <img src="https://firebasestorage.googleapis.com/v0/b/pryectofotos.appspot.com/o/documentos%2Fhome.webp?alt=media&token=ef789144-481f-469a-b9a6-00cd5bd12a92" alt="" />
               <ul>
                <li><Link to="/fotos">Fotos</Link></li>
                <li><Link to="/sobremi" >Sobre mi</Link></li>
               </ul>
             </div>
             
            </Layout>
        </>
    )
}

export { Home }