import {} from "./Home.js";
import {} from "../estudo/estudo.js";
import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [alerta, setAlerta] = useState(false);

  const [mensagem, setMensagem] = useState("");

  function validacao2() {
    const input = document.getElementById("texto").value; //pegando id da Home.jsx
    const inputNumero = document.getElementById("number").value;
    if (input === "" || inputNumero === "") {
      setMensagem("Voce não preencheu o nome ou a idade da forma correta");
      setAlerta(true);
    } else if (input === "" || inputNumero < 18) {
      setMensagem("Voce nao pode acessar porque voce é nenem");
      setAlerta(true);
    } else if (inputNumero <= 0) {
      setMensagem("Voce nem nasceu ainda");
      setAlerta(true);
    } else if (inputNumero >= 18) {
      setMensagem("Voce tem acesso ao site");
      setAlerta(true);
    } else {
      setAlerta(false);
    }
  }

  function Alerta() {
    if (alerta == true)
      return (
        <div className=" bg-gray-100 shadow-2xl rounded-2xl absolute h-30 flex items-center justify-center flex-col  ">
          <h1>{mensagem}</h1>
          <button
            onClick={() => {
              setAlerta(false);
            }}
            className="bg-blue-500 h-10 w-30 rounded-xl border-black border-2 mt-4 hover:bg-blue-600 cursor-pointer text-white"
          >
            OK
          </button>
        </div>
      );
  }

  return (
    <div
      className="flex h-screen items-center justify-center bg-blue-200 flex-col "
      id="fundo"
    >
      <div className="flex flex-col items-center justify-center bg-white h-100 w-120 rounded-2xl shadow-2xl relative">
        <h1 className="mb-10 text-3xl">LOGIN</h1>
        <input
          type="text"
          id="texto"
          placeholder="DigiteSeuNome"
          className="bg-gray-200 border h-9 w-70 mb-5 pl-4 rounded-sm"
        />
        <input
          type="number"
          id="number"
          placeholder="DigiteSuaIdade"
          className="bg-gray-200 border h-9 w-70 mb-5 pl-4 rounded-sm "
        />
        <h1>Preenche os campos</h1>
        <button
          onClick={validacao2}
          className="bg-blue-500 h-10 w-50 rounded-xl border-black border-2 mt-4 hover:bg-blue-600 cursor-pointer text-white"
        >
          Validar
        </button>
        <Link to='/cadastro'><button>Cadastro</button></Link>
      </div>
      {Alerta()}
    </div>
  );
}

export default Home;
