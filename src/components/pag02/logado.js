import './logado.css'
import BarraLateral from './barraLateral/BarraLateral'
import BarraSuperior from './BarraSuperior/BarraSuperior'
import Main from './Main/Main'

function Pag02(){
    return(
        <div className='container'>
            <BarraLateral/>
            <BarraSuperior/>
            <Main/>
        </div>
    )
}

export default Pag02