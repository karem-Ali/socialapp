import {SET_SCREAMS,LOADING_DATA,LIKE_SCREAM,UNLIKE_SCREAM,DELETE_SCREAM,LOADING_UI,POST_SCREAM,SET_SCREAM,COMMENT_ON_SCREAM} from '../type' 
import axios from 'axios'
export const getScreams=()=>(dispatch)=>{
    dispatch({type:LOADING_DATA})
    axios.get('/screams')
    .then(res=>{
       
       dispatch({
           type:SET_SCREAMS,
           payload:res.data
       })
    }).catch(error=> console.log(error))
}
export const getScream =(screamid)=>(dispatch)=>{
    dispatch({ type:LOADING_UI})

    axios.get(`/scream/${screamid}`)
    .then(res=>{
        dispatch({
            type:SET_SCREAM ,
            payload:res.data
        })
       
    }).catch(error=>console.log(error))

}
export const likeScream=(screamid)=>(dispatch)=>{
    axios.get(`screams/${screamid}/like`)
    .then(res=>{

         dispatch({
            type:LIKE_SCREAM,
            payload:res.data
        })
    }).catch(error=> console.log(error))

}
export const unlikeScream=(screamid)=>(dispatch)=>{
    axios.get(`screams/${screamid}/unlike`)
    .then(res=>{
        dispatch({
            type:UNLIKE_SCREAM,
            payload:res.data
        })
    }).catch(error=> console.log(error))

}
export const commentOnScream= (screamid,body,location)=>(dispatch)=>{
    axios.post(`/scream/${screamid}/comment`,body)
    .then(res=>{
        dispatch({
          type:  COMMENT_ON_SCREAM,
          payload:res.data
        })
    }).catch(error=>console.log(error))
}
export const deleteScream = (screamid,location)=>(dispatch)=>{
    axios.delete(`/scream/${screamid}`)
    .then((res)=>{
        dispatch(getScreams())
        location.reload();
    }).catch(error=> console.log(error))
}
export const postScream = (newscream)=>(dispatch)=>{
    dispatch({type:LOADING_UI})
    axios.post('/screams',newscream)
    .then(res=>{
        dispatch({
            type: POST_SCREAM,
            payload:res.data
        })
    }).catch(error=>console.log(error))
}