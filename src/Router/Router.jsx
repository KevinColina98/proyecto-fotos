import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../views/Home";
import { Main } from "../views/Main";
import { Sobremi } from "../views/Sobremi";
import { Form } from "../components/Firebase/Form";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/fotos" element={<Main/>}/>
                <Route path="/sobremi" element={<Sobremi/>}/>
                <Route path="/form" element={<Form/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export{Router}