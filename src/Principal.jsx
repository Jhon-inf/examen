import { BrowserRouter,Routes,Route,Link} from "react-router-dom";
import "./estilos.css"
import Acordeon1 from "./Acordeon1.jsx";
import Card1 from "./Card1.jsx";

function Inicio(props){
    return(
        <div className="inicio">
            <h1>Danzas de Bolivia</h1>
            <Acordeon1></Acordeon1>
        </div>
    );
}
function Oferta(props){
    return(
        <div className="oferta">
            <h1>Oferta de cursos</h1>
            <Card1></Card1>
        </div>
    );
}

function Principal(props)
{
    return(
        <div>
            <nav>
                <h1>Academia de Baile "Sergio el Bailador"</h1>
                <h2>Menu</h2>
                <ul>
                    <li>
                        <Link to="/"><b>INICIO</b></Link>
                    </li>
                    <li>
                        <Link to="/pag2"><b>OFERTA DE CURSOS</b></Link>
                    </li>
                </ul>
            </nav>
            <section>
                
                <Routes>
                    <Route path="/" element={<Inicio></Inicio>}></Route>
                    <Route path="/pag2" element={<Oferta></Oferta>}></Route>
                </Routes>
            </section>
            <footer>
                Jhonatan Dueñas Barrios &copy;2025
            </footer>
        </div>
    )
}

export default Principal;