import classes from './AddForm.module.css'
import {useState,useRef} from 'react'


const AddForm = ()=>{
    const titleRef = useRef()
    const opnText =useRef()
    const rlText =useRef()
  


   const onSubmitHandler =(event)=>{
    event.preventDefault()
    const movies ={
        title:titleRef.current.value,
        openingText:opnText.current.value,
        realeseText:rlText.current.value
        }

   fetch('https://movies-668e8-default-rtdb.firebaseio.com/movies.json',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(movies)
   }
   )
   titleRef.current.value=''
   opnText.current.value=''
   rlText.current.value=''
   }
    return(
     <form className={classes.form} onSubmit={onSubmitHandler}>
         <div className={classes.text}>
             <label htmlFor='title'>Title</label>
             <input id="title" type="text" required ref={titleRef}></input>
         </div>
         <div className={classes.text}>
             <label htmlFor='opening text'>Opening Text</label>
             <textarea id="opening text" rows='5' required type="text" ref={opnText}></textarea>
         </div>
         <div className={classes.text}>
             <label htmlFor="release date">Release Date</label>
             <input id='release date' type="text" required ref={rlText}></input>
         </div>
         <div className={classes.btn}>
             <button type="submit">Add Move</button>
         </div>
     </form>
    )
}


export default AddForm