import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {loginUser} from '../redux/actions/userActions'

 class login extends Component {
    constructor(){
        super();
       this.state={
            email:'',
            password:'', 
            errors:[],
        }
    }
     handlesubmit=(e)=>{
         e.preventDefault();
         const userData= {
             email: this.state.email,
             password:this.state.password
         }
         this.props.loginUser(userData,this.props.history)
         //this.setState({
           //  authenticated :true
         //})
        
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
                        <div className="col-sm-10">
                        <button type="submit" className="btn btn-primary">Log in</button>
                        </div>
                        <small className="signup-text">
                            don't have an accont signup ? <Link to={'/signup'}>Signup</Link>
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


export default connect(mapStateToProps,{loginUser}) (login)
