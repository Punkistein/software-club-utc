import '../stylesheet/Slogan.css';
import Typical from 'react-typical';
function Slogan(props) {
  return (
    <div className='slogan'>
      <h2 className='slogan--words'>
        La{' '}
        <Typical
          loop={1}
          wrapper="span"
          steps={[
            'autoeducación',
            3000,
            'disciplina',
            3000,
            'creatividad',
            3000,
            'innovación',
            3000,
            'diligencia',
            3000
          ]}
        />
        <br />es la clave del éxito.
      </h2>
    </div>
  )
}

export default Slogan;