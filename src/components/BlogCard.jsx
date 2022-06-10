import '../stylesheet/BlogCard.css'

function BlogCard(props) {
  return (
    <div className='blog-card'>
      <h2 className='blog-card--title'>{props.title}</h2>
      <p className='blog-card--text'>{props.text}</p>
    </div>
  )
}

export default BlogCard;