import { Route, Routes } from "react-router-dom"
import Home from "../Home/Home.jsx"
import Cadastro from "../Cadastro/cadastro.jsx"

function Rotas (){
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/cadastro" element={<Cadastro/>}/>
            </Routes>   
        </div>
    )
}

export default Rotas