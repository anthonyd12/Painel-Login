import './App.css';
import {BrowserRouter as Router,  Routes, Route} from 'react-router-dom'


import PaginaLogin from './components/pag01/PaginaLogin';
import Logado from './components/pag02/logado'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<PaginaLogin/>}/>
          <Route path="/user" element={<Logado/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
