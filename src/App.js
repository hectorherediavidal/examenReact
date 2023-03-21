import logo from './logo.svg';
import './App.css';
import Loginform from './Componentes/login';
import Products from './Componentes/productos';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function App() {
  
  return (
    <div>

    <BrowserRouter>
    <Loginform/>
    <Products/>
    </BrowserRouter>
    </div>
  );

}

export default App;
