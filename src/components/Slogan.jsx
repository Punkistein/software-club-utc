import '../stylesheet/Slogan.css';

function Slogan(props) {
  return (
    <div className='slogan'>
      <h2 >
        La <span>{props.changeWord}</span> es la clave del éxito.
      </h2>
    </div>
  )
}

export default Slogan;