import React, { Component } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {signUp} from '../redux/actions/userActions'
 class signup extends Component {
    constructor(){
        super();
       this.state={
            email:'',
            password:'', 
            confiremPassword:'',
            handle:'',
            errors:[]
        }
    }
     handlesubmit=(e)=>{
         e.preventDefault();
         const NewuserData= {
             email: this.state.email,
             password:this.state.password,
             confiremPassword:this.state.confiremPassword,
            handle:this.state.handle
         }
       this.props.signUp(NewuserData,this.props.history)
    }
    handlechange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render() {
      
        return (
            <div>
                <form onSubmit={this.handlesubmit}>
                     <div className="form-group row">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="email" onChange={this.handlechange} className="form-control"name="email" defaultValue={this.state.email}id="inputEmail3"/>
                        </div>
                     </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                        <input type="password" onChange={this.handlechange} name="password"className="form-control"defaultValue={this.state.password}  id="inputPassword3"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="confiremPassword" className="col-sm-2 col-form-label">confiremPassword</label>
                        <div className="col-sm-10">
                        <input type="password" onChange={this.handlechange} name="confiremPassword"className="form-control"defaultValue={this.state.confiremPassword}  id="confiremPassword"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="handle" className="col-sm-2 col-form-label">Handle</label>
                        <div className="col-sm-10">
                        <input type="text" onChange={this.handlechange} name="handle"className="form-control"defaultValue={this.state.handle}  id="handle"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-10">
                        <button type="submit" className="btn btn-primary">sign up</button>
                        </div>
                        <small className="signup-text">
                            Already have an accont  ? <Link to={'/login'}>Log in</Link>
                        </small>
                    </div>
                     <div className="alert alert-danger">
                               
                            </div> 
                        
                </form>
            </div>
             
        )
    }
}
function  mapStateToProps (state){
    return{
        user:state.user,
        ui: state.UI

    }
    
}


export default connect(mapStateToProps,{signUp})(signup)
