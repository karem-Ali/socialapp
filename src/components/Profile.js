import React, { Component } from 'react'
import {connect} from 'react-redux'
import {imgUpload} from '../redux/actions/userActions'
import {editUserDetails} from '../redux/actions/userActions'
import {logOut} from '../redux/actions/userActions'
import Details from './Details'
import {Link} from 'react-router-dom'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
import {faCamera, faUserPlus} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

 class Profile extends Component {
      handleimagechange=(e)=>{
          console.log(e.target.files)
        const img= e.target.files[0]
       const formData = new FormData()
       formData.append('imgurl',img,img.name)
       console.log(img.name)
        this.props.imgUpload(formData)
     }
     handleeditpic=()=>{
         const inputfile= document.getElementById('imageinput')
         inputfile.click()

     }
     handleLogout=()=>{
         this.props.logOut()
     }
    render() {

        dayjs.extend(relativeTime)
        const user=this.props.user
        const handle= user.credentials?.handle
        const imgurl=user.credentials?.imgurl
        const createdAt=user.credentials?.createdAt
        const loading = user?.loading
        const authenticated= user?.authenticated
        const email=user.credentials?.email
        const bio=user.credentials?.bio
        const location=user.credentials?.location
       let profileMarkup= !loading ? (authenticated ?(
           <div>
               <div>
                    <img src={imgurl} />
                    <input type='file' hidden='hidden'id='imageinput' onChange={this.handleimagechange} />
                    <FontAwesomeIcon icon={faCamera}  onClick={this.handleeditpic}/>

                </div>
           <hr/>
            <div>
            <Link to={`/users/${handle}`} >{handle}</Link>
           </div> 
           <hr/>
            {email &&<div>{email}</div>}
            {bio &&<div>{bio}</div>}
            {location &&<div>{location}</div>}


           <hr/>   
       {createdAt && <div>{dayjs(createdAt).fromNow()}</div>}
            <div>
                 <button type="button" className="btn btn-danger" onClick={this.handleLogout}>logOut</button>
                 <Details />     

           </div>

           </div>   
           
       ):(
           <div>
               <p> not profile found please try again</p>
           </div>
       )):(<p>... loading </p>)
       return profileMarkup
    }
}
const mapStateToProps=(state)=>({
    user: state.user
})
export default connect(mapStateToProps,{imgUpload,logOut,editUserDetails})(Profile)
