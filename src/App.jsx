import './App.css';

import logoDesc from './images/logoBlanco.svg';
import logoName from './images/logo-name.svg';
import logoUTC from './images/logoUTC.svg';

import blogLeng from './images/blog-lenguajes.jpg';
import blogHerr from './images/blog-herr.jpg';
import blogEdu from './images/blog-edutech.jpg';
import blogUTC from './images/blog-utc2022.jpeg';

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
          <img className='projects--imagenFondo' ></img>
        </section>
        <section className='quienesSomos' id='about'>
          <img className='about--imagenFondo' ></img>
        </section>
        <section className='blog' id='blog'>
          <BlogCard
            title='Lenguajes de programación más demandados'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec euismod, nisl eget consectetur sagittis, nisl nunc'
            image={blogLeng}
          />
          <BlogCard
            title='Herramientas tecnológicas 2022'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec euismod, nisl eget consectetur sagittis, nisl nunc'
            image={blogHerr}
          />
          <BlogCard
            title='Herramientas tecnológicas estudiantiles'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec euismod, nisl eget consectetur sagittis, nisl nunc'
            image ={blogEdu}
          />
          <BlogCard
            title='La UTC en 2022'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec euismod, nisl eget consectetur sagittis, nisl nunc'
            image ={blogUTC}
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