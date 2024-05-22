import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../views/Home";
import { Main } from "../views/Main";
import { Sobremi } from "../views/Sobremi";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/fotos" element={<Main/>}/>
                <Route path="/sobremi" element={<Sobremi/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export{Router}