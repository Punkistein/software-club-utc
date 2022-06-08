import './App.css';

import logoDesc from './images/logoBlanco.svg';
import logoName from './images/logo-name.svg';
import logoUTC from './images/logoUTC.svg';
import ImagenQs from './images/quienes-somos.jpeg';

import Enlace from './components/Enlaces.jsx';
import BotonLogin from './components/BotonLogin.jsx';
import Slogan from './components/Slogan';
import BlogCard from './components/BlogCard';

function App() {
  return (
    <div className="App">
      <header className='menuLateral'>
        <img src={logoDesc} className='menuLateral--logoBlanco' />
        <div className='menuLateral--contenedor'>
          <Enlace href='#home'>Inicio</Enlace>
          <Enlace href='#proj'>Proyectos</Enlace>
          <Enlace href='#about'>¿Quiénes Somos?</Enlace>
          <Enlace href='#blog'>Blog</Enlace>
          <Enlace href='#contac'>Contacto</Enlace>
          <BotonLogin >Login</BotonLogin>
        </div>
      </header>

      <div className='mainFlow'>
        <section className='principal' id='home'>
          <div className='principal--contenedorLeft'>
            <Slogan>
              autoeducación
            </Slogan>
          </div>
          <div className='principal--contenedorRight'>
            <img src={logoName} className='principal--logo name' />
            <img src={logoUTC} className='principal--logo utc' />
          </div>
          <img className='principal--imagenFondo' ></img>
        </section>
        <section className='proyectos' id='proj'>
          <h2 className='titulokein'>Titulo</h2>
          <img className='projects--imagenFondo' ></img>
        </section>
        <section className='quienesSomos' id='about'>
          <img className='about--imagenFondo' ></img>
          <img src={ImagenQs} className='imagenQs' />
          <div className='sectionQs'>
           <h1>Quienes somos?
          </h1>
          <div className="infoQs">
          <p >
              Somos estudiantes universitarios innovadores con responsabilidad academica,<br /><br />
              Nuestro Presidente : Saul Guerrero , estudiante de Ingenieria de sistemas de informacion de 6to semestre , 
              estudiante con vision ha sido quien se propone la reapertura del club de software en el ciclo 2022-2022. <br /><br />

              Equipo de trabajo : <br /><br />
              -Kevin Loja <br />
              -Ronald Rodriguez <br />
              -Javier Lasso <br /><br />

              Estudiantes del mismo semestre de ingenieria en sistemas de informacion . <br /><br />
              Contamos con el apoyo de la direccion de carrera de la universidad Tecnica de Cotopaxi  de parte de nuestra coordinadora Veronica Tapia </p>
          </div>
          <div className="imagenUtc">
            
          </div>
              </div>

        </section>
        <section className='blog' id='blog'>
          <BlogCard
            title='Proyecto 1'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec euismod, nisl eget consectetur sagittis, nisl nunc'
          />
          <img className='blog--imagenFondo' ></img>
        </section>
        <section className='contacto' id='contac'>
          <img className='contact--imagenFondo' ></img>
        </section>
      </div>
    </div>
  );
}

export default App;