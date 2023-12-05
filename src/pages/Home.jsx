import Menu from "./Menu"
import Rodape from "../components/Rodape"
import './stylesmenu.css'



function Home(){
    return(
        <div>
            <Menu/>
            <h1 class="text-center"> Carrossel Quebrou</h1>
            <div class="d-flex justify-content-center">
                <img class="imgmain" src="https://images.pexels.com/photos/19168467/pexels-photo-19168467/free-photo-of-snow-on-rocky-mountain-peak.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
            </div>
            <Rodape/>
       </div>
    )
}
export default Home