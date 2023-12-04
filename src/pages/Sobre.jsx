import Menu from "./Menu";
import Rodape from "../components/Rodape"
import './stylesmenu.css'



function Sobre(){
    return(
        <div>
            <Menu/>
            <h1 class="text-center my-2 title">Sobre</h1>
            <div class="d-flex justify-content-center">
                <p class="p-2 text-center psobre"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus quibusdam facilis ab nemo, libero, fugiat voluptas, enim cumque repellendus magni rem. Eligendi autem quos doloribus. Similique magnam iusto voluptate ipsa! </p>
            </div>
            <div class="d-flex justify-content-center">
            <img class="mt-3 imgmain" src="https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>

            </div>
            <Rodape/>

        </div>
    )
}
export default Sobre;