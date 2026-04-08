import { Route, Routes } from "react-router-dom"
import Home from "../Home/Home.jsx"

function Rotas (){
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>   
        </div>
    )
}

export default Rotas