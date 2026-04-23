import { Route, Routes } from "react-router-dom"
import Home from "../Home/Home.jsx"
import Cadastro from "../Cadastro/cadastro.jsx"
import Teste from "../estudo/teste.jsx"

function Rotas (){
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/cadastro" element={<Cadastro/>}/>
                <Route path="/teste" element={<Teste/>}/>
            </Routes>   
        </div>
    )
}

export default Rotas