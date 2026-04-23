import { useState } from 'react'
import './estudo.js'

function Teste(){
    const[ativar, setAtivar] = useState(true)
    
    function lacoRepeticao() {
        let i = 0
        if(ativar === true){
            for(i; i<101; i++){
                document.getElementById('numeros').innerHTML += i + ', '
              }
            }
        }
      
    return(
        <div>
            <h1>ola</h1>
        <p id="numeros"></p>
        <button onClick={lacoRepeticao}>ativar</button>
        <button onClick={() => {setAtivar(false)}}>desativar</button>
        </div>
    )
}
export default Teste