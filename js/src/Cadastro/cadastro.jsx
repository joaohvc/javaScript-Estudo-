import { useState } from "react";
import { Link} from "react-router-dom";



function Cadastro() {
    const [mensagem, setMensagem] = useState("");
    const [alerta, setAlerta] = useState(false);
    
    function Validacao (){   
        
            const ve = document.getElementById('email').value;
            const vs = document.getElementById('senha').value;
            const vn = document.getElementById('nome').value;
            if(ve === ''|| vs === '' || vn ===''){
                setMensagem('Voce nao preencheu todos os campos');
                setAlerta(true)
            }else{
                setMensagem("Cadastro realizado com sucesso")
                setAlerta(true)
            }
        
        }
        function Alerta (){
            if(alerta === true)
                return(
                    <div>
                        <h1>{mensagem}</h1>
                    </div>
                )   
        }
  return (
    <div>
      <div className=" h-screen w-screen justify-center items-center flex bg-blue-200 flex-col">
        <div className="flex flex-col items-center justify-center bg-white h-100 w-120 rounded-2xl shadow-2xl relative ">
            <h1 className="mb-10 text-3xl">Cadastrar-Se</h1>
          <input
            type="text"
            placeholder="SeuEmail@gmail.com"
            id="email"
            className="bg-gray-200 border h-9 w-70 mb-5 pl-4 rounded-sm"
          />
          <input
            type="text"
            placeholder="SuaSenha"
            id="senha"
            className="bg-gray-200 border h-9 w-70 mb-5 pl-4 rounded-sm"
          />
          <input
            type="text"
            placeholder="SeuNome"
            id="nome"
            className="bg-gray-200 border h-9 w-70 mb-5 pl-4 rounded-sm"
          />
          <Link
            to="/"
            className="text-blue-500 hover:text-blue-600 cursor-pointer"
          >
            Ja tem cadastro?
          </Link>
          <button onClick={Validacao} className="bg-blue-500 h-10 w-50 rounded-xl border-black border-2 mt-4 hover:bg-blue-600 cursor-pointer text-white">
            Cadastrar
          </button>
          {Alerta()}
        </div>
      </div>
    </div>
  );
}
export default Cadastro;
