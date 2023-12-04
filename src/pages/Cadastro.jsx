import Menu from "./Menu";
import Rodape from "../components/Rodape"
import './stylesmenu.css'


function Cadastro(){
    return(
        <div>
            <Menu></Menu>
            <h1 class="text-center">Nota Fiscal</h1>

            <div>
            <form class="text-center">
            <input type="number" placeholder="Numero da Nota"></input>
                <br></br>
                <input type="text" placeholder="Descrição"></input>
                <br></br>
                <input type="number" placeholder="Valor"></input>
                <br></br>
                <input type="number" placeholder="Quantidade"></input>
                <br></br>
                <input type="date" placeholder="Data de Emissão"></input>
                <br></br>
                <button>Confirmar</button>
            </form>
            </div>
            <Rodape/>

        </div>
    )
}
export default Cadastro;