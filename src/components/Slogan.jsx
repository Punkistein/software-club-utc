import '../stylesheet/Slogan.css';
import Typical from 'react-typical';
function Slogan(props) {
  return (
    <div className='slogan'>
      <h2>
        La{' '}
        <Typical
          loop={1}
          wrapper="span"
          steps={[
            'autoeducación',
            5000,
            'disciplina',
            5000,
            'creatividad',
            5000,
            'innovación',
            5000,
            'diligencia',
            5000,
          ]}
        />
        <br />es la clave del éxito.
      </h2>
    </div>
  )
}

export default Slogan;