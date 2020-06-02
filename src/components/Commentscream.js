import React, { Component } from 'react'
import {faComments} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Form,Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {connect} from 'react-redux'
import {getScream,commentOnScream} from '../redux/actions/dataActions'

 class Commentscream extends Component {
    state={
        show:false,
        body:''
       
      }
    handleclick=()=>{
        this.props.commentOnScream(this.props.screamid,{body:this.state.body},this.history)
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
        const handleShow = () => {
            this.setState({show:true})
            this.props.getScream(this.props.screamid)
        }
        console.log(this.props.data.scream)
      const body=this.props.data.scream.body
        return (
            <>
                <FontAwesomeIcon icon={faComments} onClick={handleShow} />
            <Modal show={this.state.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="show-grid">
            <Col xs={6} md={8}>
              <img src={this.props.data.scream.userimg}/>
            </Col>
            <Col xs={6} md={4}>
                <span> {body}</span>
            </Col>
          </Row>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Comment</Form.Label>
            <Form.Control as="textarea" rows="1" name='body' onChange={this.handlechange}/>
        </Form.Group>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancle
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
const mapStateToProps =(state)=>({
    data: state.data
})
export default connect(mapStateToProps,{getScream,commentOnScream})(Commentscream)
