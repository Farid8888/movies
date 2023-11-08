import AddForm from "./components/AddForm/AddForm"
import FetchMovies from "./components/FetchMovies"
import React,{useState,useEffect,useCallback} from 'react'
import MoveList from './components/MovieList'


const App =()=>{
  const[movies,setMovies] = useState([])
  const [error,setError] = useState(null)
  const [loading,setLoading] = useState(false)
  const movieHandler =useCallback(async()=>{
    setLoading(true)
    setError(null)
    try{
      const response = await fetch('https://movies-668e8-default-rtdb.firebaseio.com/movies.json')
      if(!response.ok){
        throw new Error('Something wrong')
      }
      const data = await response.json()
      let moviesData = []
      for(const key in data){
              moviesData.push({
                  title:data[key].title,
                  openingText:data[key].openingText,
                  realeseText:data[key].realeseText,
                  id:key
              })
      }
      setMovies(moviesData)
        setLoading(false)
    }catch(error){
      setError(error.message)
      setTimeout(()=>{
           setLoading(false)
           },300)
    }
    
    // let moviesData =[]
    // fetch('https://movies-668e8-default-rtdb.firebaseio.com/movies.json').
    // then(responseData=>responseData.json()).then(data=>{
    //  for(const key in data){
    //       moviesData.push({
    //           title:data[key].title,
    //           openingText:data[key].openingText,
    //           realeseText:data[key].realeseText,
    //           id:key
    //       })
    //  }
    //  setMovies(moviesData)
    //  setLoading(false)
    // }).catch(error=>{
    //   setError(error.message)
    //   setTimeout(()=>{
    //     setLoading(false)
    //   },300)
    // })
  },[])
  

useEffect(()=>{
movieHandler()
},[movieHandler])



  console.log(movies)
  
  return(
    <div>
      <AddForm/>
      <FetchMovies movieFetch={movieHandler} />
      <MoveList movies={movies} error={error} loading={loading}/>
    </div>
  )
}

export default React.memo(App)