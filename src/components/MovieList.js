import Movie from './Movie'
import classes from './MovieList.module.css'


const MovieList =(props)=>{
  let content
  if(props.error){
    content= <div className={classes.error}>{props.error}</div>
  }
  if(props.movies.length >0){
    content = props.movies.map(movie=>{
      return <Movie key={movie.id} title={movie.title} opnText={movie.openingText}
              rlText={movie.realeseText}/>
    })
  }
  if(props.loading){
    content = <div className={classes.error}>...Loading</div>
  }
  
    return(
      <ul className={classes.movieList}>
        {content}
      </ul>
    )
}

export default MovieList