import './App.css';

import logoDesc from './images/logoBlanco.svg';
import logoName from './images/logo-name.svg';

import Enlace from './components/Enlaces.jsx';
import BotonLogin from './components/BotonLogin.jsx';
import Slogan from './components/Slogan';

function App() {
  return (
    <div className="App">

      <header className='menuLateral'>
        <img src={logoDesc} className='logoBlanco' />
        <Enlace>Inicio</Enlace>
        <Enlace>Proyectos</Enlace>
        <Enlace>¿Quiénes?</Enlace>
        <Enlace>Blog</Enlace>
        <Enlace>Contacto</Enlace>
        <BotonLogin>Login</BotonLogin>
      </header>

      <main>
        <div className='principal'>
          {/* <img src={logoName} className='logoName' /> */}
          <Slogan changeWord='autoeducación' />
          <img className='imagenFondo' ></img>
        </div>
        <div className='proyectos'>
        </div>
        <div className='quienesSomos'>
        </div>
        <div className='blog'>
        </div>
        <div className='contacto'>

        </div>
      </main>
    </div>
  );
}

export default App;