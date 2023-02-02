import './BarraLateral.css'
import { Link } from 'react-router-dom'

function BarraLateral(){

    return(
        <div className='containerBarra'>
            <div className='logotipo'></div>
            <div className='inicio'><Link to='/' className='linkHome'>Inicio</Link></div>
            <div className='topics'>
                <div className='box'><h3>Contratos</h3></div>
                <div className='box'><h3>Contratos</h3></div>
                <div className='box'><h3>Contratos</h3></div>
                <div className='box'><h3>Contratos</h3></div>
                <div className='box'><h3>Contratos</h3></div>
            </div>
        </div>
    )
}

export default BarraLateral