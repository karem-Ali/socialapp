import React, { Component } from 'react'
import axios from 'axios';
import Scream from '../components/Scream'
import Profile from '../components/Profile'
import {connect} from 'react-redux'
import {getScreams} from '../redux/actions/dataActions'
 class home extends Component {

     componentWillMount(){
        
        this.props.getScreams()
        //const screams= this.props.data?.screams
        
     }
     render() {
        let screams=[]
        let markupscreams;
         screams= this.props.data?.screams
         console.log(screams)
         if(screams.length >0){
            const loading= this.props.data?.loading
             markupscreams= !loading ? ( 
                   screams.map((scream)=> <div key={scream.screamid}><Scream scream={scream} /></div> ) 
              ):<p>loading ....</p>
         }else{
             return <div>... loading </div>
         }
        // const loading= this.props.data?.loading
        //  let markupscreams= !loading ? ( 
        //         screams.map((scream)=> <div key={scream.screamid}><Scream scream={scream} /></div> ) 
        //    ):<p>loading ....</p>
        return (
            <div className="container home">
                <div className="row">
     <div className="col-sm-8">{markupscreams}</div>
                    <div className="col-sm-4"><Profile /></div>
                </div>
                </div>
            
        )

        
        
   
    }
    
}
const mapStateToProps=(state)=>({
    data:state.data
})
export default connect(mapStateToProps,{getScreams})(home)
