import axios from 'axios'
import {SET_USER , SET_ERRORS, LOADING_UI,CLEAR_ERRORS, SET_UNAUTHENTICATED,LOADING_USER} from '../type'
export const loginUser=(userData,history)=>(dispatch)=>{
   dispatch({ type:LOADING_UI})
    axios.post('/login',userData,history)
    .then((res)=>{
        setAuthorization(res.data.token)
      dispatch(getUser())
      console.log(res)
       dispatch({type:CLEAR_ERRORS}) 
       history.push('/')
    }).catch((err)=>{ 
        dispatch({
            type:SET_ERRORS,
            payload:err.response.data
        })
    })
}
export const getUser= ()=>(dispatch)=>{
    dispatch({type:LOADING_USER})
    axios.get(`/user`)
    .then(res=>{
        console.log(res)
        dispatch({
            type:SET_USER,
            payload:res.data
        })
    }).catch(err=> console.log(err))
}
export const signUp=(newUser,history)=>(dispatch)=>{
    dispatch({ type:LOADING_UI})
     axios.post('/signup',newUser,history)
     .then((res)=>{
        setAuthorization(res.data.token)
       dispatch(getUser())
        dispatch({type:CLEAR_ERRORS})
        history.push('/')
     }).catch((err)=>{  
         dispatch({
             type:SET_ERRORS,
             payload:err.response.data
         })
     })
 }
 export const imgUpload=(formData)=>(dispatch)=>{
     dispatch({type:LOADING_USER})
     axios.post('/user/image',formData)
     .then((res)=>{
         dispatch(getUser())
         console.log(res)
     }).catch(error=> console.log(error.response.data))
 }
 export const logOut=()=>(dispatch)=>{
     localStorage.removeItem('FBIdToken')
     delete axios.defaults.headers.common['Authorization']
     dispatch({type:SET_UNAUTHENTICATED})
 }
 export const editUserDetails=(userDetails)=>(dispatch)=>{
    dispatch({type:LOADING_USER})
    axios.post('/user',userDetails)
    .then(()=>{
        dispatch(getUser())
    }).catch(error=>console.log(error))
 }
 const setAuthorization= (token)=>{
    const FBIdToken= `Bearer${token}`;
    localStorage.setItem('FBIdToken',`Bearer${token}`)
    axios.defaults.headers.common['Authorization']=`Bearer${token}`
 }
 