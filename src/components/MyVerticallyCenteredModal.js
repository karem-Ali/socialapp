import React,{ Component} from 'react'
import { Button } from 'react-bootstrap'
import{Modal} from 'react-bootstrap'
import {Form} from 'react-bootstrap'
import { connect } from 'react-redux'
import {editUserDetails} from '../redux/actions/userActions'
const  MyVerticallyCenteredModal=(props)=>{
   const state={
    bio:'',
    location:'',
    website:''
  }
    let  handleclick = ()=>{
      props.action(state)
      console.log(state)
    
  }
  let handlechange=(e)=>{
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(state)      
  }
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
                  <Form>
          <Form.Group controlId="formBasicBio">
            <Form.Label>bio</Form.Label>
            <Form.Control type="text" name='bio' placeholder="Enter yout Bio" />
            <Form.Text className="text-muted">
            
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasiclocation">
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" name="location"placeholder="Location" />
          </Form.Group>
          <Form.Group controlId="formBasicwebsite">
            <Form.Label>Website</Form.Label>
            <Form.Control type="text" name="website"placeholder="Location" />
          </Form.Group>
          
          </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary"  onClick={handleclick} onChange={handlechange}>
             Edit
          </Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
    
}

export default MyVerticallyCenteredModal
