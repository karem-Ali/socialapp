import React, { Component } from 'react'
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {connect} from 'react-redux'
import {deleteScream} from '../redux/actions/dataActions'
 class Deletescream extends Component {

    render() {
        return (
            <div>
                <FontAwesomeIcon icon={faTrash} onClick={()=>this.props.deleteScream(this.props.screamid,this.location)}/>
            </div>
        )
    }
}

export default connect(null,{deleteScream}) (Deletescream)
