import { Layout } from "../components/Layout/Layout"
import { Link } from "react-router-dom"
import { Main } from "./Main"
import "../views/Home.css"
const Home = () => {
    return (
        <>
            <Layout>
            
             <div className="home">
                <img src="./src/img/img-proyect/home.webp" alt="" />
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