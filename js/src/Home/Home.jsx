import { listaIngrediente,superLista } from "./Home.js"

function Home (){
    return(
        <div>
            <button onClick={listaIngrediente} className="bg-blue-500 h-10 w-50 rounded-2xl cursor-pointer hover:bg-blue-600">Mensagem no console.log</button>
            <h1 className="text-3xl">{`Mensagem ${superLista.join(' - ')}`}</h1>
        </div>
    )
}

export default Home