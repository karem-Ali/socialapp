import React,{ useState,Component} from 'react'
import { Modal, Form, FormControl, Button, ButtonToolbar, InputGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import {editUserDetails} from '../redux/actions/userActions'
 class Details extends Component {
  state={
    show:false,
    bio:'',
    location:'',
    website:''
  }
  handleclick=()=>{
    console.log(this.state)
    this.props.editUserDetails(this.state)
    this.setState({
      show:false
    })
    
  }
  handlechange=(e)=>{
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  render() {
  const handleClose = () => this.setState({show:false});
  const handleShow = () => this.setState({show:true});
  
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
       Edit
      </Button>
      <Modal show={this.state.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                  <Form>
          <Form.Group controlId="formBasicBio">
            <Form.Label>bio</Form.Label>
            <Form.Control type="text" name='bio' placeholder="Enter yout Bio" onChange={this.handlechange}/>
            <Form.Text className="text-muted">
            
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasiclocation">
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" name="location"placeholder="Location" onChange={this.handlechange} />
          </Form.Group>
          <Form.Group controlId="formBasicwebsite">
            <Form.Label>Website</Form.Label>
            <Form.Control type="text" name="website"placeholder="Website" onChange={this.handlechange}/>
          </Form.Group>
          
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleclick}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
  }
   
    
}
const mapStateToProps=(state)=>({
  user:state.user
})
export default connect(mapStateToProps,{editUserDetails})(Details)
