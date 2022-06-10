import '../stylesheet/BlogCard.css'

function BlogCard(props) {
  return (
    <div className='blog-card'>
      <img className='blog-card--imagenFondo' src={props.image}></img>
      <div className='blog-cardContent'>
        <h2 className='blog-card--title'>{props.title}</h2>
        <p className='blog-card--text'>{props.text}</p>
      </div>
    </div>
  )
}

export default BlogCard;