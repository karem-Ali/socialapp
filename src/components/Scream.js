import React, { Component,Fragment } from 'react'
import { Link } from 'react-router-dom';
import Deletescream from './Deletescream'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
import {faComments} from "@fortawesome/free-solid-svg-icons";
import {faHeart} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {connect} from 'react-redux'
import {likeScream,unlikeScream} from '../redux/actions/dataActions'
import Commentscream from './Commentscream'
 class Scream extends Component {
   likedScream= ()=>{
     if(this.props.user.like &&
       this.props.user.like.find(like=> like.screamid === this.props.scream.screamid))
       return true 
       else return false
   }
   likeScream=()=>{
    this.props.likeScream(this.props.scream.screamid)

   }
   unlikeScream=()=>{
    this.props.unlikeScream(this.props.scream.screamid)
   }
    render() {
      console.log(this.props.user)
      const user= this.props.user
      dayjs.extend(relativeTime)
        const scream= this.props.scream;
        console.log(this.props.scream)
        console.log(user.authenticated)
        console.log(user.handle === scream.userHandle,user.credentials.handle,this.props.scream.userHandle)
        const deleteButton= (user.authenticated && user.credentials.handle == scream.userHandle ) ? (
          <Deletescream screamid={scream.screamid} />
        ): null;
        let likebtn
           if(!user.authenticated){
             likebtn=( <Link to='/login'>
              <FontAwesomeIcon icon={faHeart}  /><span>{scream.countlike} likes</span> 
               </Link>)
          }else{
            if(this.likedScream()){
              likebtn =
              <>
                <FontAwesomeIcon icon={faHeart} className="heart-like" onClick={()=>this.props.unlikeScream(this.props.scream.screamid)}  /><span>{scream.countlike} likes</span> 
              </>
            }else{
              likebtn=
               <>
                <FontAwesomeIcon icon={faHeart}  onClick={()=>this.props.likeScream(this.props.scream.screamid)}  /><span>{scream.countlike} likes</span> 
                </>

            }
          }
   
       return (
         <>
         <div>
            {deleteButton}
         </div>
        <div className="media">
        <img src={scream.userimg} className="mr-3" alt="..."/>
        <div className="media-body">
        <Link className="links" to={`/users/${scream.userHandle}`}><h5 className="mt-0">{scream.userHandle}</h5></Link>
              <p className="card-text">{dayjs(scream.createdAt).fromNow()}</p>
               <p className="card-text">{scream.body}</p>
               {likebtn}
            <Commentscream screamid={scream.screamid} />  <span>{scream.countcomment} comment </span>            

        </div>
      </div>
        </>
       )
    }
}
const mapStateToProps=(state)=>({
  user: state.user
})
export default connect(mapStateToProps,{likeScream,unlikeScream})  (Scream)
