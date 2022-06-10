import '../stylesheet/Card.css';
// import Pro1 from '../images/Pr1.jpeg';


function card(props) {

  return (

    <article class="card">
      <img src={props.image} className='card' />
      <div class="card__content">
      
        <h3 class="card__title">{props.title}</h3>
        <p class="card__description">{props.description}</p>
        
      </div>
    </article>)
}


export default card;