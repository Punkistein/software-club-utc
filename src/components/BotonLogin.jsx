import EstilosBoton from '../stylesheet/BotonLogin.css';

function BotonLogin(props) {
  return (
    <button className='botonLogin' id='botonLogin'>
      <span>{props.children}</span>
    </button>
  );
};

export default BotonLogin;