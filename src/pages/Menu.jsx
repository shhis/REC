import './stylesmenu.css'


function Menu(){
    return(
        <div class="text-center menubar text-dark py-2">
            <a href="/"> 

            </a>

             <a href="/"> <img class="logo"
              src="https://www.svgrepo.com/show/484308/white-bear.svg"></img> </a>

        <br></br>
            <a class="menutext" href="/sobre">Sobre</a>&nbsp;&nbsp;&nbsp;
            <a class="menutext" href="/cadastro">Nota Fiscal</a>&nbsp;&nbsp;&nbsp;
            <a class="menutext" href="/login">Entrar</a>&nbsp;&nbsp;&nbsp;

            
        </div>
    )
}
export default Menu;