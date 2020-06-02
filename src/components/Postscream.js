import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Modal, Form, FormControl, Button, ButtonToolbar, InputGroup } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import {faBell,faPlus} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {postScream} from '../redux/actions/dataActions'
 class Postscream extends Component {
    state={
        show:false,
        body:'',
      }
      handlechange=(e)=>{
        this.setState({
          [e.target.name] : e.target.value,
        })
    }
    handleclick=()=>{
        console.log(this.props)
        this.props.postScream({body:this.state.body})
        this.setState({
            show:false
        })
        
      }
      
    render() {
        const handleClose = () => this.setState({show:false});
        const handleShow = () => this.setState({show:true});
        return (
           
            <>
                        <FontAwesomeIcon icon={faPlus} onClick={handleShow}  /> 
                        <Modal show={this.state.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Post a scream</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                  <Form>
          <Form.Group controlId="formBasicBio">
            <Form.Label>your Scream</Form.Label>
            <input type="text" className="form-control" name='body' placeholder="Enter your Scream"  onChange={this.handlechange} isRequired/>
            
          </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleclick}>
            Post 
          </Button>
        </Modal.Footer>
      </Modal> 
            </>
        )
    }
}
const mapStateToProps=(state)=>({
    ui:state.UI,
    user:state.user
  })

export default connect(mapStateToProps,{postScream})(Postscream)
