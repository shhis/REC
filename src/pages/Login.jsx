import Menu from "./Menu";
import Rodape from "../components/Rodape"
import './stylesmenu.css'


function Contato(){
    return(
        <div>
            <Menu/>
            <h1 class="text-center">Cadastro de Produtos</h1>

            <div>
            <form class="text-center">
            <input type="text" placeholder="Nome"></input>
                <br></br>
                <input type="text" placeholder="Email"></input>
                <br></br>
                <input type="Password" placeholder="Senha"></input>
                <br></br>
                <br></br>
                <button>Confirmar</button>
            </form>
            </div>
            <Rodape/>

        </div>
    )
}
export default Contato;