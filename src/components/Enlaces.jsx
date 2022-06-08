import '../stylesheet/Enlaces.css';

function Enlaces(props){
  
  return (
    <a className='enlace' id='style-3'>
      {props.children}
    </a>
  );
}

export default Enlaces;