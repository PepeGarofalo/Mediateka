/* eslint-disable no-unused-vars */
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom'
import './App.css'
import Animados from './components/animados'
import Capsulas from './components/capsulas'
import Experiencias from './components/experiencias'
import Programas from './components/programas'
import Spots from './components/spots'
import NavbarExample from './layouts/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login'
import Formulary from './components/formulario'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavbarExample />}>
            <Route index element={<Animados />} />
            <Route path='capsulas' element={<Capsulas />} />
            <Route path='experiencias' element={<Experiencias />} />
            <Route path='programas' element={<Programas />} />
            <Route path='spots' element={<Spots />} />
            <Route path='login' element={<Login/>}/>
            <Route path='formulario' element={<Formulary/>}/>
            <Route path='*' element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}


export default App
