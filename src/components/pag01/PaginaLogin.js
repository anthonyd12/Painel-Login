import './PaginaLogin.css'
import { Link } from 'react-router-dom'

function Pag01(){
    return(
        <div className='body'>
            <div className='containerLogin'>
                <div className='login'>
                    <div className='logo'><logo/></div>

                    <div className='boasVindas'><h1 className='title'>Bem Vindo ao </h1><h1 className='title2'>painel</h1></div>

                    <input className='email' type='email' placeholder='Digite seu email'/>

                    <input className='password' type='password' placeholder='Digite sua senha'/>

                    <button className='button'><Link to='/user' className='link'>Acessar</Link></button>
                </div>
                <div className='img'>
                    
                </div>
            </div>
        </div>
    )
}

export default Pag01