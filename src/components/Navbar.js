import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import {faBell,faPlus} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Postscream  from './Postscream';

 class Navbar extends Component {
    render() {
        if(this.props.authenticated === true){
            return(
                <div>
             <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item ">
                        <Link className="nav-link"to='/' >Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item" >
                        
                        <FontAwesomeIcon icon={faBell}  />
                        
                    </li>
                    <li className="nav-item">
                       <Postscream />
                    </li>
                    </ul>
                
                </div>
             </nav>
             <Redirect to='/' />
            </div>

            )
        }else{
            return (
                <div>
                 
                 <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/" >Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/signup'>signup</Link>
                        </li>  
                        </ul>
                    
                    </div>
                </nav>
    
                </div>
                
            )
        }
       
    }
}
const mapStateToProps=(state)=>({
    authenticated:state.user.authenticated
})
export default connect(mapStateToProps)(Navbar)
