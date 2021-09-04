import classes from './FetchMovies.module.css'
import React from 'react'



const FetchMovies =(props)=>{
const fetchMovies =()=>{
    props.movieFetch()
}


    return(
        <div className={classes.fetchMovies}>
            <div className={classes.btn}>
             <button type='button' onClick={fetchMovies}>Fetch Movies</button>
         </div>
        </div>
    )
}

export default React.memo(FetchMovies)